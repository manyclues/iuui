/**
 * applies amount on a color
 * @param hex hex code of a color
 * @param amount the amount of color to apply
 * @returns final hex code for the color
 */
export const adjustColorBrightness = (hex: string, amount: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  let num = parseInt(color, 16);
  let r = (num >> 16) + amount;
  let g = ((num >> 8) & 0x00ff) + amount;
  let b = (num & 0x0000ff) + amount;

  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};
