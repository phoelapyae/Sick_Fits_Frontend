/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_zinmyomaung_ReactJs_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/zinmyomaung/ReactJs/Advanced-React/sick-fits/frontend/components/SingleProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_zinmyomaung_ReactJs_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query SINGLE_ITEM_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      name\\n      price\\n      description\\n      photo {\\n        allText\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar ProductStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({\n  displayName: \"SingleProduct__ProductStyles\",\n  componentId: \"sc-1kapz8w-0\"\n})([\"display:grid;grid-auto-columns:1fr;grid-auto-flow:column;img{widht:100%;object-fit:contain;}\"]);\n_c = ProductStyles;\nvar SINGLE_ITEM_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nfunction SingleProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  console.log(data, loading, error);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 21\n  }, this);\n  var Product = data.Product;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductStyles, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [\"Sick Fits | \", Product.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: Product.photo.image.publicUrlTransformed,\n      alt: Product.photo.allText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"details\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: Product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: Product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SingleProduct, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n_c2 = SingleProduct;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductStyles\");\n$RefreshReg$(_c2, \"SingleProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzP2Q5MWQiXSwibmFtZXMiOlsiUHJvZHVjdFN0eWxlcyIsInN0eWxlZCIsIlNJTkdMRV9JVEVNX1FVRVJZIiwiZ3FsIiwiU2luZ2xlUHJvZHVjdCIsImlkIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlByb2R1Y3QiLCJuYW1lIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwiYWxsVGV4dCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FBbkI7S0FBTUQsYTtBQVVOLElBQU1FLGlCQUFpQixHQUFHQyxvREFBSCxtQkFBdkI7QUFnQmUsU0FBU0MsYUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFBQSxrQkFDWEMsd0RBQVEsQ0FBQ0osaUJBQUQsRUFBb0I7QUFDM0RLLGFBQVMsRUFBRTtBQUNURixRQUFFLEVBQUZBO0FBRFM7QUFEZ0QsR0FBcEIsQ0FERztBQUFBLE1BQ3BDRyxJQURvQyxhQUNwQ0EsSUFEb0M7QUFBQSxNQUM5QkMsT0FEOEIsYUFDOUJBLE9BRDhCO0FBQUEsTUFDckJDLEtBRHFCLGFBQ3JCQSxLQURxQjs7QUFNNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsS0FBM0I7QUFDQSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTyw4REFBQyxrREFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUmlDLE1BU3BDRyxPQVRvQyxHQVN4QkwsSUFUd0IsQ0FTcENLLE9BVG9DO0FBVTVDLHNCQUNFLDhEQUFDLGFBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsbUNBQW9CQSxPQUFPLENBQUNDLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQ0UsU0FBRyxFQUFFRCxPQUFPLENBQUNFLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRDNCO0FBRUUsU0FBRyxFQUFFSixPQUFPLENBQUNFLEtBQVIsQ0FBY0c7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBUUU7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUtMLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJRCxPQUFPLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBekJ1QmYsYTtVQUNXRSxvRDs7O01BRFhGLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5cbmNvbnN0IFByb2R1Y3RTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBpbWcge1xuICAgIHdpZGh0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbmA7XG5cbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBTSU5HTEVfSVRFTV9RVUVSWSgkaWQ6IElEISkge1xuICAgIFByb2R1Y3Qod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHBob3RvIHtcbiAgICAgICAgYWxsVGV4dFxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuICBjb25zb2xlLmxvZyhkYXRhLCBsb2FkaW5nLCBlcnJvcik7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcbiAgY29uc3QgeyBQcm9kdWN0IH0gPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0U3R5bGVzPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaWNrIEZpdHMgfCB7UHJvZHVjdC5uYW1lfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17UHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgYWx0PXtQcm9kdWN0LnBob3RvLmFsbFRleHR9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgIDxoMj57UHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgIDxwPntQcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUHJvZHVjdFN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ })

});