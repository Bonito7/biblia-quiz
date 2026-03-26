import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Search } from "lucide-react";
import { LANGUAGES, getLanguage, setLanguage } from "../lib/i18n";

export default function LanguageSelector({ onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState(getLanguage());
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = LANGUAGES.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.code.toLowerCase().includes(search.toLowerCase())
  );

  const currentLang = LANGUAGES.find(l => l.code === current);

  const handleSelect = (code) => {
    setCurrent(code);
    setLanguage(code);
    setOpen(false);
    setSearch("");
    onLanguageChange?.(code);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 px-2 py-1.5 bg-muted rounded-lg">
              <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="bg-transparent text-sm outline-none w-full"
              />
            </div>
          </div>
          <div className="overflow-y-auto max-h-64">
            {filtered.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-muted transition-colors text-left ${
                  current === lang.code ? "bg-primary/10 text-primary font-medium" : ""
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {lang.dir === "rtl" && <span className="text-xs text-muted-foreground">RTL</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}