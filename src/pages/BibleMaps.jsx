import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

const periods = [
  {
    id: "creation",
    label: "Création & Déluge",
    emoji: "🌍",
    years: "Avant 2000 av. J.-C.",
    color: "from-emerald-500 to-teal-600",
    description: "Le monde antique des origines bibliques : Éden, le déluge de Noé et la dispersion des nations après Babel.",
    maps: [
      {
        title: "Le Jardin d'Éden — Localisation traditionnelle",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        caption: "La tradition situe l'Éden en Mésopotamie, au confluent du Tigre et de l'Euphrate (Genèse 2:10-14).",
        details: "Les 4 fleuves de l'Éden : Pishon, Guihon, Hiddekel (Tigre) et Phrat (Euphrate)"
      },
      {
        title: "L'Arche de Noé — Mont Ararat",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "L'Arche s'est posée sur les monts Ararat, dans l'actuelle Turquie orientale (Genèse 8:4).",
        details: "Le Mont Ararat culmine à 5 165 m, à la frontière turco-arménienne"
      },
      {
        title: "La Tour de Babel — Plaine de Shinéar",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c5f28ce3?w=800&q=80",
        caption: "Babel (Babylone) est située dans la plaine de Shinéar, en Mésopotamie (Genèse 11:2).",
        details: "Les archéologues ont découvert des ziggourats géantes à Babylone et Ur"
      }
    ]
  },
  {
    id: "patriarches",
    label: "Patriarches",
    emoji: "🏕️",
    years: "2000–1700 av. J.-C.",
    color: "from-amber-500 to-orange-600",
    description: "Les voyages d'Abraham, Isaac et Jacob à travers Canaan, l'Égypte et la Mésopotamie.",
    maps: [
      {
        title: "Le voyage d'Abraham — D'Ur à Canaan",
        image: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?w=800&q=80",
        caption: "Abraham part d'Ur des Chaldéens, passe par Harran, descend à Canaan et jusqu'en Égypte (Genèse 11-12).",
        details: "Un trajet de plus de 2 000 km depuis la Mésopotamie jusqu'à Canaan"
      },
      {
        title: "Canaan au temps des Patriarches",
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        caption: "Les lieux saints des Patriarches : Sichem, Béthel, Hébron, Beer-Shéva — la Route des Patriarches.",
        details: "Abraham, Isaac et Jacob ont construit des autels sur toute la longueur de Canaan"
      },
      {
        title: "L'Égypte au temps de Joseph",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c5f28ce3?w=800&q=80",
        caption: "Joseph vendu en Égypte devient gouverneur. Le pays de Goshen accueille la famille de Jacob (Genèse 37-50).",
        details: "Le delta du Nil et la région de Goshen étaient habitées par les Hébreux"
      }
    ]
  },
  {
    id: "exode",
    label: "Exode & Désert",
    emoji: "🌵",
    years: "1300–1200 av. J.-C.",
    color: "from-yellow-500 to-amber-600",
    description: "La sortie d'Égypte, les 40 ans dans le désert du Sinaï et l'arrivée aux portes de Canaan.",
    maps: [
      {
        title: "La Route de l'Exode — D'Égypte au Sinaï",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        caption: "Les Israélites traversent la Mer Rouge et s'engagent dans le désert vers le Mont Sinaï (Exode 14-19).",
        details: "Plusieurs routes de l'Exode sont proposées : voie du nord, voie centrale ou méridionale"
      },
      {
        title: "Le Mont Sinaï — Lieu de la Révélation",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        caption: "Le Sinaï (Jebel Musa ou Horeb) est le lieu où Moïse reçoit les Dix Commandements (Exode 19-20).",
        details: "La péninsule du Sinaï est le théâtre des 40 années d'errance du peuple hébreu"
      },
      {
        title: "Les 40 Ans dans le Désert — Étapes",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        caption: "De Qadesh-Barnéa aux plaines de Moab, les étapes du peuple : Élim, Mara, Rephidim, Qadesh...",
        details: "Nombres 33 liste 40 étapes de la sortie d'Égypte jusqu'à l'entrée en Canaan"
      }
    ]
  },
  {
    id: "conquete",
    label: "Conquête & Juges",
    emoji: "⚔️",
    years: "1200–1050 av. J.-C.",
    color: "from-red-500 to-rose-600",
    description: "La traversée du Jourdain sous Josué, la répartition des tribus et la période des Juges.",
    maps: [
      {
        title: "La Conquête de Canaan sous Josué",
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80",
        caption: "Josué mène 3 campagnes : centrale (Jéricho, Aï), méridionale et septentrionale pour conquérir Canaan (Josué 1-12).",
        details: "La chute de Jéricho ouvre la campagne centrale de conquête de Canaan"
      },
      {
        title: "Répartition des 12 Tribus d'Israël",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        caption: "Chacune des 12 tribus reçoit son territoire. Lévi ne reçoit pas de territoire mais des villes refuges (Josué 13-21).",
        details: "Les tribus de Ruben, Gad et demi-tribu de Manassé s'installent à l'est du Jourdain"
      },
      {
        title: "La Période des Juges — Menaces extérieures",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Les ennemis d'Israël sous les Juges : Philistins (côte ouest), Moabites (est), Madianites (sud), Cananéens (nord).",
        details: "Le cycle des Juges : désobéissance → oppression → repentance → délivrance → paix"
      }
    ]
  },
  {
    id: "royaume",
    label: "Royaume Uni & Divisé",
    emoji: "👑",
    years: "1050–722 av. J.-C.",
    color: "from-blue-500 to-indigo-600",
    description: "Le règne de Saül, David et Salomon, puis la division en royaumes d'Israël et de Juda.",
    maps: [
      {
        title: "Le Royaume Uni sous David et Salomon",
        image: "https://images.unsplash.com/photo-1560713781-d8f7a1ece0f3?w=800&q=80",
        caption: "David conquiert Jérusalem et étend le royaume de l'Égypte à l'Euphrate. Salomon bâtit le Temple (1 Rois 4-8).",
        details: "Jérusalem, conquise sur les Jébusiens, devient la capitale politique et religieuse"
      },
      {
        title: "Jérusalem — La Ville de David",
        image: "https://images.unsplash.com/photo-1548710428-8f6b8e617ec0?w=800&q=80",
        caption: "David établit sa capitale à Jérusalem (Sion) et y amène l'Arche de l'Alliance (2 Samuel 5-6).",
        details: "Le Mont Moriah accueille le Temple de Salomon, bâti en 7 ans (966-959 av. J.-C.)"
      },
      {
        title: "Division du Royaume — Israël et Juda",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        caption: "Après Salomon : le Nord (Israël, 10 tribus, capitale Samarie) et le Sud (Juda, 2 tribus, capitale Jérusalem) (1 Rois 12).",
        details: "Le royaume du Nord durera 200 ans (931-722 av. J.-C.), le royaume de Juda 340 ans (931-586 av. J.-C.)"
      }
    ]
  },
  {
    id: "exil",
    label: "Exil & Retour",
    emoji: "🏛️",
    years: "722–400 av. J.-C.",
    color: "from-purple-500 to-violet-600",
    description: "La chute de Samarie (722), la destruction de Jérusalem (586), l'exil à Babylone et le retour sous Cyrus.",
    maps: [
      {
        title: "La Déportation Assyrienne — 722 av. J.-C.",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c5f28ce3?w=800&q=80",
        caption: "Sargon II d'Assyrie déporte les 10 tribus du Nord vers la Mésopotamie (2 Rois 17). Les Samaritains s'y mêleront.",
        details: "Des populations étrangères sont installées à Samarie, créant le peuple mixte des Samaritains"
      },
      {
        title: "L'Empire Babylonien et l'Exil de Juda",
        image: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?w=800&q=80",
        caption: "Nabuchodonosor détruit Jérusalem (586) et déporte l'élite de Juda à Babylone. Daniel et Ézéchiel y prophétisent.",
        details: "3 déportations successives : 605, 597 et 586 av. J.-C. Jérémie reste en Judée"
      },
      {
        title: "Le Retour de l'Exil — Décret de Cyrus",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "En 538 av. J.-C., Cyrus le Grand autorise les Juifs à rentrer et à reconstruire le Temple (Esdras 1).",
        details: "Zorobabel mène le 1er retour (538), Esdras le 2ème (458), Néhémie le 3ème (445 av. J.-C.)"
      }
    ]
  },
  {
    id: "nt",
    label: "Temps du Nouveau Testament",
    emoji: "✝️",
    years: "4 av. J.-C. — 100 ap. J.-C.",
    color: "from-cyan-500 to-sky-600",
    description: "La Palestine au temps de Jésus, les voyages missionnaires de Paul et la diffusion de l'Évangile.",
    maps: [
      {
        title: "La Palestine au temps de Jésus",
        image: "https://images.unsplash.com/photo-1548710428-8f6b8e617ec0?w=800&q=80",
        caption: "La Palestine est divisée en Galilée, Samarie et Judée. Jésus naît à Bethléem, grandit à Nazareth, prêche en Galilée.",
        details: "Le lac de Tibériade (Mer de Galilée) est le cœur du ministère galiléen de Jésus"
      },
      {
        title: "Les Voyages Missionnaires de Paul",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        caption: "Paul accomplit 3 voyages missionnaires depuis Antioche, évangélisant la Turquie, la Grèce et rejoignant Rome.",
        details: "1er voyage (Actes 13-14) : Chypre et Asie Mineure. 2ème : Macédoine et Grèce. 3ème : Éphèse"
      },
      {
        title: "L'Empire Romain et la Diffusion de l'Évangile",
        image: "https://images.unsplash.com/photo-1560713781-d8f7a1ece0f3?w=800&q=80",
        caption: "La Pax Romana, les routes romaines et la langue grecque commune facilitent la diffusion de l'Évangile.",
        details: "En moins de 300 ans, le christianisme s'étend de Jérusalem jusqu'aux extrémités de l'Empire"
      }
    ]
  }
];

export default function BibleMaps() {
  const [activePeriod, setActivePeriod] = useState(periods[0].id);
  const [activeMap, setActiveMap] = useState(0);

  const period = periods.find(p => p.id === activePeriod);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          <MapPin className="w-3.5 h-3.5" />
          Atlas Biblique Illustré
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">Géographie Biblique</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explorez les lieux saints à travers les grandes périodes de l'histoire biblique
        </p>
      </div>

      {/* Period Tabs — scrollable horizontally */}
      <div className="overflow-x-auto pb-2 mb-6">
        <div className="flex gap-2 min-w-max">
          {periods.map((p) => (
            <button
              key={p.id}
              onClick={() => { setActivePeriod(p.id); setActiveMap(0); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                activePeriod === p.id
                  ? `bg-gradient-to-r ${p.color} text-white shadow-md scale-105`
                  : "bg-card border border-border hover:bg-muted text-muted-foreground"
              }`}
            >
              <span>{p.emoji}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activePeriod}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Period Info */}
          <div className={`rounded-2xl bg-gradient-to-r ${period.color} p-5 text-white mb-6`}>
            <div className="flex items-start gap-4">
              <span className="text-4xl">{period.emoji}</span>
              <div>
                <div className="text-white/70 text-xs font-medium mb-1">{period.years}</div>
                <h2 className="font-heading text-xl font-bold mb-1">{period.label}</h2>
                <p className="text-white/90 text-sm leading-relaxed">{period.description}</p>
              </div>
            </div>
          </div>

          {/* Map Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {period.maps.map((map, i) => (
              <button
                key={i}
                onClick={() => setActiveMap(i)}
                className={`text-left p-4 rounded-xl border-2 transition-all ${
                  activeMap === i
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {activeMap === i && <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />}
                  <p className="text-xs font-semibold line-clamp-2 leading-tight">{map.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Map Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMap}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={period.maps[activeMap].image}
                  alt={period.maps[activeMap].title}
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-heading text-lg font-bold mb-1">{period.maps[activeMap].title}</h3>
                  <p className="text-white/90 text-sm">{period.maps[activeMap].caption}</p>
                </div>
              </div>
              <div className="p-5 bg-muted/30">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{period.maps[activeMap].details}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}