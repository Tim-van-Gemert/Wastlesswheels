/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/404"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ftim%2FDesktop%2FWastlesswheels%2Fsrc%2Fpages%2F404.js&page=%2F404!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ftim%2FDesktop%2FWastlesswheels%2Fsrc%2Fpages%2F404.js&page=%2F404! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/404\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/404.js */ \"./src/pages/404.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/404\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnRpbSUyRkRlc2t0b3AlMkZXYXN0bGVzc3doZWVscyUyRnNyYyUyRnBhZ2VzJTJGNDA0LmpzJnBhZ2U9JTJGNDA0ISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhDQUFvQjtBQUMzQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/Yjk0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiLzQwNFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzLzQwNC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvNDA0XCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ftim%2FDesktop%2FWastlesswheels%2Fsrc%2Fpages%2F404.js&page=%2F404!\n"));

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Button(param) {\n    let { type, id, text, href } = param;\n    if (type == \"black\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: id,\n                className: \"py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-black border-[1px] text-black hover:bg-black transition-all duration-200 hover:text-white\",\n                href: href,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/button.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: id,\n                className: \"py-2 px-3 md:px-5 w-fit text-primary btn-tiny md:text-btn transition-all border border-solid border-white border-[1px] text-white hover:bg-white hover:bg-white/40 transition-all duration-200 backdrop-blur-sm bg-white/10\",\n                href: href,\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/button.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false);\n    }\n}\n_c = Button;\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRCO0FBR2IsU0FBU0MsT0FBTyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUUsR0FBeEI7SUFDM0IsSUFBSUgsUUFBUSxTQUFTO1FBQ2pCLHFCQUFPO3NCQUNQLDRFQUFDRixrREFBSUE7Z0JBQUNHLElBQUlBO2dCQUFJRyxXQUFVO2dCQUFnTUQsTUFBTUE7MEJBQU9EOzs7Ozs7O0lBRXpPLE9BQU87UUFDSCxxQkFBTztzQkFDUCw0RUFBQ0osa0RBQUlBO2dCQUFDRyxJQUFJQTtnQkFBSUcsV0FBVTtnQkFBOE5ELE1BQU1BOzBCQUFPRDs7Ozs7OztJQUV2UTtBQUVKO0tBWHdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9idXR0b24uanM/ODlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3BwaW5zIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyB0eXBlLCBpZCwgdGV4dCwgaHJlZiB9KSB7XG4gICAgaWYgKHR5cGUgPT0gJ2JsYWNrJykge1xuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgPExpbmsgaWQ9e2lkfSBjbGFzc05hbWU9J3B5LTIgcHgtMyBtZDpweC01IHctZml0IHRleHQtcHJpbWFyeSBidG4tdGlueSBtZDp0ZXh0LWJ0biB0cmFuc2l0aW9uLWFsbCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFjayBib3JkZXItWzFweF0gdGV4dC1ibGFjayBob3ZlcjpiZy1ibGFjayB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6dGV4dC13aGl0ZScgaHJlZj17aHJlZn0+e3RleHR9PC9MaW5rPiAgXG4gICAgICAgIDwvPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICA8TGluayBpZD17aWR9IGNsYXNzTmFtZT0ncHktMiBweC0zIG1kOnB4LTUgdy1maXQgdGV4dC1wcmltYXJ5IGJ0bi10aW55IG1kOnRleHQtYnRuIHRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXdoaXRlIGJvcmRlci1bMXB4XSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLXdoaXRlLzQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBiYWNrZHJvcC1ibHVyLXNtIGJnLXdoaXRlLzEwJyBocmVmPXtocmVmfT57dGV4dH08L0xpbms+ICBcbiAgICAgICAgPC8+XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJCdXR0b24iLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwiaHJlZiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/button.js\n"));

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FourZeroFour; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n\n\n\n\nfunction FourZeroFour() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex w-full flex-col items-center bg-black h-[100vh] max-h-[1000px]  relative mb-[225px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black opacity-[65%] w-full h-full z-[2] absolute\"\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"absolute h-full w-full object-cover  z-[1] \",\n                src: \"/foodtruck foto.jpg\",\n                width: 1400,\n                height: 736,\n                alt: \"Picture of foodtruck\"\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full px-4 mlpx-theme-lg w-full xl:w-theme  flex-col items-start mt-[200px]  md:mt-[250px] z-[2] relative  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-title-h1-medium md:text-title-h1 text-white\",\n                        children: \"404\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-title-h2-small md:text-title-h2-bold text-accent \",\n                        children: \"Hier hebben we nog geen pagina voor gemaakt\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-7 flex flex-col md:flex-row gap-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: \"Home\",\n                            href: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/404.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = FourZeroFour;\nvar _c;\n$RefreshReg$(_c, \"FourZeroFour\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJTUE7QUFId0I7QUFDVTtBQUl6QixTQUFTRztJQUV0QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBR25CLDhEQUFDQztnQkFBSUQsV0FBVTs7Ozs7OzBCQUViLDhEQUFDSixtREFBS0E7Z0JBQ05JLFdBQVU7Z0JBQ1JFLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUk7Ozs7OzswQkFJTiw4REFBQ0o7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBR04sV0FBVTtrQ0FBbUQ7Ozs7OztrQ0FDakUsOERBQUNPO3dCQUFLUCxXQUFVO2tDQUF5RDs7Ozs7O2tDQUN6RSw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2YsNEVBQUNILDBEQUFNQTs0QkFBRVcsTUFBTTs0QkFBUUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckM7S0EzQndCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvNDA0LmpzPzc1ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbidcblxuY29uc3QgcG9wcGlucyA9IFBvcHBpbnMoeyBzdWJzZXRzOiBbJ2xhdGluJ10sICB3ZWlnaHQ6IFtcIjIwMFwiLCBcIjMwMFwiLCBcIjQwMFwiLCBcIjUwMFwiLCBcIjYwMFwiLCBcIjcwMFwiLCBcIjgwMFwiLCBcIjkwMFwiXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3VyWmVyb0ZvdXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ibGFjayBoLVsxMDB2aF0gbWF4LWgtWzEwMDBweF0gIHJlbGF0aXZlIG1iLVsyMjVweF0nPlxuXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2sgb3BhY2l0eS1bNjUlXSB3LWZ1bGwgaC1mdWxsIHotWzJdIGFic29sdXRlJy8+XG5cbiAgICAgIDxJbWFnZVxuICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciAgei1bMV0gJ1xuICAgICAgICBzcmM9XCIvZm9vZHRydWNrIGZvdG8uanBnXCJcbiAgICAgICAgd2lkdGg9ezE0MDB9XG4gICAgICAgIGhlaWdodD17NzM2fVxuICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIGZvb2R0cnVja1wiXG4gICAgICAvPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBweC00IG1scHgtdGhlbWUtbGcgdy1mdWxsIHhsOnctdGhlbWUgIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IG10LVsyMDBweF0gIG1kOm10LVsyNTBweF0gei1bMl0gcmVsYXRpdmUgICc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtdGl0bGUtaDEtbWVkaXVtIG1kOnRleHQtdGl0bGUtaDEgdGV4dC13aGl0ZSc+NDA0PC9oMT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXRpdGxlLWgyLXNtYWxsIG1kOnRleHQtdGl0bGUtaDItYm9sZCB0ZXh0LWFjY2VudCAnPkhpZXIgaGViYmVuIHdlIG5vZyBnZWVuIHBhZ2luYSB2b29yIGdlbWFha3Q8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC03IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTMnPlxuICAgICAgICA8QnV0dG9uICB0ZXh0PXsnSG9tZSd9IGhyZWY9eycvJ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iXSwibmFtZXMiOlsicG9wcGlucyIsIkltYWdlIiwiQnV0dG9uIiwiRm91clplcm9Gb3VyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJzcGFuIiwidGV4dCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Ftim%2FDesktop%2FWastlesswheels%2Fsrc%2Fpages%2F404.js&page=%2F404!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);