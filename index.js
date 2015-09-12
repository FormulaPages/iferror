(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'formula-iserror'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('formula-iserror'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.ISERROR);
        global.index = mod.exports;
    }
})(this, function (exports, module, _formulaIserror) {
    'use strict';

    module.exports = IFERROR;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ISERROR = _interopRequireDefault(_formulaIserror);

    function IFERROR(value, valueIfError) {
        if ((0, _ISERROR['default'])(value)) {
            return valueIfError;
        }
        return value;
    }

    ;
});
