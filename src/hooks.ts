import Cookies from "js-cookie"
import {
  useEffect,
  useState,
  type DependencyList,
  type Dispatch,
  type SetStateAction,
} from "react"
import {
  useNavigate as _useNavigate,
  useSearchParams,
  type NavigateOptions,
  type To as NavigateTo,
} from "react-router-dom"

import { type User } from "./api"
import { type PageState } from "./components/page"

export function useNavigate(): <
  State extends Record<string, any> = Record<string, any>,
>(
  to: NavigateTo,
  options?: Omit<NavigateOptions, "state"> & {
    state?: State & Partial<PageState>
    next?: boolean
  },
) => void {
  const navigate = _useNavigate()
  const searchParams = useSearchParamEntries()

  return (to, options) => {
    const { next = true, ..._options } = options || {}

    navigate(next && "next" in searchParams ? searchParams.next : to, _options)
  }
}

export function useExternalScript<EventType extends keyof HTMLElementEventMap>({
  props,
  attrs,
  eventTypes,
}: {
  props: Partial<HTMLScriptElement> & { src: string }
  attrs?: Record<string, string>
  eventTypes?: EventType[]
}): EventType | undefined {
  const [eventType, setEventType] = useState<EventType>()

  useEffect(() => {
    if (
      document.querySelector<HTMLScriptElement>(`script[src="${props.src}"]`)
    ) {
      throw Error("already exists")
    }

    const script = document.createElement("script")

    Object.entries(props).forEach(([key, value]) => {
      // @ts-expect-error
      script[key] = value
    })

    if (attrs !== undefined) {
      Object.entries(attrs).forEach(([key, value]) => {
        script.setAttribute(key, value)
      })
    }

    function eventListener(event: Event): void {
      setEventType(event.type as EventType)
    }

    eventTypes?.forEach(eventType => {
      script.addEventListener(eventType, eventListener)
    })

    document.head.appendChild(script)

    return () => {
      eventTypes?.forEach(eventType => {
        script.removeEventListener(eventType, eventListener)
      })

      document.head.removeChild(script)
    }
  }, [eventTypes, attrs, props])

  return eventType
}

export function useCountdown(
  seconds: number,
  interval: number = 1,
): [number, Dispatch<SetStateAction<number>>] {
  if (seconds <= 0) {
    throw Error("seconds must be > 0")
  } else if (interval <= 0) {
    throw Error("interval must be > 0")
  }

  const [_seconds, _setSeconds] = useState(seconds)

  useEffect(() => {
    const countdown = setInterval(() => {
      _setSeconds(seconds => {
        seconds = seconds - interval
        return seconds < 0 ? 0 : seconds
      })
    }, interval * 1000)

    return () => {
      clearInterval(countdown)
    }
  }, [interval])

  return [_seconds, _setSeconds]
}

export function useEventListener<EventType extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: EventType,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[EventType]) => any,
  kwArgs: {
    options?: boolean | AddEventListenerOptions
    deps?: DependencyList
  } = {},
): void {
  const { options, deps = [] } = kwArgs

  useEffect(
    () => {
      element.addEventListener(type, listener, options)

      return () => {
        element.removeEventListener(type, listener, options)
      }
    },
    // TODO: simplify this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )
}

export function useSearchParamEntries() {
  return Object.fromEntries(useSearchParams()[0].entries())
}

export interface SessionMetadata {
  user_id: User["id"]
  auth_factors: string[]
  otp_bypass_token_exists: boolean
}

export function useSessionMetadata(): SessionMetadata | undefined {
  const sessionMetadata = Cookies.get("session_metadata")

  return sessionMetadata ? JSON.parse(sessionMetadata) : undefined
}
