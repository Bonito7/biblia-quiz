import { Outlet, Link, useLocation } from "react-router-dom";
import { BookOpen, Home, Music, Users, MapPin, ScrollText } from "lucide-react";

const navItems = [
  { path: "/wesley", icon: Home, label: "Accueil" },
  { path: "/wesley/john", icon: ScrollText, label: "Jean" },
  { path: "/wesley/charles", icon: Music, label: "Charles" },
  { path: "/wesley/parents", icon: Users, label: "Parents" },
  { path: "/wesley/sermons", icon: BookOpen, label: "Sermons" },
  { path: "/wesley/travels", icon: MapPin, label: "Voyages" },
];

export default function WesleyLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-lg flex-shrink-0">
            ✝️
          </div>
          <div>
            <h1 className="font-heading text-lg font-semibold leading-tight">Wesley Heritage</h1>
            <p className="text-[10px] text-muted-foreground leading-tight">Héritage Wesley</p>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors min-w-[44px] ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${active ? "scale-110" : ""}`} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}