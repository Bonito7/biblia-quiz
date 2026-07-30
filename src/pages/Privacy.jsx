import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 h-11"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </button>

      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <h1 className="font-heading text-2xl font-bold">Règles de confidentialité</h1>
      </div>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">1. Collecte des informations</h2>
          <p>
            Nous collectons uniquement les informations nécessaires au fonctionnement de l'application&nbsp;:
            votre numéro de téléphone (pour l'authentification), votre nom d'utilisateur, et vos
            résultats de quiz (scores, progression). Aucune donnée sensible n'est collectée sans votre
            consentement explicite.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">2. Utilisation des données</h2>
          <p>
            Vos informations sont utilisées pour&nbsp;:
          </p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Vous identifier et sécuriser votre compte</li>
            <li>Sauvegarder votre progression et vos scores</li>
            <li>Améliorer l'expérience utilisateur</li>
            <li>Vous permettre de participer au classement</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">3. Partage des données</h2>
          <p>
            Nous ne partageons aucune de vos données personnelles avec des tiers. Vos informations
            restent strictement confidentielles et ne sont utilisées que dans le cadre de
            l'application Biblia-Quiz.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">4. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour
            protéger vos données contre tout accès non autorisé, alteration, divulgation ou
            destruction.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">5. Conservation des données</h2>
          <p>
            Vos données sont conservées tant que votre compte est actif. Vous pouvez demander la
            suppression de votre compte et de toutes vos données à tout moment depuis la page
            Réglages.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">6. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de
            rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous
            à l'adresse indiquée ci-dessous.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-base font-semibold text-foreground mb-2">7. Contact</h2>
          <p>
            Pour toute question concernant ces règles de confidentialité, vous pouvez nous
            contacter via la page Réglages de l'application.
          </p>
        </section>

        <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border/50">
          Dernière mise à jour&nbsp;: juillet 2026
        </p>
      </div>
    </div>
  );
}
