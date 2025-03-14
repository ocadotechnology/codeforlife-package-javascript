import { useRef } from "react"

/**
 * Shorthand for a reference to a HTML input element since this is so common for
 * forms.
 *
 * @returns Ref object to a HTML input element.
 */
export function useInputRef() {
  return useRef<HTMLInputElement>(null)
}
