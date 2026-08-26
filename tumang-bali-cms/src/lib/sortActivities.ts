/** Shared (morning/afternoon) classes first; private last. */
export function sortActivities<T extends { title?: string }>(activities: T[]): T[] {
  const rank = (title: string) => {
    const t = title.toLowerCase()
    if (t.includes('private') || t.includes('privat')) return 2
    if (t.includes('afternoon') || t.includes('sore')) return 1
    return 0
  }
  return [...activities].sort((a, b) => rank(a.title || '') - rank(b.title || ''))
}
