import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Home, Trophy, Map, Star, Users, Settings, ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { to: "/", icon: Home, label: "Accueil" },
  { to: "/maps", icon: Map, label: "Cartes" },
  { to: "/noms-de-dieu", icon: Star, label: "Noms" },
  { to: "/vie-sociale", icon: Users, label: "Vie Juive" },
  { to: "/scores", icon: Trophy, label: "Scores" },
  { to: "/settings", icon: Settings, label: "Réglages" },
];

const ROOT_PATHS = ["/", "/maps", "/noms-de-dieu", "/vie-sociale", "/scores", "/settings"];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = ROOT_PATHS.includes(location.pathname);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header
        className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {isRoot ? (
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading text-lg font-semibold leading-tight">Biblia-Quiz</h1>
                <p className="text-[10px] text-muted-foreground leading-tight tracking-wide uppercase">Testez vos connaissances</p>
              </div>
            </Link>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </button>
          )}
        </div>
      </header>

      {/* Main Content with slide transitions */}
      <main className="flex-1 pb-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
          {navItems.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
            return (
              <button
                key={to}
                onClick={() => navigate(to)}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors min-w-[44px] ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${active ? "scale-110" : ""}`} />
                <span className="text-[10px] font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}