var guidService = (function () {
    return {
        newGuid: newGuid
    };

    /**
     * Get a new rfc4122 version 4 compliant guid.
     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     *
     * @returns {string} an rfc4122 version 4 compliant guid
     */
    function newGuid() {
        var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = (c === 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return guid;
    }
})();

module.exports = guidService;