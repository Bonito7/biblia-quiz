import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  ScrollText,
  Trophy,
  Map,
  Star,
  Layers,
  Palette,
  CodeXml,
} from "lucide-react";

const features = [
  {
    icon: ScrollText,
    title: "Quiz bibliques variés",
    desc: "7 catégories et plus de 1 300 questions couvrant l'Ancien et le Nouveau Testament : personnages bibliques, versets et citations, prophéties, géographie et chronologie.",
  },
  {
    icon: Trophy,
    title: "Scores & Progression",
    desc: "Trois niveaux de difficulté (débutant, intermédiaire, expert) et un suivi de vos résultats pour mesurer vos progrès à chaque partie.",
  },
  {
    icon: Map,
    title: "Cartes bibliques",
    desc: "Un espace de découverte des lieux saints et des terres de la Bible pour mieux visualiser les récits bibliques.",
  },
  {
    icon: Star,
    title: "Noms de Dieu & Vie sociale juive",
    desc: "Des sections dédiées pour approfondir les noms de Dieu et les traditions de la vie sociale juive, au plus près du texte biblique.",
  },
];

const designers = [
  {
    icon: Palette,
    name: "M. Koffi Amos Boni",
    role: "Concepteur & Designer",
    desc: "Il imagine et façonne l'identité visuelle ainsi que l'expérience utilisateur, veillant à ce que chaque interface offre un cadre épuré, intuitif et propice à l'apprentissage.",
  },
  {
    icon: CodeXml,
    name: "M. Jean-Joseph Boni",
    role: "Développeur & Designer",
    desc: "Il insuffle la vie à cette vision en concevant l'architecture technique et en développant les fonctionnalités de l'application, garantissant une navigation fluide, stable et sécurisée.",
  },
];

export default function APropos() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 h-11"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </button>

      {/* Header */}
      <div className="text-center mb-10 pb-8 border-b border-border/60">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          À propos de l'application
        </h1>
        <p className="text-sm text-muted-foreground">
          La sagesse de la Bible, à portée de question
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <p className="text-muted-foreground italic bg-secondary/20 p-4 rounded-xl border border-border/40 flex items-start gap-2.5">
          <BookOpen className="w-5 h-5 mt-0.5 text-primary shrink-0" />
          Bienvenue dans Biblia-Quiz, une application dédiée à la Parole de Dieu. Elle vous invite à
          explorer la Bible à travers des quiz interactifs sur l'Ancien et le Nouveau Testament, à vous
          exercer sur les personnages, les versets et les lieux bibliques, et à progresser dans la
          connaissance des Écritures à votre rythme.
        </p>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 text-primary">
            <Layers className="w-5 h-5" />
            Ce que vous trouverez dans l'application
          </h2>
          <p className="text-muted-foreground">
            Un contenu riche et structuré pour approfondir votre connaissance de la Bible&nbsp;:
          </p>
          <div className="space-y-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-secondary/20 border border-border/40 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Designers */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 text-primary">
            <Palette className="w-5 h-5" />
            Les Concepteurs
          </h2>
          <p className="text-muted-foreground">
            Derrière cette application se trouve une vision guidée par la foi et l'excellence,
            portée par une équipe passionnée&nbsp;:
          </p>
          <div className="space-y-3">
            {designers.map(({ icon: Icon, name, role, desc }) => (
              <div
                key={name}
                className="bg-secondary/20 border border-border/40 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold">{name}</h3>
                  <p className="text-xs font-semibold text-primary mb-1.5">{role}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-muted-foreground bg-secondary/20 p-4 rounded-xl border border-border/40">
          Nous espérons que Biblia-Quiz vous accompagne dans la découverte et l'approfondissement de la
          Parole de Dieu, seul ou en famille.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-border/60 text-center">
        <span className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Biblia-Quiz. Tous droits réservés.
        </span>
      </div>
    </div>
  );
}