export const Symbols = [22, 21, 20, 11, 10, 0];

export function calculate(x: number, y: number, z: number) {
  return [2 * x + 11, 2 * z + y - 5, Math.abs(y + z - x)];
}
