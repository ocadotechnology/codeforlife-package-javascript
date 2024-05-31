// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------
export function buildUrl(url, params) {
    if (params.url) {
        Object.entries(params.url).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            url = url.replace("<".concat(key, ">"), String(value));
        });
    }
    if (params.search) {
        var searchParams = Object.entries(params.search)
            .filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined;
        })
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [key, String(value)];
        });
        if (searchParams.length !== 0) {
            url += "?".concat(new URLSearchParams(searchParams).toString());
        }
    }
    return url;
}
export function isTagId(value) {
    return typeof value === 'number' || typeof value === 'string';
}
export function tagData(type) {
    return function (result, error, arg) {
        if (!error) {
            if (arg) {
                if (isTagId(arg))
                    return [{ type: type, id: arg }];
                if (Array.isArray(arg) && arg.length > 0) {
                    if (isTagId(arg[0])) {
                        if (arg.length === 2 && !isTagId(arg[1])) {
                            return [{ type: type, id: arg[0] }];
                        }
                        return arg.map(function (id) { return ({ type: type, id: id }); });
                    }
                }
            }
            if (result) {
                if ('id' in result) {
                    return [{ type: type, id: result['id'] }];
                }
                if (Array.isArray(result)) {
                    return result.map(function (result) { return ({ type: type, id: result['id'] }); });
                }
                return result.data.map(function (result) { return ({
                    type: type,
                    id: result['id']
                }); });
            }
        }
        return [];
    };
}
