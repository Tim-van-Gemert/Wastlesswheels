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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/header.js\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/header.js\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header(param) {\n    let { menuItems } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(!isOpen);\n            const navElement1 = document.getElementById(\"primary-nav\");\n            const navItems = navElement1.querySelectorAll(\".navitem\");\n            if (!isOpen) {\n                setTimeout(()=>{\n                    navElement1.classList.remove(\"h-0\");\n                    navElement1.classList.add(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"menu-transition\", \"bg-black\", \"pt-10\");\n                }, 200);\n                setTimeout(()=>{\n                    Array.from(navItems).map((item)=>{\n                        item.classList.remove(\"opacity-0\");\n                    });\n                }, 500);\n                document.querySelector(\"body\").classList.add(\"overflow-hidden\");\n            } else {\n                setTimeout(()=>{\n                    navElement1.classList.add(\"h-0\");\n                    navElement1.classList.remove(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"pt-10\");\n                    document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                }, 200);\n                Array.from(navItems).map((item)=>{\n                    item.classList.add(\"opacity-0\");\n                });\n            }\n        }\n    };\n    const handleHomeClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(false);\n            navElement.classList.add(\"h-0\");\n            navElement.classList.remove(\"flex-col\", \"ml:px-theme-lg\", \"pb-[1000px]\", \"pt-10\");\n            document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const navElement1 = document.getElementById(\"primary-nav\");\n            const navItems = navElement1.querySelectorAll(\".navitem\");\n            if (window.innerWidth > 768) {\n                navElement1.classList.add(\"h-0\");\n                navElement1.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\", \"pt-10\");\n                document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                Array.from(navItems).map((item)=>{\n                    item.classList.remove(\"opacity-0\");\n                });\n            } else {\n                setIsOpen(false);\n            }\n        };\n        if (true) {\n            window.addEventListener(\"resize\", handleResize);\n        }\n        // Clean up the event listener on component unmount\n        return ()=>{\n            if (true) {\n                window.removeEventListener(\"resize\", handleResize);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \" flex absolute top-0 z-[3] justify-center  w-full  \".concat((next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_300_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default().className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-center py-4 w-full ml:w-theme  relative z-[3] max-w-theme px-4 ml:px-theme-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        onClick: handleHomeClick,\n                        href: \"/\",\n                        className: \"text-nav text-primary text-white relative z-[11]\",\n                        children: \"Wasteless Wheels\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: \"flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-[4px] h-[30px] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-1\" : \"-translate-y-0.5\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 116,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 118,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-white block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-4 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-1\" : \"translate-y-0.5\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"primary-nav\",\n                        className: \"menu-transition flex  gap-4 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-4  md:px-0  md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black  pt-10 md:pt-0\",\n                        children: menuItems.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                onClick: handleClick,\n                                className: \"group navitem h-fit w-fit \",\n                                href: item.href,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"group-hover:text-accent text-white\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" w-full md:w-0 group-hover:w-full  transition-all h-[2px] bg-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, item.href, true, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 128,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n            lineNumber: 110,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUM5QixrREFBSUE7d0JBQUNnQyxTQUFTUDt3QkFBaUJRLE1BQU07d0JBQUtILFdBQVU7a0NBQW1EOzs7Ozs7a0NBRXhHLDhEQUFDSTt3QkFBT0YsU0FBU3pCO3dCQUFhdUIsV0FBVTs7MENBQ2hDLDhEQUFDSztnQ0FBS0wsV0FBVyw2RkFBc0osT0FBekR6QixTQUFTLDRCQUE0Qjs7Ozs7OzBDQUVuSiw4REFBQzhCO2dDQUFLTCxXQUFXLG9HQUEwSSxPQUF0Q3pCLFNBQVMsY0FBYzs7Ozs7OzBDQUU1SSw4REFBQzhCO2dDQUFLTCxXQUFXLDhGQUEwSixPQUE1RHpCLFNBQVUsOEJBQThCOzs7Ozs7Ozs7Ozs7a0NBSS9KLDhEQUFDMEI7d0JBQUlLLElBQUc7d0JBQWNOLFdBQVU7a0NBRS9CMUIsVUFBVWtCLEdBQUcsQ0FBQyxDQUFDQzs0QkFDWixxQkFDSSw4REFBQ3ZCLGtEQUFJQTtnQ0FBRWdDLFNBQVN6QjtnQ0FBOEJ1QixXQUFVO2dDQUE2QkcsTUFBTVYsS0FBS1UsSUFBSTs7a0RBQ3BHLDhEQUFDRTt3Q0FBS0wsV0FBVTtrREFBc0NQLEtBQUtjLEtBQUs7Ozs7OztrREFDaEUsOERBQUNOO3dDQUFJRCxXQUFVOzs7Ozs7OytCQUZvQlAsS0FBS1UsSUFBSTs7Ozs7d0JBS3BEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0FwSXdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzPzliZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7IHN1YnNldHM6IFsnbGF0aW4nXSwgIHdlaWdodDogW1wiMzAwXCIsIFwiNDAwXCIsIFwiNTAwXCIsIFwiNjAwXCIsIFwiNzAwXCIsIFwiODAwXCIsIFwiOTAwXCJdIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7bWVudUl0ZW1zfSkge1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbWFyeS1uYXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gbmF2RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aXRlbScpXG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpc09wZW4pIHtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoLTAnKTtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sJywgJ21sOnB4LXRoZW1lLWxnJywgJ3BiLVsxMDAwcHhdJywgJ21lbnUtdHJhbnNpdGlvbicsICdiZy1ibGFjaycsICdwdC0xMCcpO1xuICBcbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgICAgXG4gICAgICAgICAgICBBcnJheS5mcm9tKG5hdkl0ZW1zKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktMCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaC0wJyk7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbCcsICdtbDpweC10aGVtZS1sZycsICdwYi1bMTAwMHB4XScsICdwdC0xMCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG5cblxuXG5cbiAgICAgICAgICAgIEFycmF5LmZyb20obmF2SXRlbXMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS0wJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICBjb25zdCBoYW5kbGVIb21lQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGlmIChzY3JlZW5XaWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcblxuXG4gICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2gtMCcpO1xuICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbCcsICdtbDpweC10aGVtZS1sZycsICdwYi1bMTAwMHB4XScsICdwdC0xMCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuXG5cbiAgICAgICAgfVxuXG5cbiAgICAgIH07XG4gIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5LW5hdicpO1xuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBuYXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpdGVtJylcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2gtMCcpO1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2wnLCAncHQtWzEwMHB4XScsICdwYi1bMTAwMHB4XScsICdwdC0xMCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20obmF2SXRlbXMpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktMCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCBmbGV4IGFic29sdXRlIHRvcC0wIHotWzNdIGp1c3RpZnktY2VudGVyICB3LWZ1bGwgICR7cG9wcGlucy5jbGFzc05hbWV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00IHctZnVsbCBtbDp3LXRoZW1lICByZWxhdGl2ZSB6LVszXSBtYXgtdy10aGVtZSBweC00IG1sOnB4LXRoZW1lLWxnJz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUhvbWVDbGlja30gaHJlZj17Jy8nfSBjbGFzc05hbWU9J3RleHQtbmF2IHRleHQtcHJpbWFyeSB0ZXh0LXdoaXRlIHJlbGF0aXZlIHotWzExXSc+V2FzdGVsZXNzIFdoZWVsczwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgei1bMTFdJz4gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOmhpZGRlbiBmbGV4IGdhcC1bNHB4XSBoLVszMHB4XSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLXdoaXRlIGJsb2NrICByZWxhdGl2ZSB6LVsxMV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IGgtMC41IHctNCByb3VuZGVkLXNtICR7aXNPcGVuID8gJ3JvdGF0ZS00NSB0cmFuc2xhdGUteS0xJyA6ICctdHJhbnNsYXRlLXktMC41JyB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctd2hpdGUgYmxvY2sgIHJlbGF0aXZlIHotWzExXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy00IHJvdW5kZWQtc20gbXktMC41ICR7aXNPcGVuID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xMDAnIH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy13aGl0ZSBibG9jayAgcmVsYXRpdmUgei1bMTFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCAgaC0wLjUgdy00IHJvdW5kZWQtc20gJHtpc09wZW4gPyAgJy1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTEnIDogJ3RyYW5zbGF0ZS15LTAuNScgIH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgIFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ncHJpbWFyeS1uYXYnIGNsYXNzTmFtZT0nbWVudS10cmFuc2l0aW9uIGZsZXggIGdhcC00IHotWzEwXSAgdy1mdWxsIG1kOnctZml0IHRvcC0wIGxlZnQtMCBtZDpyaWdodC0wIHB4LTQgIG1kOnB4LTAgIG1kOmJnLXRyYW5zcGFyZW50ICBoLTAgYWJzb2x1dGUgbWQ6cmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LXZpc2libGUgbWQ6aC1maXQgdGV4dC1uYXYtbW9iaWxlICBtZDp0ZXh0LW5hdi1zbWFsbCAgbGc6dGV4dC1uYXYgIHRleHQtYmxhY2sgIHB0LTEwIG1kOnB0LTAnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBvbkNsaWNrPXtoYW5kbGVDbGlja30gIGtleT17aXRlbS5ocmVmfSBjbGFzc05hbWU9J2dyb3VwIG5hdml0ZW0gaC1maXQgdy1maXQgJyBocmVmPXtpdGVtLmhyZWZ9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ3JvdXAtaG92ZXI6dGV4dC1hY2NlbnQgdGV4dC13aGl0ZSc+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgbWQ6dy0wIGdyb3VwLWhvdmVyOnctZnVsbCAgdHJhbnNpdGlvbi1hbGwgaC1bMnB4XSBiZy1hY2NlbnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxufSJdLCJuYW1lcyI6WyJwb3BwaW5zIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwibWVudUl0ZW1zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ2xpY2siLCJzY3JlZW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJBcnJheSIsImZyb20iLCJtYXAiLCJpdGVtIiwicXVlcnlTZWxlY3RvciIsImhhbmRsZUhvbWVDbGljayIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJzcGFuIiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});