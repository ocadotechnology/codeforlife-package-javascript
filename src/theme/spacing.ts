export default function spacing(
  factor: number,
  important: boolean = false,
): string {
  let spacing = `${8 * factor}px`
  if (important) spacing += " !important"
  return spacing
}
