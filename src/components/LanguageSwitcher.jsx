import { Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Sélecteur de langue. Utilisable dans n'importe quel écran.
 * `variant` = "icon" (compact, dans un header) ou "full" (liste avec libellé).
 */
export default function LanguageSwitcher({ variant = "icon", className = "" }) {
  const { lang, setLang, languages } = useTranslation();
  const current = languages.find((l) => l.code === lang);

  if (variant === "full") {
    return (
      <div className={`grid grid-cols-2 gap-2 ${className}`}>
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-colors ${
              l.code === lang
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <span aria-hidden="true">{l.flag}</span>
            <span>{l.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Langue"
        className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${className}`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-semibold uppercase tracking-wide">{current?.code}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem]">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`gap-2 ${l.code === lang ? "font-semibold text-primary" : ""}`}
          >
            <span aria-hidden="true">{l.flag}</span>
            <span>{l.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
