import {
  type DependencyList,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react"

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
      // @ts-expect-error value is assignable
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
  if (seconds <= 0) throw Error("seconds must be > 0")
  if (interval <= 0) throw Error("interval must be > 0")

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
