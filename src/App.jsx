import { Toaster } from "@/components/ui/toaster"
import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Scores from './pages/Scores';
import BibleMaps from './pages/BibleMaps';
import NomsDesDieu from './pages/NomsDesDieu';
import VieSocialeJuive from './pages/VieSocialeJuive';
import WesleyLayout from './components/WesleyLayout';
import WesleyHome from './pages/WesleyHome';
import JohnWesley from './pages/JohnWesley';
import CharlesWesley from './pages/CharlesWesley';
import WesleyParents from './pages/WesleyParents';
import WesleySermons from './pages/WesleySermons';
import WesleyTravels from './pages/WesleyTravels';
import Settings from './pages/Settings';
import PaymentGate from '@/components/PaymentGate';
import LoginScreen from '@/components/LoginScreen';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isAuthenticated } = useAuth();

  // Show loading spinner while rehydrating auth from localStorage
  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-950">
        <div className="w-8 h-8 border-4 border-slate-700 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Not logged in → show phone login screen
  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  // Logged in → check payment status before showing the app
  return (
    <PaymentGate>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/maps" element={<BibleMaps />} />
          <Route path="/noms-de-dieu" element={<NomsDesDieu />} />
          <Route path="/vie-sociale" element={<VieSocialeJuive />} />
        </Route>
        <Route element={<WesleyLayout />}>
          <Route path="/wesley" element={<WesleyHome />} />
          <Route path="/wesley/john" element={<JohnWesley />} />
          <Route path="/wesley/charles" element={<CharlesWesley />} />
          <Route path="/wesley/parents" element={<WesleyParents />} />
          <Route path="/wesley/sermons" element={<WesleySermons />} />
          <Route path="/wesley/travels" element={<WesleyTravels />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </PaymentGate>
  );
};


function useDarkMode() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // System preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => document.documentElement.classList.toggle("dark", e.matches);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);
}

function App() {
  useDarkMode();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App