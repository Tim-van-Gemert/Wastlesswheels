"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"./src/components/header.js\");\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vercel/analytics/react */ \"./node_modules/@vercel/analytics/dist/react/index.js\");\n\n\n\n\n\nfunction App(param) {\n    let { Component, pageProps } = param;\n    const menuItems = [\n        {\n            title: \"Over ons\",\n            href: \"/over-ons\"\n        },\n        {\n            title: \"Ons menu\",\n            href: \"/ons-menu\"\n        },\n        {\n            title: \"Onze missie\",\n            href: \"/onze-missie\"\n        },\n        {\n            title: \"Doe mee\",\n            href: \"/doe-mee\"\n        },\n        {\n            title: \"Contact\",\n            href: \"/contact\"\n        }\n    ];\n    const pages = [\n        {\n            page: \"404\",\n            title: \"404\",\n            subtitle: \"Hier hebben wij geen pagina voor gemaakt\",\n            text: \"Maar wees gerust, onze website staat vol met informatie!\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__.Analytics, {}, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                menuItems: menuItems\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/_app.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                pages: pages\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                menuItems: menuItems\n            }, void 0, false, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/pages/_app.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVztBQUNBO0FBRVk7QUFFckMsU0FBU0csSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4QjtJQUUxQixNQUFNQyxZQUFXO1FBQ2Y7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUNEO0lBRUQsTUFBTUMsUUFBUztRQUFDO1lBQ1pDLE1BQU07WUFDTkgsT0FBTztZQUNQSSxVQUFVO1lBQ1ZDLE1BQU07UUFDVjtLQUFFO0lBRUYscUJBQU87OzBCQUNMLDhEQUFDViw4REFBU0E7Ozs7OzBCQUNWLDhEQUFDRCwwREFBTUE7Z0JBQUNLLFdBQVdBOzs7Ozs7MEJBQ2pCLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTO2dCQUFHSSxPQUFPQTs7Ozs7OzBCQUNwQyw4REFBQ1QsMERBQU1BO2dCQUFDTSxXQUFXQTs7Ozs7Ozs7QUFHdkI7S0F2Q3dCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9oZWFkZXInXG5cbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0B2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9W1xuICAgIHtcbiAgICAgIHRpdGxlOiAnT3ZlciBvbnMnLFxuICAgICAgaHJlZjogJy9vdmVyLW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnT25zIG1lbnUnLFxuICAgICAgaHJlZjogJy9vbnMtbWVudSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnT256ZSBtaXNzaWUnLFxuICAgICAgaHJlZjogJy9vbnplLW1pc3NpZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRG9lIG1lZScsXG4gICAgICBocmVmOiAnL2RvZS1tZWUnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgaHJlZjogJy9jb250YWN0J1xuICAgIH1cbiAgXVxuXG4gIGNvbnN0IHBhZ2VzICA9IFt7XG4gICAgICBwYWdlOiAnNDA0JyxcbiAgICAgIHRpdGxlOiAnNDA0JyxcbiAgICAgIHN1YnRpdGxlOiAnSGllciBoZWJiZW4gd2lqIGdlZW4gcGFnaW5hIHZvb3IgZ2VtYWFrdCcsXG4gICAgICB0ZXh0OiAnTWFhciB3ZWVzIGdlcnVzdCwgb256ZSB3ZWJzaXRlIHN0YWF0IHZvbCBtZXQgaW5mb3JtYXRpZSEnLFxuICB9XVxuXG4gIHJldHVybiA8PlxuICAgIDxBbmFseXRpY3MgLz5cbiAgICA8SGVhZGVyIG1lbnVJdGVtcz17bWVudUl0ZW1zfT48L0hlYWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gIHBhZ2VzPXtwYWdlc30gLz5cbiAgICA8Rm9vdGVyIG1lbnVJdGVtcz17bWVudUl0ZW1zfT48L0Zvb3Rlcj5cblxuICA8Lz5cbn1cbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJBbmFseXRpY3MiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZW51SXRlbXMiLCJ0aXRsZSIsImhyZWYiLCJwYWdlcyIsInBhZ2UiLCJzdWJ0aXRsZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});