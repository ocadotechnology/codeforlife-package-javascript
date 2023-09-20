export default function endpoints(build) {
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
