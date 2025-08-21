export function configureFreshworksWidget(display: "open" | "hide"): void {
  // @ts-expect-error defined in external script
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.FreshworksWidget(display)
}

export function toggleOneTrustInfoDisplay(): void {
  // @ts-expect-error defined in external script
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  window.Optanon.ToggleInfoDisplay()
}
