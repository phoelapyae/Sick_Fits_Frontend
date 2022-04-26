/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/home/zinmyomaung/ReactJs/Advanced-React/sick-fits/frontend/components/Reset.js\";\n\n\n\n\n\n\nconst RESET_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  mutation RESET_MUTATION(\n    $email: String!\n    $password: String!\n    $token: String!\n  ) {\n    redeemUserPasswordResetToken(\n      email: $email\n      password: $password\n      token: $token\n    ) {\n      code\n      message\n    }\n  }\n`;\nfunction Reset({\n  token\n}) {\n  var _data$redeemUserPassw;\n\n  const {\n    inputs,\n    handleChange,\n    resetForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_4__.default)({\n    email: '',\n    password: '',\n    token\n  });\n  const [reset, {\n    data,\n    loading,\n    error\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(RESET_MUTATION, {\n    variables: inputs // refectch the currently logged in user\n    // refetchQueries: [{ query: CURRENT_USER_QUERY }],\n\n  });\n  const successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;\n  console.log(error);\n\n  async function handleSubmit(e) {\n    e.preventDefault(); // stop the form from submitting\n\n    console.log(inputs);\n    const res = await reset().catch(console.error);\n    console.log(res);\n    resetForm();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_3__.default, {\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Reset New Password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {\n      error: error || successfulError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), (data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Success! You can now sign in!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your Email Address\",\n          autoComplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: inputs.password,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Reset!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Jlc2V0LmpzP2EwODAiXSwibmFtZXMiOlsiUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXNldCIsInRva2VuIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInN1Y2Nlc3NmdWxFcnJvciIsInJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4iLCJjb2RlIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxvREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmQTtBQWlCZSxTQUFTQyxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQTBCO0FBQUE7O0FBQ3ZDLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxnQkFBVjtBQUF3QkM7QUFBeEIsTUFBc0NDLHFEQUFPLENBQUM7QUFDbERDLFNBQUssRUFBRSxFQUQyQztBQUVsREMsWUFBUSxFQUFFLEVBRndDO0FBR2xETjtBQUhrRCxHQUFELENBQW5EO0FBS0EsUUFBTSxDQUFDTyxLQUFELEVBQVE7QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixHQUFSLElBQW9DQywyREFBVyxDQUFDZCxjQUFELEVBQWlCO0FBQ3BFZSxhQUFTLEVBQUVYLE1BRHlELENBRXBFO0FBQ0E7O0FBSG9FLEdBQWpCLENBQXJEO0FBS0EsUUFBTVksZUFBZSxHQUFHTCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDZCQUFBQSxJQUFJLENBQUVNLDRCQUFOLHdFQUFvQ0MsSUFBcEMsR0FDcEJQLElBRG9CLGFBQ3BCQSxJQURvQix1QkFDcEJBLElBQUksQ0FBRU0sNEJBRGMsR0FFcEJFLFNBRko7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7O0FBRUEsaUJBQWVTLFlBQWYsQ0FBNEJDLENBQTVCLEVBQStCO0FBQzdCQSxLQUFDLENBQUNDLGNBQUYsR0FENkIsQ0FDVDs7QUFDcEJKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZakIsTUFBWjtBQUNBLFVBQU1xQixHQUFHLEdBQUcsTUFBTWYsS0FBSyxHQUFHZ0IsS0FBUixDQUFjTixPQUFPLENBQUNQLEtBQXRCLENBQWxCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0FuQixhQUFTO0FBQ1Y7O0FBRUQsc0JBQ0UsOERBQUMsaURBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVnQixZQUE5QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxrREFBRDtBQUFPLFdBQUssRUFBRVQsS0FBSyxJQUFJRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRyxDQUFBTCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRU0sNEJBQU4sTUFBdUMsSUFBdkMsaUJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU1FO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxzQkFBWSxFQUFDLE9BSmY7QUFLRSxlQUFLLEVBQUViLE1BQU0sQ0FBQ0ksS0FMaEI7QUFNRSxrQkFBUSxFQUFFSDtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRTtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQUEsNENBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UscUJBQVcsRUFBQyxVQUhkO0FBSUUsc0JBQVksRUFBQyxVQUpmO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNLLFFBTGhCO0FBTUUsa0JBQVEsRUFBRUo7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5cbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBSRVNFVF9NVVRBVElPTihcbiAgICAkZW1haWw6IFN0cmluZyFcbiAgICAkcGFzc3dvcmQ6IFN0cmluZyFcbiAgICAkdG9rZW46IFN0cmluZyFcbiAgKSB7XG4gICAgcmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgIGVtYWlsOiAkZW1haWxcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcbiAgICAgIHRva2VuOiAkdG9rZW5cbiAgICApIHtcbiAgICAgIGNvZGVcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2V0KHsgdG9rZW4gfSkge1xuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgdG9rZW4sXG4gIH0pO1xuICBjb25zdCBbcmVzZXQsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihSRVNFVF9NVVRBVElPTiwge1xuICAgIHZhcmlhYmxlczogaW5wdXRzLFxuICAgIC8vIHJlZmVjdGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAgICAvLyByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcbiAgfSk7XG4gIGNvbnN0IHN1Y2Nlc3NmdWxFcnJvciA9IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4/LmNvZGVcbiAgICA/IGRhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW5cbiAgICA6IHVuZGVmaW5lZDtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZ1xuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzZXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDI+UmVzZXQgTmV3IFBhc3N3b3JkPC9oMj5cbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3IgfHwgc3VjY2Vzc2Z1bEVycm9yfSAvPlxuICAgICAge2RhdGE/LnJlZGVlbVVzZXJQYXNzd29yZFJlc2V0VG9rZW4gPT09IG51bGwgJiYgKFxuICAgICAgICA8cD5TdWNjZXNzISBZb3UgY2FuIG5vdyBzaWduIGluITwvcD5cbiAgICAgICl9XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cbiAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXNldCE8L2J1dHRvbj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResetPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ \"./components/RequestReset.js\");\n/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Reset */ \"./components/Reset.js\");\n\nvar _jsxFileName = \"/home/zinmyomaung/ReactJs/Advanced-React/sick-fits/frontend/pages/reset.js\";\n\n\nfunction ResetPage({\n  query\n}) {\n  if (!query.token) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"di\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Sorry, you must supply a token!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [\"Reset your password \", query === null || query === void 0 ? void 0 : query.token]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Reset__WEBPACK_IMPORTED_MODULE_2__.default, {\n      token: query === null || query === void 0 ? void 0 : query.token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9yZXNldC5qcz80YzgxIl0sIm5hbWVzIjpbIlJlc2V0UGFnZSIsInF1ZXJ5IiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQjtBQUFFQztBQUFGLENBQW5CLEVBQThCO0FBQzNDLE1BQUksQ0FBQ0EsS0FBSyxDQUFDQyxLQUFYLEVBQWtCO0FBQ2hCLHdCQUNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU1EOztBQUNELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBd0JELEtBQXhCLGFBQXdCQSxLQUF4Qix1QkFBd0JBLEtBQUssQ0FBRUMsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxzREFBRDtBQUFPLFdBQUssRUFBRUQsS0FBRixhQUFFQSxLQUFGLHVCQUFFQSxLQUFLLENBQUVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EIiwiZmlsZSI6Ii4vcGFnZXMvcmVzZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdFJlc2V0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVxdWVzdFJlc2V0JztcbmltcG9ydCBSZXNldCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYWdlKHsgcXVlcnkgfSkge1xuICBpZiAoIXF1ZXJ5LnRva2VuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaT5cbiAgICAgICAgPHA+U29ycnksIHlvdSBtdXN0IHN1cHBseSBhIHRva2VuITwvcD5cbiAgICAgICAgPFJlcXVlc3RSZXNldCAvPlxuICAgICAgPC9kaT5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlJlc2V0IHlvdXIgcGFzc3dvcmQge3F1ZXJ5Py50b2tlbn08L3A+XG4gICAgICA8UmVzZXQgdG9rZW49e3F1ZXJ5Py50b2tlbn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reset.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js","components_RequestReset_js"], function() { return __webpack_exec__("./pages/reset.js"); });
module.exports = __webpack_exports__;

})();