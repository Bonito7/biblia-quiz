import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY_PHONE = 'bibliaQuiz_phone';
const BACKEND_URL = import.meta.env.VITE_PAYMENT_BACKEND_URL || '';

export const AuthProvider = ({ children }) => {
  const [phone, setPhone] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);

  // On mount: rehydrate phone from localStorage
  useEffect(() => {
    const savedPhone = localStorage.getItem(STORAGE_KEY_PHONE);
    if (savedPhone) {
      setPhone(savedPhone);
      setIsAuthenticated(true);
      checkPaymentStatus(savedPhone);
    }
    setIsLoadingAuth(false);
  }, []);

  const checkPaymentStatus = async (userId) => {
    if (!userId) return;
    try {
      setIsLoadingPayment(true);

      // Check local cache first for offline resilience
      const localPaid = localStorage.getItem(`bibliaQuiz_paid_${userId}`) === 'true';

      const response = await fetch(`${BACKEND_URL}/api/payments/status/biblia-quiz/${encodeURIComponent(userId)}`);
      if (response.ok) {
        const data = await response.json();
        setIsPaid(data.paid);
        if (data.paid) {
          localStorage.setItem(`bibliaQuiz_paid_${userId}`, 'true');
        } else {
          // If backend says not paid but local cache says paid, trust local cache
          // (handles webhook delay)
          if (localPaid) setIsPaid(true);
        }
      } else {
        // Backend error: fall back to local cache
        setIsPaid(localPaid);
      }
    } catch (error) {
      console.error('Error checking payment status:', error);
      const localPaid = localStorage.getItem(`bibliaQuiz_paid_${userId}`) === 'true';
      setIsPaid(localPaid);
    } finally {
      setIsLoadingPayment(false);
    }
  };

  const loginWithPhone = async (sanitizedPhone) => {
    localStorage.setItem(STORAGE_KEY_PHONE, sanitizedPhone);
    setPhone(sanitizedPhone);
    setIsAuthenticated(true);
    await checkPaymentStatus(sanitizedPhone);
  };

  const logout = () => {
    const savedPhone = localStorage.getItem(STORAGE_KEY_PHONE);
    // Keep paid status in local cache so user doesn't have to re-verify after logout
    localStorage.removeItem(STORAGE_KEY_PHONE);
    setPhone(null);
    setIsAuthenticated(false);
    setIsPaid(false);
  };

  return (
    <AuthContext.Provider value={{
      // Expose phone as "user" for backward compat with PaymentGate
      user: phone ? { id: phone, phone } : null,
      phone,
      isAuthenticated,
      isLoadingAuth,
      isLoadingPublicSettings: false, // No longer needed, kept for App.jsx compat
      authError: null,                // No longer needed
      isPaid,
      isLoadingPayment,
      loginWithPhone,
      logout,
      checkPaymentStatus: () => checkPaymentStatus(phone),
      navigateToLogin: () => {},      // No-op, kept for App.jsx compat
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
