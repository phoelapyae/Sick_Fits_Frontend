/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationField; }\n/* harmony export */ });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n    // tells apolo we will tacke care of everything\n    read: function read() {\n      var _data$_allProductsMet;\n\n      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      var _ref = arguments.length > 1 ? arguments[1] : undefined,\n          args = _ref.args,\n          cache = _ref.cache;\n\n      console.log(existing, args, cache);\n      var skip = args.skip,\n          first = args.first; // Read the number of items on the page from the cache\n\n      var data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY\n      });\n      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      var page = skip / first + 1;\n      var pages = Math.ceil(count / first); // check if we have existing items\n\n      var items = existing.slice(skip, skip + first).filter(function (x) {\n        return x;\n      });\n\n      if (items.length !== first) {\n        // We don't have any items, we must go to the network to fetch them\n        return false;\n      } // First thing it does it asks the read fuction for the items\n      // We can either do one or two things\n      // First thing we can do is return the items before they are already in the cache\n      // The other thing we can do is to return false from here, (network request)\n\n    },\n    mrege: function mrege() {// This runs when the apollo client comes back from the network with our project\n    }\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcz85NDQwIl0sIm5hbWVzIjpbInBhZ2luYXRpb25GaWVsZCIsImtleUFyZ3MiLCJyZWFkIiwiZXhpc3RpbmciLCJhcmdzIiwiY2FjaGUiLCJjb25zb2xlIiwibG9nIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtcmVnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNuQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCQyxLQUE1QjtBQURtQyxVQUUzQkcsSUFGMkIsR0FFWEosSUFGVyxDQUUzQkksSUFGMkI7QUFBQSxVQUVyQkMsS0FGcUIsR0FFWEwsSUFGVyxDQUVyQkssS0FGcUIsRUFJbkM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZCxDQVJtQyxDQVVuQzs7QUFDQSxVQUFNVyxLQUFLLEdBQUdqQixRQUFRLENBQUNrQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZDs7QUFDQSxVQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0Fma0MsQ0FpQm5DO0FBQ0E7QUFDQTtBQUNBOztBQUNELEtBdkJJO0FBd0JMZ0IsU0F4QkssbUJBd0JHLENBQ047QUFDRDtBQTFCSSxHQUFQO0FBNEJEIiwiZmlsZSI6Ii4vbGliL3BhZ2luYXRpb25GaWVsZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XG4gIHJldHVybiB7XG4gICAga2V5QXJnczogZmFsc2UsIC8vIHRlbGxzIGFwb2xvIHdlIHdpbGwgdGFja2UgY2FyZSBvZiBldmVyeXRoaW5nXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nLCBhcmdzLCBjYWNoZSk7XG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xuXG4gICAgICAvLyBSZWFkIHRoZSBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSB0aGUgY2FjaGVcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XG4gICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xuXG4gICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zXG4gICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55IGl0ZW1zLCB3ZSBtdXN0IGdvIHRvIHRoZSBuZXR3b3JrIHRvIGZldGNoIHRoZW1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCB0aGluZyBpdCBkb2VzIGl0IGFza3MgdGhlIHJlYWQgZnVjdGlvbiBmb3IgdGhlIGl0ZW1zXG4gICAgICAvLyBXZSBjYW4gZWl0aGVyIGRvIG9uZSBvciB0d28gdGhpbmdzXG4gICAgICAvLyBGaXJzdCB0aGluZyB3ZSBjYW4gZG8gaXMgcmV0dXJuIHRoZSBpdGVtcyBiZWZvcmUgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgY2FjaGVcbiAgICAgIC8vIFRoZSBvdGhlciB0aGluZyB3ZSBjYW4gZG8gaXMgdG8gcmV0dXJuIGZhbHNlIGZyb20gaGVyZSwgKG5ldHdvcmsgcmVxdWVzdClcbiAgICB9LFxuICAgIG1yZWdlKCkge1xuICAgICAgLy8gVGhpcyBydW5zIHdoZW4gdGhlIGFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHdpdGggb3VyIHByb2plY3RcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ })

});