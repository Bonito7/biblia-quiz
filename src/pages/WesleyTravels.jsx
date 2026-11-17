import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { wesleyTravels as wesleyTravelsFr } from "@/lib/data/wesleyTravels";

export default function WesleyTravels() {
  const { lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "wesleyTravels");
  const data = content?.wesleyTravels || wesleyTravelsFr;

  const [activeRegion, setActiveRegion] = useState(0);

  const regions = data.regions;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🗺️</div>
        <h1 className="font-heading text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {data.statistics.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border/60 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs font-medium text-muted-foreground">{stat.unit}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((region, i) => (
          <button
            key={i}
            onClick={() => setActiveRegion(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeRegion === i
                ? `bg-gradient-to-r ${region.color} text-white shadow`
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {region.emoji} {region.region}
          </button>
        ))}
      </div>

      <motion.div
        key={activeRegion}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={`bg-gradient-to-r ${regions[activeRegion].color} text-white rounded-2xl p-4 mb-4`}>
          <p className="text-sm font-medium">{regions[activeRegion].visits}</p>
        </div>

        <div className="space-y-3">
          {regions[activeRegion].places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border/60 rounded-xl p-4 flex gap-3"
            >
              <div className="flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">{place.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{place.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Journal Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-card border border-border/60 rounded-2xl p-5"
      >
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{data.journal.label}</p>
        <blockquote className="italic text-sm leading-relaxed text-foreground/80">
          {data.journal.quote}
        </blockquote>
        <p className="text-xs text-muted-foreground mt-2">{data.journal.attribution}</p>
      </motion.div>
    </div>
  );
}
