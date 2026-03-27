import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Music, Users, ScrollText, MapPin, Sparkles } from "lucide-react";
import { t, getLanguage } from "../lib/wesleyI18n";

const sections = [
  {
    id: "john",
    title: "John Wesley",
    subtitle: "Prédicateur, théologien, fondateur",
    icon: ScrollText,
    color: "from-blue-600 to-indigo-700",
    path: "/john",
    years: "1703–1791",
    fact: "40 000 sermons prêchés, 400 000 km parcourus"
  },
  {
    id: "charles",
    title: "Charles Wesley",
    subtitle: "Poète, hymnographe, évangéliste",
    icon: Music,
    color: "from-purple-600 to-violet-700",
    path: "/charles",
    years: "1707–1788",
    fact: "6 500 cantiques composés"
  },
  {
    id: "parents",
    title: "Samuel & Susanna",
    subtitle: "Les parents extraordinaires",
    icon: Users,
    color: "from-emerald-600 to-teal-700",
    path: "/parents",
    years: "1662–1742",
    fact: "19 enfants, une éducation révolutionnaire"
  },
  {
    id: "hymns",
    title: "Cantiques",
    subtitle: "L'héritage musical de Charles",
    icon: Music,
    color: "from-rose-600 to-pink-700",
    path: "/hymns",
    years: "1739–1788",
    fact: "Parmi les plus grands chants de l'Église"
  },
  {
    id: "sermons",
    title: "Sermons",
    subtitle: "Les 44 sermons standards",
    icon: BookOpen,
    color: "from-amber-600 to-orange-700",
    path: "/sermons",
    years: "1746–1788",
    fact: "La base théologique du Méthodisme"
  },
  {
    id: "travels",
    title: "Voyages",
    subtitle: "La carte des 400 000 km",
    icon: MapPin,
    color: "from-cyan-600 to-sky-700",
    path: "/travels",
    years: "1738–1790",
    fact: "Principalement à cheval à travers la Grande-Bretagne"
  }
];

export default function WesleyHome() {
  const [lang, setLang] = useState(getLanguage());

  useEffect(() => {
    const interval = setInterval(() => {
      const l = getLanguage();
      if (l !== lang) setLang(l);
    }, 200);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          {t(lang, 'tagline')}
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Wesley <span className="text-primary">Heritage</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          {t(lang, 'subtitle')}
        </p>
        <blockquote className="italic text-sm text-muted-foreground border-l-4 border-primary/40 pl-4 max-w-md mx-auto text-left mt-6">
          "{t(lang, 'quote')}"
          <footer className="text-xs mt-1 not-italic font-medium">— John Wesley</footer>
        </blockquote>
      </motion.div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={s.path} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/30">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color}`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">{s.years}</div>
                  <h3 className="font-heading text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.subtitle}</p>
                  <p className="text-xs text-primary/80 font-medium italic">{s.fact}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
      >
        {[
          { value: "40 000", label: t(lang, 'sermons') },
          { value: "6 500", label: t(lang, 'hymns') },
          { value: "400 000", label: t(lang, 'km') },
          { value: "80M+", label: t(lang, 'methodists') }
        ].map((stat) => (
          <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}