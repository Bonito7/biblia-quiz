import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Music, Users, ScrollText, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const sections = [
  {
    id: "john",
    icon: ScrollText,
    color: "from-blue-600 to-indigo-700",
    path: "/wesley/john",
    years: "1703–1791",
  },
  {
    id: "charles",
    icon: Music,
    color: "from-purple-600 to-violet-700",
    path: "/wesley/charles",
    years: "1707–1788",
  },
  {
    id: "parents",
    icon: Users,
    color: "from-emerald-600 to-teal-700",
    path: "/wesley/parents",
    years: "1662–1742",
  },
  {
    id: "hymns",
    icon: Music,
    color: "from-rose-600 to-pink-700",
    path: "/wesley/charles",
    years: "1739–1788",
  },
  {
    id: "sermons",
    icon: BookOpen,
    color: "from-amber-600 to-orange-700",
    path: "/wesley/sermons",
    years: "1746–1788",
  },
  {
    id: "travels",
    icon: MapPin,
    color: "from-cyan-600 to-sky-700",
    path: "/wesley/travels",
    years: "1738–1790",
  },
];

export default function WesleyHome() {
  const { t } = useTranslation();

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
          {t("wesley.tagline")}
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Wesley <span className="text-primary">Heritage</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
          {t("wesley.subtitle")}
        </p>
        <blockquote className="italic text-sm text-muted-foreground border-l-4 border-primary/40 pl-4 max-w-md mx-auto text-left mt-6">
          "{t("wesley.quote")}"
          <footer className="text-xs mt-1 not-italic font-medium">{t("wesley.quoteAuthor")}</footer>
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
                  <h3 className="font-heading text-lg font-bold mb-1">{t(`wesley.home.${s.id}.title`)}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t(`wesley.home.${s.id}.subtitle`)}</p>
                  <p className="text-xs text-primary/80 font-medium italic">{t(`wesley.home.${s.id}.fact`)}</p>
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
          { value: "40 000", label: t("wesley.statSermons") },
          { value: "6 500", label: t("wesley.statHymns") },
          { value: "400 000", label: t("wesley.statKm") },
          { value: "80M+", label: t("wesley.statMethodists") }
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
