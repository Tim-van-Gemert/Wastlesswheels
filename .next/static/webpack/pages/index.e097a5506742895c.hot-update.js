"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Button(param) {\n    let { type, id, text, href } = param;\n    if (type == \"black\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: id,\n                className: \"py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-black border-[1px] text-black hover:bg-white hover:bg-white/40 transition-all duration-200 backdrop-blur-sm bg-white/10\",\n                href: href,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/button.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: id,\n                className: \"py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-white border-[1px] text-white hover:bg-white hover:bg-white/40 transition-all duration-200 backdrop-blur-sm bg-white/10\",\n                href: href,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/button.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n}\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRCO0FBR2IsU0FBU0MsT0FBTyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUUsR0FBeEI7SUFDM0IsSUFBSUgsUUFBUSxTQUFTO1FBQ2pCLHFCQUFPO3NCQUNQLDRFQUFDRixrREFBSUE7Z0JBQUNHLElBQUlBO2dCQUFJRyxXQUFVO2dCQUE4TkQsTUFBTUE7MEJBQU9EOzs7Ozs7O0lBRXZRLE9BQU87UUFDSCxxQkFBTztzQkFDUCw0RUFBQ0osa0RBQUlBO2dCQUFDRyxJQUFJQTtnQkFBSUcsV0FBVTtnQkFBOE5ELE1BQU1BOzBCQUFPRDs7Ozs7OztJQUV2UTtBQUVKO0tBWHdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idXR0b24uanM/ODlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3BwaW5zIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlLCBpZCwgdGV4dCwgaHJlZiB9KSB7XG4gICAgaWYgKHR5cGUgPT0gJ2JsYWNrJykge1xuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgPExpbmsgaWQ9e2lkfSBjbGFzc05hbWU9J3B5LTIgcHgtMyBtZDpweC01IHctZml0IHRleHQtcHJpbWFyeSBidG4tdGlueSBtZDp0ZXh0LWJ0biB0cmFuc2l0aW9uLWFsbCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayBib3JkZXItWzFweF0gdGV4dC1ibGFjayBob3ZlcjpiZy13aGl0ZSBob3ZlcjpiZy13aGl0ZS80MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgYmFja2Ryb3AtYmx1ci1zbSBiZy13aGl0ZS8xMCcgaHJlZj17aHJlZn0+e3RleHR9PC9MaW5rPiAgXG4gICAgICAgIDwvPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICA8TGluayBpZD17aWR9IGNsYXNzTmFtZT0ncHktMiBweC0zIG1kOnB4LTUgdy1maXQgdGV4dC1wcmltYXJ5IGJ0bi10aW55IG1kOnRleHQtYnRuIHRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlIGJvcmRlci1bMXB4XSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLXdoaXRlLzQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBiYWNrZHJvcC1ibHVyLXNtIGJnLXdoaXRlLzEwJyBocmVmPXtocmVmfT57dGV4dH08L0xpbms+ICBcbiAgICAgICAgPC8+XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJCdXR0b24iLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwiaHJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/button.js\n"));

/***/ })

});