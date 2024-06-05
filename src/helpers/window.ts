export function configureFreshworksWidget(display: "open" | "hide"): void {
  // @ts-expect-error defined in external script
  window.FreshworksWidget(display)
}

export function toggleOneTrustInfoDisplay(): void {
  // @ts-expect-error defined in external script
  window.Optanon.ToggleInfoDisplay()
}
