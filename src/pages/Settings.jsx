import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { base44 } from "@/api/base44Client";
import { useAuth } from "@/lib/AuthContext";

export default function Settings() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));

  const toggleDark = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDarkMode(next);
  };

  const handleDeleteAccount = async () => {
    try {
      await base44.auth.deleteAccount();
    } catch {
      // fallback: just logout
      logout();
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 h-11"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </button>

      <h1 className="font-heading text-2xl font-bold mb-8">Réglages</h1>

      <div className="space-y-4">
        {/* Dark mode toggle */}
        <div className="flex items-center justify-between p-4 bg-card border border-border/50 rounded-xl">
          <div className="flex items-center gap-3">
            {darkMode ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
            <div>
              <p className="font-medium text-sm">Mode sombre</p>
              <p className="text-xs text-muted-foreground">{darkMode ? "Activé" : "Désactivé"}</p>
            </div>
          </div>
          <button
            onClick={toggleDark}
            className={`relative w-11 h-6 rounded-full transition-colors ${darkMode ? "bg-primary" : "bg-muted"}`}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${darkMode ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => logout()}
          className="flex items-center gap-3 w-full p-4 bg-card border border-border/50 rounded-xl hover:bg-muted transition-colors"
        >
          <LogOut className="w-5 h-5 text-muted-foreground" />
          <p className="font-medium text-sm">Se déconnecter</p>
        </button>

        {/* Delete account */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex items-center gap-3 w-full p-4 bg-card border border-destructive/30 rounded-xl hover:bg-destructive/5 transition-colors">
              <Trash2 className="w-5 h-5 text-destructive" />
              <p className="font-medium text-sm text-destructive">Supprimer mon compte</p>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Supprimer le compte ?</AlertDialogTitle>
              <AlertDialogDescription>
                Cette action est irréversible. Toutes vos données et scores seront définitivement supprimés.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteAccount}
                className="bg-destructive hover:bg-destructive/90"
              >
                Supprimer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}