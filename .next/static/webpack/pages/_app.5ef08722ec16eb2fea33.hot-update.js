/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateStateProvider\": function() { return /* binding */ CreateStateProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/zinmyomaung/ReactJs/Advanced-React/sick-fits/frontend/lib/cartState.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar LocalStateProvider = LocalStateContext.Provider;\n\nfunction CreateStateProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      cartOpen = _useState[0],\n      setCartOpen = _useState[1];\n\n  function toggleCart() {\n    setCartOpen(!cartOpen);\n  }\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {\n    value: {\n      cartOpen: cartOpen,\n      setCartOpen: setCartOpen,\n      toggleCart: toggleCart,\n      closeCart: closeCart,\n      openCart: openCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateStateProvider, \"xe1WncxGrJWPKk54fyWehQszVXg=\");\n\n_c = CreateStateProvider;\n\nfunction useCart() {\n  _s2();\n\n  var all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);\n  return all;\n}\n\n_s2(useCart, \"k0r6hllA0ZVFTbsvyQUS1AVLOSY=\");\n\n\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateStateProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcz83YTQ0Il0sIm5hbWVzIjpbIkxvY2FsU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvY2FsU3RhdGVQcm92aWRlciIsIlByb3ZpZGVyIiwiQ3JlYXRlU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJjYXJ0T3BlbiIsInNldENhcnRPcGVuIiwidG9nZ2xlQ2FydCIsImNsb3NlQ2FydCIsIm9wZW5DYXJ0IiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLGlCQUFpQixnQkFBR0Msb0RBQWEsRUFBdkM7QUFDQSxJQUFNQyxrQkFBa0IsR0FBR0YsaUJBQWlCLENBQUNHLFFBQTdDOztBQUVBLFNBQVNDLG1CQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNUQywrQ0FBUSxDQUFDLEtBQUQsQ0FEQztBQUFBLE1BQ2xDQyxRQURrQztBQUFBLE1BQ3hCQyxXQUR3Qjs7QUFHekMsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQkQsZUFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNEOztBQUVELFdBQVNHLFNBQVQsR0FBcUI7QUFDbkJGLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTRyxRQUFULEdBQW9CO0FBQ2xCSCxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsa0JBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUQsY0FBUSxFQUFSQSxRQUFGO0FBQVlDLGlCQUFXLEVBQVhBLFdBQVo7QUFBeUJDLGdCQUFVLEVBQVZBLFVBQXpCO0FBQXFDQyxlQUFTLEVBQVRBLFNBQXJDO0FBQWdEQyxjQUFRLEVBQVJBO0FBQWhELEtBRFQ7QUFBQSxjQUdHTjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQXRCUUQsbUI7O0tBQUFBLG1COztBQXdCVCxTQUFTUSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ2QsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPYSxHQUFQO0FBQ0Q7O0lBSFFELE87O0FBS1QiLCJmaWxlIjoiLi9saWIvY2FydFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XG5cbmZ1bmN0aW9uIENyZWF0ZVN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4oIWNhcnRPcGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlQ2FydCgpIHtcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuQ2FydCgpIHtcbiAgICBzZXRDYXJ0T3Blbih0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExvY2FsU3RhdGVQcm92aWRlclxuICAgICAgdmFsdWU9e3sgY2FydE9wZW4sIHNldENhcnRPcGVuLCB0b2dnbGVDYXJ0LCBjbG9zZUNhcnQsIG9wZW5DYXJ0IH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcbiAgcmV0dXJuIGFsbDtcbn1cblxuZXhwb3J0IHsgQ3JlYXRlU3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ })

});