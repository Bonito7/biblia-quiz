import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useTranslatedPage } from "@/lib/content";
import { periods as periodsFr } from "@/lib/data/bibleMaps";

export default function BibleMaps() {
  const { t, lang } = useTranslation();
  const { content } = useTranslatedPage(lang, "bibleMaps");

  const periods = content?.periods || periodsFr;

  const [activePeriod, setActivePeriod] = useState(periods[0].id);
  const [activeMap, setActiveMap] = useState(0);

  const period = periods.find(p => p.id === activePeriod);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
          <MapPin className="w-3.5 h-3.5" />
          {t("maps.badge")}
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t("maps.title")}</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t("maps.subtitle")}
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