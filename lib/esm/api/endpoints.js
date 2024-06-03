export default function endpoints(build) {
    var _build = build;
    return {
        // TODO: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-queryfn
        logout: _build.mutation({
            query: function () { return ({
                url: 'session/logout/',
                method: 'GET'
            }); }
        })
    };
}
