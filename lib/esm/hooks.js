import { useEffect, useState } from 'react';
export function useFreshworksWidget(display) {
    // @ts-expect-error defined in external script
    window.FreshworksWidget(display);
}
export function useOneTrustInfoToggle() {
    // @ts-expect-error defined in external script
    window.Optanon.ToggleInfoDisplay();
}
export function useExternalScript(_a) {
    var props = _a.props, attrs = _a.attrs, eventTypes = _a.eventTypes;
    var _b = useState(), eventType = _b[0], setEventType = _b[1];
    useEffect(function () {
        var script = document.querySelector("script[src=\"".concat(props.src, "\"]"));
        if (script === null) {
            script = document.createElement('script');
            Object.entries(props).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                // @ts-expect-error key is type checked
                script[key] = value;
            });
            if (attrs !== undefined) {
                Object.entries(attrs).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    script.setAttribute(key, value);
                });
            }
        }
        function eventListener(event) {
            setEventType(event.type);
        }
        ;
        eventTypes === null || eventTypes === void 0 ? void 0 : eventTypes.forEach(function (eventType) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            script.addEventListener(eventType, eventListener);
        });
        // Will do nothing if the script already exists.
        document.head.appendChild(script);
        return function () {
            eventTypes === null || eventTypes === void 0 ? void 0 : eventTypes.forEach(function (eventType) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                script.removeEventListener(eventType, eventListener);
            });
        };
    }, []);
    return eventType;
}