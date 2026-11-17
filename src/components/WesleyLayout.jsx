import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, Home, Music, Users, MapPin, ScrollText, ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { path: "/wesley", icon: Home, key: "home" },
  { path: "/wesley/john", icon: ScrollText, key: "john" },
  { path: "/wesley/charles", icon: Music, key: "charles" },
  { path: "/wesley/parents", icon: Users, key: "parents" },
  { path: "/wesley/sermons", icon: BookOpen, key: "sermons" },
  { path: "/wesley/travels", icon: MapPin, key: "travels" },
];

const ROOT_PATHS = navItems.map(n => n.path);

export default function WesleyLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
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
            <>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-lg flex-shrink-0">
                ✝️
              </div>
              <div>
                <h1 className="font-heading text-lg font-semibold leading-tight">{t("nav.wesleyTitle")}</h1>
                <p className="text-[10px] text-muted-foreground leading-tight">{t("nav.wesleyTagline")}</p>
              </div>
            </>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {t("common.back")}
            </button>
          )}
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

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
          {navItems.map(({ path, icon: Icon, key }) => {
            const active = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[44px] ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${active ? "scale-110" : ""}`} />
                <span className="text-[10px] font-medium">{t(`wesley.nav.${key}`)}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
