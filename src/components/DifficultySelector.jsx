import { Link } from "react-router-dom";
import { difficulties } from "../lib/quizData";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";

const difficultyLabels = {
  debutant: { label: "🌱 Débutant", description: "Questions simples pour commencer" },
  intermediaire: { label: "📖 Intermédiaire", description: "Pour ceux qui connaissent bien la Bible" },
  expert: { label: "🔥 Expert", description: "Questions difficiles pour les passionnés" },
};

export default function DifficultySelector({ category, onClose }) {
  return (
    <Drawer open={!!category} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DrawerContent>
        <div className={`h-1 w-full bg-gradient-to-r ${category?.color}`} />
        <DrawerHeader className="text-left px-6 pt-4 pb-2">
          <DrawerTitle className="font-heading text-xl">{category?.name}</DrawerTitle>
          <DrawerDescription>Choisissez votre niveau de difficulté</DrawerDescription>
        </DrawerHeader>

        <div className="px-6 pb-4 space-y-3">
          {difficulties.map((diff) => {
            const d = difficultyLabels[diff.id] || { label: diff.id, description: "" };
            return (
              <DrawerClose asChild key={diff.id}>
                <Link
                  to={`/quiz/${category?.id}?difficulty=${diff.id}`}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 ${diff.bg} hover:scale-[1.01] active:scale-[0.99] transition-transform duration-150 block`}
                >
                  <span className="text-2xl">{diff.icon}</span>
                  <div className="flex-1">
                    <p className={`font-semibold ${diff.color}`}>{d.label}</p>
                    <p className="text-xs text-muted-foreground">{d.description}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">→</span>
                </Link>
              </DrawerClose>
            );
          })}
        </div>

        <div className="px-6 pb-6" style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}>
          <DrawerClose asChild>
            <button className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Annuler
            </button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}