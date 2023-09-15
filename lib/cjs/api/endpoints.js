"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function endpoints(build) {
    var _build = build;
    return {
        logout: _build.mutation({
            query: function () { return ({
                url: 'session/logout/',
                method: 'GET'
            }); },
            invalidatesTags: ['private']
        })
    };
}
exports.default = endpoints;
