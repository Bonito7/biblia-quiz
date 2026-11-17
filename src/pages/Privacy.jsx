import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Privacy() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 h-11"
      >
        <ArrowLeft className="w-4 h-4" />
        {t("common.back")}
      </button>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <h1 className="font-heading text-2xl font-bold">{t("privacy.title")}</h1>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s1Title")}</h2>
          <p>{t("privacy.s1Body")}</p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s2Title")}</h2>
          <p>{t("privacy.s2Intro")}</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>{t("privacy.s2Item1")}</li>
            <li>{t("privacy.s2Item2")}</li>
            <li>{t("privacy.s2Item3")}</li>
            <li>{t("privacy.s2Item4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s3Title")}</h2>
          <p>{t("privacy.s3Body")}</p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s4Title")}</h2>
          <p>{t("privacy.s4Body")}</p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s5Title")}</h2>
          <p>{t("privacy.s5Body")}</p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s6Title")}</h2>
          <p>{t("privacy.s6Body")}</p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">{t("privacy.s7Title")}</h2>
          <p>{t("privacy.s7Body")}</p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border/50">
          {t("privacy.lastUpdate", { date: t("privacy.lastUpdateDate") })}
        </p>
      </div>
    </div>
  );
}
