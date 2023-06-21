import { useEffect, useState } from 'react';

export function useFreshworksWidget(display: 'open' | 'hide'): void {
  // @ts-expect-error defined in external script
  window.FreshworksWidget(display);
}

export function useOneTrustInfoToggle(): void {
  // @ts-expect-error defined in external script
  window.Optanon.ToggleInfoDisplay();
}

export function useExternalScript<
  EventType extends keyof HTMLElementEventMap
>({
  props,
  attrs,
  eventTypes
}: {
  props: Partial<HTMLScriptElement> & { src: string; };
  attrs?: Record<string, string>;
  eventTypes?: EventType[];
}): EventType | undefined {
  const [eventType, setEventType] = useState<EventType>();

  useEffect(() => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${props.src}"]`
    );

    if (script === null) {
      script = document.createElement('script');

      Object.entries(props).forEach(([key, value]) => {
        // @ts-expect-error key is type checked
        script[key] = value;
      });

      if (attrs !== undefined) {
        Object.entries(attrs).forEach(([key, value]) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          script!.setAttribute(key, value);
        });
      }
    }

    function eventListener(event: Event): void {
      setEventType(event.type as EventType);
    };

    eventTypes?.forEach((eventType) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      script!.addEventListener(eventType, eventListener);
    });

    // Will do nothing if the script already exists.
    document.head.appendChild(script);

    return () => {
      eventTypes?.forEach((eventType) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        script!.removeEventListener(eventType, eventListener);
      });
    };
  }, []);

  return eventType;
}

export function useCountdown(
  seconds: number,
  interval: number = 1
): [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] {
  if (seconds <= 0) {
    throw Error('seconds must be > 0');
  } else if (interval <= 0) {
    throw Error('interval must be > 0');
  }

  const [_seconds, _setSeconds] = React.useState(seconds);

  React.useEffect(() => {
    const countdown = setInterval(() => {
      _setSeconds((seconds) => {
        seconds = seconds - interval;
        return seconds < 0 ? 0 : seconds;
      });
    }, interval * 1000);

    return () => { clearInterval(countdown); };
  }, []);

  return [_seconds, _setSeconds];
}
