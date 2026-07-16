/**
 * Derives a URL-safe slug from a recipe title.
 * Works against existing CMS data — no schema migration / slug field required.
 * e.g. "Nasi Goreng atau Nasi Kuning" -> "nasi-goreng-atau-nasi-kuning"
 */
export function recipeSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumerics -> hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
}
