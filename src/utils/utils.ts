export function roundTo(value: number, digits: number): number {
  return Math.round(value * 10 ** digits) / 10 ** digits;
}
