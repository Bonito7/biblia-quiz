import React, { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Loader2, LogOut, Map, Award, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PaymentGate({ children }) {
  const { user, phone, isPaid, isLoadingPayment, checkPaymentStatus, logout } = useAuth();
  const userId = phone || user?.id || user?.email || 'guest';
  const [isInitiating, setIsInitiating] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // If loading payment status, show spinner
  if (isLoadingPayment) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500 mb-2" />
        <p className="text-slate-400 text-sm">Vérification de votre statut de paiement...</p>
      </div>
    );
  }

  // If paid, render the children (unlocked app)
  if (isPaid) {
    return children;
  }

  // Initiate payment link creation via backend
  const handlePay = async () => {
    try {
      setIsInitiating(true);
      setErrorMessage(null);
      const backendUrl = import.meta.env.VITE_PAYMENT_BACKEND_URL || '';
      
      const response = await fetch(`${backendUrl}/api/payments/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          appId: 'biblia-quiz',
          amount: 5000,
          title: 'Accès complet - Biblia Quiz'
        }),
      });

      if (!response.ok) {
        throw new Error('Impossible de créer le lien de paiement');
      }

      const data = await response.json();
      
      if (data.paymentUrl) {
        // Redirect the user to the Jeko payment page
        window.location.href = data.paymentUrl;
      } else {
        throw new Error('Lien de paiement non reçu');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      setErrorMessage(
        "Une erreur s'est produite lors de la connexion au serveur de paiement. Veuillez réessayer."
      );
      setIsInitiating(false);
    }
  };

  // Recheck payment status
  const handleCheckStatus = async () => {
    try {
      setIsChecking(true);
      setErrorMessage(null);
      await checkPaymentStatus();
    } catch (error) {
      console.error('Error checking payment:', error);
      setErrorMessage("Impossible de vérifier le statut. Veuillez réessayer.");
    } finally {
      setIsChecking(false);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Toutes les catégories débloquées",
      desc: "Accédez à plus de 1000 questions (Ancien/Nouveau Testament, Wesley, Vie Sociale Juive)."
    },
    {
      icon: Map,
      title: "Cartes bibliques interactives",
      desc: "Visualisez les voyages de Paul, l'Exode et les lieux saints en haute résolution."
    },
    {
      icon: Award,
      title: "Suivi des scores & progression",
      desc: "Enregistrez vos scores, comparez vos performances et mesurez votre progression."
    },
    {
      icon: ShieldCheck,
      title: "Accès à vie sans publicité",
      desc: "Payez une seule fois, profitez de toutes les futures mises à jour gratuitement."
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background orbs decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl z-10"
      >
        <Card className="border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl text-slate-100 overflow-hidden">
          <CardHeader className="text-center border-b border-slate-800/60 pb-8 pt-8">
            <div className="mx-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Accès Premium Biblia-Quiz
            </div>
            <CardTitle className="font-heading text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Débloquez la Sagesse
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2 max-w-md mx-auto text-sm sm:text-base">
              Rejoignez les passionnés de la Bible et approfondissez vos connaissances avec notre expérience complète.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-8 pb-8 px-6 sm:px-10">
            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-amber-500 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-800 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-amber-500/10 pointer-events-none">
                <ShieldCheck className="w-24 h-24" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Paiement unique</p>
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">5 000</span>
                <span className="text-lg sm:text-xl font-bold text-slate-300">F CFA</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Paiement sécurisé via <b>Jeko</b> (Wave, Orange, MTN, Moov, Djamo, etc.)
              </p>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                {errorMessage}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4 border-t border-slate-800/60 pt-6 pb-8 px-6 sm:px-10">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                onClick={handlePay}
                disabled={isInitiating || isChecking}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-6 rounded-xl transition-all shadow-lg shadow-orange-500/10 border-0 flex items-center justify-center gap-2"
              >
                {isInitiating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Redirection...
                  </>
                ) : (
                  <>
                    Débloquer maintenant
                  </>
                )}
              </Button>

              <Button
                onClick={handleCheckStatus}
                variant="outline"
                disabled={isInitiating || isChecking}
                className="w-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:text-white text-slate-300 font-semibold py-6 rounded-xl flex items-center justify-center gap-2"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Vérification...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Vérifier mon paiement
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between w-full text-xs text-slate-500 mt-2 px-2">
              <span>Connecté en tant que: <strong className="text-slate-400">{userId}</strong></span>
              <button
                onClick={() => logout()}
                className="flex items-center gap-1 text-slate-400 hover:text-red-400 transition-colors font-medium bg-transparent border-0 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                Se déconnecter
              </button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
