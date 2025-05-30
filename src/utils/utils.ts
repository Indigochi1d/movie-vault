export function roundTo(value: number, digits: number): number {
  return Math.round(value * 10 ** digits) / 10 ** digits;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
