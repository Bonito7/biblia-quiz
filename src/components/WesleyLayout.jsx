import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BookOpen, Home, Music, Users, MapPin, ScrollText } from "lucide-react";
import { t, getLanguage, setLanguage, wesleyLanguages } from "../lib/wesleyI18n";

const navItems = [
  { path: "/wesley", icon: Home, labelKey: "home" },
  { path: "/wesley/john", icon: ScrollText, labelKey: "john" },
  { path: "/wesley/charles", icon: Music, labelKey: "charles" },
  { path: "/wesley/parents", icon: Users, labelKey: "parents" },
  { path: "/wesley/sermons", icon: BookOpen, labelKey: "sermonNav" },
  { path: "/wesley/travels", icon: MapPin, labelKey: "travels" }
];

export default function WesleyLayout() {
  const location = useLocation();
  const [lang, setLang] = useState(getLanguage());

  const handleLang = (code) => {
    setLanguage(code);
    setLang(code);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <Link to="/wesley" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center group-hover:scale-105 transition-transform text-lg">
              ✝️
            </div>
            <div>
              <h1 className="font-heading text-lg font-semibold leading-tight">Wesley Heritage</h1>
              <p className="text-[10px] text-muted-foreground leading-tight">{t(lang, 'tagline')}</p>
            </div>
          </Link>

          {/* Language selector */}
          <div className="flex items-center gap-1 flex-wrap justify-end">
            {wesleyLanguages.map(l => (
              <button
                key={l.code}
                onClick={() => handleLang(l.code)}
                className={`text-sm px-1.5 py-0.5 rounded transition-all ${
                  lang === l.code ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
                title={l.name}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-nav */}
        <div className="border-t border-border/30 overflow-x-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-1 py-1 min-w-max">
            {navItems.map(item => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {t(lang, item.labelKey)}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/50 py-5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            Wesley Heritage — John Wesley (1703–1791) · Charles Wesley (1707–1788)
          </p>
        </div>
      </footer>
    </div>
  );
}