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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/header.js\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/header.js\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header(param) {\n    let { menuItems } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(!isOpen);\n            const navElement1 = document.getElementById(\"primary-nav\");\n            const navItems = navElement1.querySelectorAll(\".navitem\");\n            if (!isOpen) {\n                setTimeout(()=>{\n                    navElement1.classList.remove(\"h-0\");\n                    navElement1.classList.add(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"menu-transition\", \"bg-black\", \"pt-10\");\n                }, 200);\n                setTimeout(()=>{\n                    Array.from(navItems).map((item)=>{\n                        item.classList.remove(\"opacity-0\");\n                    });\n                }, 500);\n                document.querySelector(\"body\").classList.add(\"overflow-hidden\");\n            } else {\n                setTimeout(()=>{\n                    navElement1.classList.add(\"h-0\");\n                    navElement1.classList.remove(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"pt-10\");\n                    document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                }, 200);\n                Array.from(navItems).map((item)=>{\n                    item.classList.add(\"opacity-0\");\n                });\n            }\n        }\n    };\n    const handleHomeClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(false);\n            navElement.classList.add(\"h-0\");\n            navElement.classList.remove(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"pt-10\");\n            document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const navElement1 = document.getElementById(\"primary-nav\");\n            const navItems = navElement1.querySelectorAll(\".navitem\");\n            if (window.innerWidth > 768) {\n                navElement1.classList.add(\"h-0\");\n                navElement1.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\", \"pt-10\");\n                document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                Array.from(navItems).map((item)=>{\n                    item.classList.remove(\"opacity-0\");\n                });\n            } else {\n                setIsOpen(false);\n            }\n        };\n        if (true) {\n            window.addEventListener(\"resize\", handleResize);\n        }\n        // Clean up the event listener on component unmount\n        return ()=>{\n            if (true) {\n                window.removeEventListener(\"resize\", handleResize);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \" flex absolute top-0 z-[3] justify-center  w-full  \".concat((next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default().className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-center py-4 w-full ml:w-theme  relative z-[3] max-w-theme px-4 ml:px-theme-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        onClick: handleHomeClick,\n                        href: \"/\",\n                        className: \"text-nav text-primary text-white relative z-[11]\",\n                        children: \"Wasteless Wheels\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: \"flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-[4px] h-[30px] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 116,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-4 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 118,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"primary-nav\",\n                        className: \"menu-transition flex  gap-4 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-4  md:px-0  md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black  pt-10 md:pt-0\",\n                        children: menuItems.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                onClick: handleClick,\n                                className: \"group navitem h-fit  w-full \",\n                                href: item.href,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"group-hover:text-accent text-white\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" w-full md:w-0 group-hover:w-full  transition-all h-[2px] bg-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, item.href, true, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 126,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n            lineNumber: 108,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFJTUE7QUFIc0I7QUFDZ0I7QUFJN0IsU0FBU0ksT0FBTyxLQUFXO1FBQVgsRUFBQ0MsU0FBUyxFQUFDLEdBQVg7O0lBRTNCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUdyQyxNQUFNTSxjQUFjO1FBRWhCLE1BQU1DLGNBQWNDLE9BQU9DLFVBQVU7UUFFckMsSUFBSUYsY0FBYyxLQUFLO1lBQ25CRixVQUFVLENBQUNEO1lBR1gsTUFBTU0sY0FBYUMsU0FBU0MsY0FBYyxDQUFDO1lBQzNDLE1BQU1DLFdBQVdILFlBQVdJLGdCQUFnQixDQUFDO1lBRTdDLElBQUksQ0FBQ1YsUUFBUTtnQkFFYlcsV0FBVztvQkFDUEwsWUFBV00sU0FBUyxDQUFDQyxNQUFNLENBQUM7b0JBQzVCUCxZQUFXTSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxZQUFZLGtCQUFrQixlQUFlLG1CQUFtQixZQUFZO2dCQUV6RyxHQUFHO2dCQUVISCxXQUFXO29CQUNYSSxNQUFNQyxJQUFJLENBQUNQLFVBQVVRLEdBQUcsQ0FBQyxDQUFDQzt3QkFDdEJBLEtBQUtOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO29CQUMxQjtnQkFDQSxHQUFHO2dCQUVITixTQUFTWSxhQUFhLENBQUMsUUFBUVAsU0FBUyxDQUFDRSxHQUFHLENBQUM7WUFFN0MsT0FBTztnQkFFUEgsV0FBVztvQkFDUEwsWUFBV00sU0FBUyxDQUFDRSxHQUFHLENBQUM7b0JBQ3pCUixZQUFXTSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLGtCQUFrQixlQUFlO29CQUN6RU4sU0FBU1ksYUFBYSxDQUFDLFFBQVFQLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNwRCxHQUFHO2dCQUlIRSxNQUFNQyxJQUFJLENBQUNQLFVBQVVRLEdBQUcsQ0FBQyxDQUFDQztvQkFDdEJBLEtBQUtOLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO2dCQUN2QjtZQUVBO1FBQ0o7SUFDRjtJQUdBLE1BQU1NLGtCQUFrQjtRQUN0QixNQUFNakIsY0FBY0MsT0FBT0MsVUFBVTtRQUNyQyxJQUFJRixjQUFjLEtBQUs7WUFDbkJGLFVBQVU7WUFHVkssV0FBV00sU0FBUyxDQUFDRSxHQUFHLENBQUM7WUFDekJSLFdBQVdNLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksa0JBQWtCLGVBQWU7WUFDekVOLFNBQVNZLGFBQWEsQ0FBQyxRQUFRUCxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUdwRDtJQUdGO0lBR0ZoQixnREFBU0EsQ0FBQztRQUNOLE1BQU13QixlQUFlO1lBQ2pCLE1BQU1mLGNBQWFDLFNBQVNDLGNBQWMsQ0FBQztZQUMzQyxNQUFNQyxXQUFXSCxZQUFXSSxnQkFBZ0IsQ0FBQztZQUc3QyxJQUFJTixPQUFPQyxVQUFVLEdBQUcsS0FBSztnQkFDekJDLFlBQVdNLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDO2dCQUN6QlIsWUFBV00sU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxjQUFjLGVBQWU7Z0JBQ3JFTixTQUFTWSxhQUFhLENBQUMsUUFBUVAsU0FBUyxDQUFDQyxNQUFNLENBQUM7Z0JBQ2hERSxNQUFNQyxJQUFJLENBQUNQLFVBQVVRLEdBQUcsQ0FBQyxDQUFDQztvQkFDdEJBLEtBQUtOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUMxQjtZQUNKLE9BQU87Z0JBQ0haLFVBQVU7WUFDZDtRQUNKO1FBRUEsSUFBSSxJQUFrQixFQUFhO1lBQy9CRyxPQUFPa0IsZ0JBQWdCLENBQUMsVUFBVUQ7UUFDdEM7UUFFQSxtREFBbUQ7UUFDbkQsT0FBTztZQUNILElBQUksSUFBa0IsRUFBYTtnQkFDL0JqQixPQUFPbUIsbUJBQW1CLENBQUMsVUFBVUY7WUFDekM7UUFDSjtJQUNKLEdBQUcsRUFBRTtJQUlMLHFCQUFPO2tCQUNILDRFQUFDRztZQUFPQyxXQUFXLHNEQUF3RSxPQUFsQi9CLDRNQUFpQjtzQkFDdEYsNEVBQUNnQztnQkFBSUQsV0FBVTs7a0NBRVgsOERBQUM5QixrREFBSUE7d0JBQUNnQyxTQUFTUDt3QkFBaUJRLE1BQU07d0JBQUtILFdBQVU7a0NBQW1EOzs7Ozs7a0NBRXhHLDhEQUFDSTt3QkFBT0YsU0FBU3pCO3dCQUFhdUIsV0FBVTs7MENBQ2hDLDhEQUFDSztnQ0FBS0wsV0FBVyw2RkFBc0osT0FBekR6QixTQUFTLDRCQUE0Qjs7Ozs7OzBDQUVuSiw4REFBQzhCO2dDQUFLTCxXQUFXLG9HQUEwSSxPQUF0Q3pCLFNBQVMsY0FBYzs7Ozs7OzBDQUU1SSw4REFBQzhCO2dDQUFLTCxXQUFXLDhGQUEwSixPQUE1RHpCLFNBQVUsOEJBQThCOzs7Ozs7Ozs7Ozs7a0NBSS9KLDhEQUFDMEI7d0JBQUlLLElBQUc7d0JBQWNOLFdBQVU7a0NBRS9CMUIsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDWixxQkFDSSw4REFBQ3ZCLGtEQUFJQTtnQ0FBRWdDLFNBQVN6QjtnQ0FBOEJ1QixXQUFVO2dDQUErQkcsTUFBTVYsS0FBS1UsSUFBSTs7a0RBQ3RHLDhEQUFDRTt3Q0FBS0wsV0FBVTtrREFBc0NQLEtBQUtjLEtBQUs7Ozs7OztrREFDaEUsOERBQUNOO3dDQUFJRCxXQUFVOzs7Ozs7OytCQUZvQlAsS0FBS1UsSUFBSTs7Ozs7d0JBS3BEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0FsSXdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzliZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7IHN1YnNldHM6IFsnbGF0aW4nXSwgIHdlaWdodDogW1wiMzAwXCIsIFwiNDAwXCIsIFwiNTAwXCIsIFwiNjAwXCIsIFwiNzAwXCIsIFwiODAwXCIsIFwiOTAwXCJdIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7bWVudUl0ZW1zfSkge1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbWFyeS1uYXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aXRlbScpXG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc09wZW4pIHtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoLTAnKTtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sJywgJ21sOnB4LXRoZW1lLWxnJywgJ3BiLVsxMDAwcHhdJywgJ21lbnUtdHJhbnNpdGlvbicsICdiZy1ibGFjaycsICdwdC0xMCcpO1xuICBcbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgICAgXG4gICAgICAgICAgICBBcnJheS5mcm9tKG5hdkl0ZW1zKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktMCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoLTAnKTtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sJywgJ21sOnB4LXRoZW1lLWxnJywgJ3BiLVsxMDAwcHhdJywgJ3B0LTEwJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuXG5cbiAgICAgICAgICAgIEFycmF5LmZyb20obmF2SXRlbXMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0wJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgY29uc3QgaGFuZGxlSG9tZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG5cblxuICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoLTAnKTtcbiAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2wnLCAnbWw6cHgtdGhlbWUtbGcnLCAncGItWzEwMDBweF0nLCAncHQtMTAnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcblxuXG4gICAgICAgIH1cblxuXG4gICAgICB9O1xuICBcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbWFyeS1uYXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aXRlbScpXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoLTAnKTtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtY29sJywgJ3B0LVsxMDBweF0nLCAncGItWzEwMDBweF0nLCAncHQtMTAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJylcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKG5hdkl0ZW1zKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LTAnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gIFxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2AgZmxleCBhYnNvbHV0ZSB0b3AtMCB6LVszXSBqdXN0aWZ5LWNlbnRlciAgdy1mdWxsICAke3BvcHBpbnMuY2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHktNCB3LWZ1bGwgbWw6dy10aGVtZSAgcmVsYXRpdmUgei1bM10gbWF4LXctdGhlbWUgcHgtNCBtbDpweC10aGVtZS1sZyc+XG5cbiAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVIb21lQ2xpY2t9IGhyZWY9eycvJ30gY2xhc3NOYW1lPSd0ZXh0LW5hdiB0ZXh0LXByaW1hcnkgdGV4dC13aGl0ZSByZWxhdGl2ZSB6LVsxMV0nPldhc3RlbGVzcyBXaGVlbHM8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIHotWzExXSc+IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW4gZmxleCBnYXAtWzRweF0gaC1bMzBweF0gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy13aGl0ZSBibG9jayAgcmVsYXRpdmUgei1bMTFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTQgcm91bmRlZC1zbSAke2lzT3BlbiA/ICdyb3RhdGUtNDUgdHJhbnNsYXRlLXktMScgOiAnLXRyYW5zbGF0ZS15LTAuNScgfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLXdoaXRlIGJsb2NrICByZWxhdGl2ZSB6LVsxMV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNCByb3VuZGVkLXNtIG15LTAuNSAke2lzT3BlbiA/ICdvcGFjaXR5LTAnIDogJ29wYWNpdHktMTAwJyB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctd2hpdGUgYmxvY2sgIHJlbGF0aXZlIHotWzExXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgIGgtMC41IHctNCByb3VuZGVkLXNtICR7aXNPcGVuID8gICctcm90YXRlLTQ1IC10cmFuc2xhdGUteS0xJyA6ICd0cmFuc2xhdGUteS0wLjUnICB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3ByaW1hcnktbmF2JyBjbGFzc05hbWU9J21lbnUtdHJhbnNpdGlvbiBmbGV4ICBnYXAtNCB6LVsxMF0gIHctZnVsbCBtZDp3LWZpdCB0b3AtMCBsZWZ0LTAgbWQ6cmlnaHQtMCBweC00ICBtZDpweC0wICBtZDpiZy10cmFuc3BhcmVudCAgaC0wIGFic29sdXRlIG1kOnJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBtZDpvdmVyZmxvdy12aXNpYmxlIG1kOmgtZml0IHRleHQtbmF2LW1vYmlsZSAgbWQ6dGV4dC1uYXYtc21hbGwgIGxnOnRleHQtbmF2ICB0ZXh0LWJsYWNrICBwdC0xMCBtZDpwdC0wJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgb25DbGljaz17aGFuZGxlQ2xpY2t9ICBrZXk9e2l0ZW0uaHJlZn0gY2xhc3NOYW1lPSdncm91cCBuYXZpdGVtIGgtZml0ICB3LWZ1bGwgJyBocmVmPXtpdGVtLmhyZWZ9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaG92ZXI6dGV4dC1hY2NlbnQgdGV4dC13aGl0ZSc+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgbWQ6dy0wIGdyb3VwLWhvdmVyOnctZnVsbCAgdHJhbnNpdGlvbi1hbGwgaC1bMnB4XSBiZy1hY2NlbnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxufSJdLCJuYW1lcyI6WyJwb3BwaW5zIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwibWVudUl0ZW1zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ2xpY2siLCJzY3JlZW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJBcnJheSIsImZyb20iLCJtYXAiLCJpdGVtIiwicXVlcnlTZWxlY3RvciIsImhhbmRsZUhvbWVDbGljayIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJzcGFuIiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});