import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Globe, Flame, Cross } from "lucide-react";

const sections = [
  {
    id: "youth",
    label: "Jeunesse & Formation",
    icon: "🎓",
    content: [
      {
        title: "Naissance et enfance (1703–1714)",
        text: "John Wesley naît le 28 juin 1703 à Epworth, Lincolnshire, 15e des 19 enfants de Samuel et Susanna Wesley. À 5 ans, il est miraculeusement sauvé de l'incendie du presbytère (1709). Sa mère le voit comme 'un tison arraché du feu' — image qui marquera toute sa vie. Il sera éduqué principalement par sa mère jusqu'à 11 ans.",
        verse: "« Un tison arraché du feu » — Zacharie 3:2, devise personnelle de John Wesley"
      },
      {
        title: "Oxford — The Holy Club (1720–1735)",
        text: "John entre au Christ Church College d'Oxford en 1720. En 1729, avec son frère Charles et George Whitefield, il fonde le 'Holy Club' — surnommé 'Méthodistes' par moquerie à cause de leur méthode rigoureuse de piété : prière quotidienne aux heures fixes, jeûne les mercredis et vendredis, visites en prison, étude biblique systématique. Le terme 'Méthodiste' restera.",
        verse: "Ordre du jour du Holy Club : lever à 4h, prière 5h-6h, étude jusqu'à 21h, examen de conscience avant le coucher"
      },
      {
        title: "Mission en Géorgie (1735–1738)",
        text: "Ordonné prêtre anglican en 1728, John part comme missionnaire en Géorgie (Amérique) de 1735 à 1738. Ce voyage est un échec pastoral mais une révélation spirituelle : sur le bateau, des Moraves chantent et prient sans crainte dans la tempête. John est bouleversé par leur foi sereine face à la mort. Il rentrera en Angleterre déprimé mais transformé.",
        verse: "John Wesley dans son journal : 'Je suis allé en Amérique pour convertir les Indiens, mais qui me convertira, moi ?'"
      }
    ]
  },
  {
    id: "conversion",
    label: "Conversion & Réveil",
    icon: "🔥",
    content: [
      {
        title: "Aldersgate — 24 mai 1738",
        text: "Le 24 mai 1738 est la date fondatrice du Méthodisme. John assiste à une réunion moravienne à Aldersgate Street, Londres. Pendant la lecture du commentaire de Luther sur Romains, il écrit : 'Je sentis mon cœur s'échauffer étrangement. Je sentis que je faisais confiance au seul Christ pour le salut, et j'eus l'assurance que Christ avait ôté mes péchés, même les miens, et m'avait sauvé de la loi du péché et de la mort.'",
        verse: "Cette expérience — l'assurance du salut — deviendra centrale dans la théologie wesleyenne"
      },
      {
        title: "La prédication en plein air (1739)",
        text: "En février 1739, George Whitefield invite John à venir prêcher en plein air à Bristol. John, anglican convaincu, hésite — il estime que prêcher hors d'une église est irrégulier. Puis il cède et rassemble des milliers d'ouvriers des mines de Kingswood. Il écrira : 'Je renonce à toute dignité d'être uniquement intérieur. Le monde est ma paroisse.' Le réveil commence.",
        verse: "« Le monde est ma paroisse » — devise qui guidera 50 ans de ministère en plein air"
      },
      {
        title: "Organisation des Sociétés (1739–1744)",
        text: "Wesley organise les croyants en 'sociétés' subdivisées en 'classes' de 12 membres avec un responsable. Ce système de suivi pastoral intensif est révolutionnaire : chaque semaine, chaque membre rend compte de son état spirituel. Wesley publie aussi ses premiers sermons standards et les 'General Rules' (Règles générales) qui deviendront la base du Méthodisme.",
        verse: "Les 3 Règles générales : (1) Ne fais aucun mal, (2) Fais tout le bien possible, (3) Utilise tous les moyens de grâce"
      }
    ]
  },
  {
    id: "theology",
    label: "Théologie",
    icon: "📖",
    content: [
      {
        title: "La Grâce Prévenante",
        text: "Wesley enseigne que Dieu accorde à tous les êtres humains une 'grâce prévenante' (prevenient grace) — une grâce qui précède la foi et restaure en partie le libre-arbitre perdu dans la Chute. Cette grâce explique pourquoi l'invitation universelle de l'Évangile est sincère : Dieu rend possible la réponse de foi pour tous, sans exception. C'est sa réponse au calvinisme.",
        verse: "Tite 2:11 : 'La grâce de Dieu, source de salut pour tous les hommes, a été manifestée.'"
      },
      {
        title: "La Sanctification et la Perfection Chrétienne",
        text: "Le concept distinctif de Wesley : la 'perfection chrétienne' ou 'sainteté entière'. Il ne s'agit pas d'une impeccabilité absolue mais d'un état où l'amour pour Dieu et le prochain est la motivation dominante — une purification intérieure profonde. Wesley la distingue de la justification (pardon) : c'est l'œuvre du Saint-Esprit qui transforme le cœur. Il publie 'A Plain Account of Christian Perfection' (1766).",
        verse: "1 Thessaloniciens 5:23 : 'Que le Dieu de paix vous sanctifie lui-même tout entiers.'"
      },
      {
        title: "Quadrilatère Wesléyen",
        text: "La méthode théologique de Wesley repose sur 4 sources : (1) L'Écriture — autorité première et suprême ; (2) La Tradition — l'héritage de l'Église ancienne ; (3) La Raison — don de Dieu pour comprendre la Révélation ; (4) L'Expérience — la confirmation intérieure des vérités bibliques. Ce quadrilatère reste la méthode théologique officielle de l'Église Méthodiste Unie.",
        verse: "Wesley : 'L'Écriture seule contient toute la vérité nécessaire au salut.'"
      }
    ]
  },
  {
    id: "social",
    label: "Action Sociale",
    icon: "🤝",
    content: [
      {
        title: "Les Pauvres et les Opprimés",
        text: "Wesley était profondément engagé envers les pauvres. Il fondait des dispensaires médicaux gratuits pour les indigents, des prêts sans intérêt pour les artisans en difficulté, des écoles pour les enfants de mineurs. Il publia 'Primitive Physick' (1747), un guide médical bon marché pour les pauvres. Pour Wesley, la sainteté sociale est inséparable de la sainteté personnelle.",
        verse: "« La religion qui ne commence pas par le cœur n'est pas réelle, mais celle qui s'arrête là n'est pas assez grande. » — Wesley"
      },
      {
        title: "Opposition à l'Esclavage",
        text: "L'un des combats les plus courageux de Wesley fut son opposition à l'esclavage. En 1774, il publie 'Thoughts Upon Slavery', l'un des pamphlets anti-esclavagistes les plus puissants de son époque. Il y dénonce l'esclavage comme 'la somme de toutes les vilénies'. Sa dernière lettre (24 février 1791), écrite à William Wilberforce, l'exhorte à poursuivre sa lutte abolitioniste. Wesley mourut 6 jours après.",
        verse: "Dernière lettre à Wilberforce (1791) : 'Continue au nom de Dieu et de sa puissance... Dieu te fera triompher.'"
      },
      {
        title: "Éducation et Publications",
        text: "Wesley fonda Kingswood School (1748) pour les enfants des mineurs et l'orphelinat d'Orphan House à Newcastle. Il édita une bibliothèque de 50 volumes 'A Christian Library' à prix réduit pour les classes laborieuses. Il publia un dictionnaire, un manuel de médecine, des traités d'histoire naturelle. Au total : 400 publications originales. Il voulait des chrétiens instruits, pas seulement pieux.",
        verse: "Wesley : 'Répandez les livres, répandez les connaissances de toutes sortes, répandez-les aussi largement que possible.'"
      }
    ]
  }
];

export default function JohnWesley() {
  const [activeSection, setActiveSection] = useState("youth");

  const section = sections.find(s => s.id === activeSection);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 text-5xl">
          ✝️
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold mb-2">John Wesley</h1>
          <p className="text-muted-foreground text-sm mb-3">28 juin 1703 — 2 mars 1791 · Epworth → Londres</p>
          <p className="text-sm leading-relaxed text-foreground/80">
            Prêtre anglican, théologien, réformateur social et co-fondateur du Méthodisme. 
            Considéré comme l'une des figures les plus influentes du christianisme du 18e siècle, 
            son réveil évangélique a transformé l'Angleterre et préparé le terrain des grandes missions mondiales.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeSection === s.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <span>{s.icon}</span> {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {section.content.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border/60 rounded-2xl p-5"
          >
            <h3 className="font-heading text-lg font-bold mb-2 text-blue-700 dark:text-blue-400">{item.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/80 mb-3">{item.text}</p>
            <blockquote className="border-l-3 border-blue-400 pl-3 text-xs italic text-muted-foreground bg-blue-50 dark:bg-blue-950/30 rounded-r-lg p-3">
              {item.verse}
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}