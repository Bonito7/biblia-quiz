import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BookOpen, Home, Trophy, Map, Star, Users } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { getLanguage, getDir, t } from "../lib/i18n";

export default function Layout() {
  const location = useLocation();
  const [lang, setLang] = useState(getLanguage());

  return (
    <div className="min-h-screen bg-background flex flex-col" dir={getDir(lang)}>
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-lg font-semibold leading-tight">Biblia-Quiz</h1>
              <p className="text-[10px] text-muted-foreground leading-tight tracking-wide uppercase">{t(lang, 'tagline')}</p>
            </div>
          </Link>
          <nav className="flex items-center gap-1">
            <LanguageSelector onLanguageChange={setLang} />
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">{t(lang, 'home')}</span>
            </Link>
            <Link
              to="/maps"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/maps" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Cartes</span>
            </Link>
            <Link
              to="/noms-de-dieu"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/noms-de-dieu" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Noms de Dieu</span>
            </Link>
            <Link
              to="/vie-sociale"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/vie-sociale" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Vie Juive</span>
            </Link>
            <Link
              to="/scores"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/scores" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">{t(lang, 'scores')}</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-muted-foreground">
            Biblia-Quiz — {t(lang, 'learnMore')}
          </p>
        </div>
      </footer>
    </div>
  );
}