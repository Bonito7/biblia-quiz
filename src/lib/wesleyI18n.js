const translations = {
  en: {
    tagline: "Methodist Heritage · 18th Century",
    subtitle: "Discover the life, work and hymns of John & Charles Wesley — founders of the Methodist Revival",
    quote: "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
    sermons: "Sermons preached",
    hymns: "Hymns composed",
    km: "km travelled",
    methodists: "Methodists worldwide",
    home: "Home",
    john: "John Wesley",
    charles: "Charles Wesley",
    parents: "Parents",
    hymnsNav: "Hymns",
    sermonNav: "Sermons",
    travels: "Travels"
  },
  fr: {
    tagline: "Héritage Méthodiste · 18e siècle",
    subtitle: "Découvrez la vie, l'œuvre et les cantiques de John & Charles Wesley — fondateurs du Réveil méthodiste",
    quote: "Faites tout le bien que vous pouvez, par tous les moyens que vous pouvez, de toutes les façons que vous pouvez, en tous les lieux que vous pouvez, à toutes les heures que vous pouvez, à toutes les personnes que vous pouvez, aussi longtemps que vous le pouvez.",
    sermons: "Sermons prêchés",
    hymns: "Cantiques composés",
    km: "km parcourus",
    methodists: "Méthodistes dans le monde",
    home: "Accueil",
    john: "John Wesley",
    charles: "Charles Wesley",
    parents: "Parents",
    hymnsNav: "Cantiques",
    sermonNav: "Sermons",
    travels: "Voyages"
  },
  es: {
    tagline: "Herencia Metodista · Siglo XVIII",
    subtitle: "Descubra la vida, obra e himnos de John y Charles Wesley — fundadores del Avivamiento metodista",
    quote: "Haz todo el bien que puedas, por todos los medios que puedas, de todas las maneras que puedas, en todos los lugares que puedas, en todo momento que puedas, a todas las personas que puedas, durante todo el tiempo que puedas.",
    sermons: "Sermones predicados",
    hymns: "Himnos compuestos",
    km: "km recorridos",
    methodists: "Metodistas en el mundo",
    home: "Inicio",
    hymnsNav: "Himnos",
    sermonNav: "Sermones",
    travels: "Viajes"
  },
  pt: {
    tagline: "Herança Metodista · Século XVIII",
    subtitle: "Descubra a vida, obra e hinos de João e Carlos Wesley — fundadores do Avivamento metodista",
    quote: "Faça todo o bem que você puder, por todos os meios que puder, de todas as maneiras que puder, em todos os lugares que puder, em todos os momentos que puder, a todas as pessoas que puder, durante todo o tempo que puder.",
    sermons: "Sermões pregados",
    hymns: "Hinos compostos",
    km: "km percorridos",
    methodists: "Metodistas no mundo",
    home: "Início",
    hymnsNav: "Hinos",
    sermonNav: "Sermões",
    travels: "Viagens"
  },
  de: {
    tagline: "Methodistisches Erbe · 18. Jahrhundert",
    subtitle: "Entdecken Sie das Leben, Werk und Lieder von John & Charles Wesley — Gründer der methodistischen Erweckung",
    quote: "Tue alles Gute, das du kannst, mit allen Mitteln, die du kannst, auf alle Weisen, die du kannst, an allen Orten, die du kannst, zu allen Zeiten, die du kannst, für alle Menschen, die du kannst, so lange du immer kannst.",
    sermons: "Gepredigte Predigten",
    hymns: "Komponierte Lieder",
    km: "Zurückgelegte km",
    methodists: "Methodisten weltweit",
    home: "Startseite",
    hymnsNav: "Lieder",
    sermonNav: "Predigten",
    travels: "Reisen"
  },
  sw: {
    tagline: "Urithi wa Kimethodisti · Karne ya 18",
    subtitle: "Gundua maisha, kazi na nyimbo za John na Charles Wesley — waanzilishi wa Uamsho wa Kimethodisti",
    quote: "Fanya mema yote unayoweza, kwa njia zote unazoweza, kwa njia zote unazoweza, mahali pote unaweza, wakati wote unaweza, kwa watu wote unaweza, kwa muda wote unaweza.",
    sermons: "Mahubiri yaliyohubiriwa",
    hymns: "Nyimbo zilizotungwa",
    km: "Km zilizosafirishwa",
    methodists: "Wamethodisti duniani",
    home: "Nyumbani",
    hymnsNav: "Nyimbo",
    sermonNav: "Mahubiri",
    travels: "Safari"
  }
};

const STORAGE_KEY = "wesley_language";

export function getLanguage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem(STORAGE_KEY) || "fr";
  }
  return "fr";
}

export function setLanguage(lang) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }
}

export function t(lang, key) {
  const dict = translations[lang] || translations["fr"];
  return dict[key] || translations["fr"][key] || key;
}

export const wesleyLanguages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "sw", name: "Kiswahili", flag: "🇰🇪" }
];