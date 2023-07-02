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
        if (document.querySelector("script[src=\"".concat(props.src, "\"]"))) {
            throw Error('already exists');
        }
        var script = document.createElement('script');
        Object.entries(props).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            script[key] = value;
        });
        if (attrs !== undefined) {
            Object.entries(attrs).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                script.setAttribute(key, value);
            });
        }
        function eventListener(event) {
            setEventType(event.type);
        }
        ;
        eventTypes === null || eventTypes === void 0 ? void 0 : eventTypes.forEach(function (eventType) {
            script.addEventListener(eventType, eventListener);
        });
        document.head.appendChild(script);
        return function () {
            eventTypes === null || eventTypes === void 0 ? void 0 : eventTypes.forEach(function (eventType) {
                script.removeEventListener(eventType, eventListener);
            });
            document.head.removeChild(script);
        };
    }, []);
    return eventType;
}
export function useCountdown(seconds, interval) {
    if (interval === void 0) { interval = 1; }
    if (seconds <= 0) {
        throw Error('seconds must be > 0');
    }
    else if (interval <= 0) {
        throw Error('interval must be > 0');
    }
    var _a = useState(seconds), _seconds = _a[0], _setSeconds = _a[1];
    useEffect(function () {
        var countdown = setInterval(function () {
            _setSeconds(function (seconds) {
                seconds = seconds - interval;
                return seconds < 0 ? 0 : seconds;
            });
        }, interval * 1000);
        return function () { clearInterval(countdown); };
    }, []);
    return [_seconds, _setSeconds];
}
export function useEventListener(element, type, listener, kwArgs) {
    if (kwArgs === void 0) { kwArgs = {}; }
    var options = kwArgs.options, _a = kwArgs.deps, deps = _a === void 0 ? [] : _a;
    useEffect(function () {
        element.addEventListener(type, listener, options);
        return function () {
            element.removeEventListener(type, listener, options);
        };
    }, deps);
}
