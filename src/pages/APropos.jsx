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
import { useTranslation } from "@/lib/i18n";

const featureIcons = {
  quiz: ScrollText,
  scores: Trophy,
  maps: Map,
  names: Star,
};

export default function APropos() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const featureKeys = ["quiz", "scores", "maps", "names"];
  const designers = [
    { icon: Palette, key: "amos", name: "M. Koffi Amos Boni" },
    { icon: CodeXml, key: "jean", name: "M. Jean-Joseph Boni" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 h-11"
      >
        <ArrowLeft className="w-4 h-4" />
        {t("common.back")}
      </button>

      {/* Header */}
      <div className="text-center mb-10 pb-8 border-b border-border/60">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          {t("about.title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("about.tagline")}
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed">
        {/* Intro */}
        <p className="text-muted-foreground italic bg-secondary/20 p-4 rounded-xl border border-border/40 flex items-start gap-2.5">
          <BookOpen className="w-5 h-5 mt-0.5 text-primary shrink-0" />
          {t("about.intro")}
        </p>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 text-primary">
            <Layers className="w-5 h-5" />
            {t("about.featuresTitle")}
          </h2>
          <p className="text-muted-foreground">
            {t("about.featuresIntro")}
          </p>
          <div className="space-y-3">
            {featureKeys.map((key) => {
              const Icon = featureIcons[key];
              return (
                <div
                  key={key}
                  className="bg-secondary/20 border border-border/40 rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold">{t(`about.features.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t(`about.features.${key}.desc`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Designers */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 text-primary">
            <Palette className="w-5 h-5" />
            {t("about.designersTitle")}
          </h2>
          <p className="text-muted-foreground">
            {t("about.designersIntro")}
          </p>
          <div className="space-y-3">
            {designers.map(({ icon: Icon, key, name }) => (
              <div
                key={key}
                className="bg-secondary/20 border border-border/40 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold">{name}</h3>
                  <p className="text-xs font-semibold text-primary mb-1.5">{t(`about.designers.${key}.role`)}</p>
                  <p className="text-sm text-muted-foreground">{t(`about.designers.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <p className="text-center text-muted-foreground bg-secondary/20 p-4 rounded-xl border border-border/40">
          {t("about.closing")}
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-border/60 text-center">
        <span className="text-xs text-muted-foreground/60">
          {t("about.copyright", { year: new Date().getFullYear() })}
        </span>
      </div>
    </div>
  );
}
