/**
 * Comptes actifs (accès offert, sans paiement).
 *
 * Même principe que l'application AgendaPro : une liste de numéros bénéficiant
 * d'un accès offert. Ici, un accès peut être limité dans le temps via
 * `expiresAt` (date ISO). Sans `expiresAt`, l'accès est permanent.
 *
 * Comparaison sur les chiffres uniquement : le "+" initial, les espaces et
 * les tirets sont ignorés (ex. "+225 01 43 88 67 83" == "+2250143886783").
 *
 * +2250143886783 : accès offert pendant 1 mois (jusqu'au 24/12/2026 inclus),
 * puis retour au paiement normal de 5 000 F CFA.
 */
export const ACTIVE_ACCOUNTS = [
  { phone: '+2250143886783', expiresAt: '2026-12-24T23:59:59.999Z' },
];

const digits = (value) => String(value || '').replace(/\D/g, '');

/** Retourne l'entrée de compte actif correspondant au numéro, ou null. */
export const findActiveAccount = (userId) => {
  const target = digits(userId);
  if (!target) return null;
  return ACTIVE_ACCOUNTS.find((account) => digits(account.phone) === target) || null;
};

/** Vrai si le compte est actif et non expiré à la date `now` (par défaut : maintenant). */
export const isActiveAccount = (userId, now = new Date()) => {
  const account = findActiveAccount(userId);
  if (!account) return false;
  if (!account.expiresAt) return true;
  return now < new Date(account.expiresAt);
};
