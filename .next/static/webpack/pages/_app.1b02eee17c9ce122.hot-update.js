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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/header.js\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/header.js\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header(param) {\n    let { menuItems } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(!isOpen);\n            const navElement = document.getElementById(\"primary-nav\");\n            if (!isOpen) {\n                navElement.classList.remove(\"h-0\");\n                navElement.classList.add(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\", \"menu-transition\");\n                document.querySelector(\"body\").classList.add(\"overflow-hidden\");\n            } else {\n                // Adding a delay of 500 milliseconds (adjust as needed)\n                setTimeout(()=>{\n                    navElement.classList.add(\"h-0\");\n                    navElement.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\");\n                    document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                }, 200);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const navElement = document.getElementById(\"primary-nav\");\n            if (window.innerWidth > 768) {\n                navElement.classList.add(\"h-0\");\n                navElement.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\");\n                document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n            } else {\n                setIsOpen(false);\n            }\n        };\n        if (true) {\n            window.addEventListener(\"resize\", handleResize);\n        }\n        // Clean up the event listener on component unmount\n        return ()=>{\n            if (true) {\n                window.removeEventListener(\"resize\", handleResize);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex absolute top-0 z-[2] justify-center py-5 w-screen px-6 \".concat((next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default().className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-center w-full lg:w-theme  max-w-theme \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        onClick: handleClick,\n                        href: \"/\",\n                        className: \"text-nav text-primary relative z-[11]\",\n                        children: \"Wasteless Wheels\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: \"flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-1 h-[30px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-2\" : \"-translate-y-1\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-2\" : \"translate-y-1\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"primary-nav\",\n                        className: \"menu-transition flex  gap-5 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-6  md:px-0 bg-white md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black \",\n                        children: menuItems.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                onClick: handleClick,\n                                className: \"group h-fit w-fit\",\n                                href: item.href,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"group-hover:text-accent\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" w-full md:w-0 group-hover:w-full  transition-all h-[2px] bg-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, item.href, true, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NvbXBvbmVudHMvaGVhZGVyLmpzPzliZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBwb3BwaW5zID0gUG9wcGlucyh7IHN1YnNldHM6IFsnbGF0aW4nXSwgIHdlaWdodDogW1wiNDAwXCIsIFwiNTAwXCIsIFwiNjAwXCIsIFwiNzAwXCIsIFwiODAwXCIsIFwiOTAwXCJdIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7bWVudUl0ZW1zfSkge1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPCA3NjgpIHtcbiAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcblxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbWFyeS1uYXYnKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoLTAnKTtcbiAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2wnLCAncHQtWzEwMHB4XScsICdwYi1bMTAwMHB4XScsICdtZW51LXRyYW5zaXRpb24nKTtcbiAgICAgICAgXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGEgZGVsYXkgb2YgNTAwIG1pbGxpc2Vjb25kcyAoYWRqdXN0IGFzIG5lZWRlZClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaC0wJyk7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbCcsICdwdC1bMTAwcHhdJywgJ3BiLVsxMDAwcHhdJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5LW5hdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2gtMCcpO1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2wnLCAncHQtWzEwMHB4XScsICdwYi1bMTAwMHB4XScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gIFxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2BmbGV4IGFic29sdXRlIHRvcC0wIHotWzJdIGp1c3RpZnktY2VudGVyIHB5LTUgdy1zY3JlZW4gcHgtNiAke3BvcHBpbnMuY2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOnctdGhlbWUgIG1heC13LXRoZW1lICc+XG5cbiAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXtoYW5kbGVDbGlja30gaHJlZj17Jy8nfSBjbGFzc05hbWU9J3RleHQtbmF2IHRleHQtcHJpbWFyeSByZWxhdGl2ZSB6LVsxMV0nPldhc3RlbGVzcyBXaGVlbHM8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIHotWzExXSc+IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW4gZmxleCBnYXAtMSBoLVszMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctYmxhY2sgYmxvY2sgIHJlbGF0aXZlIHotWzExXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtpc09wZW4gPyAncm90YXRlLTQ1IHRyYW5zbGF0ZS15LTInIDogJy10cmFuc2xhdGUteS0xJyB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctYmxhY2sgYmxvY2sgIHJlbGF0aXZlIHotWzExXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaC0wLjUgdy02IHJvdW5kZWQtc20gbXktMC41ICR7aXNPcGVuID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0xMDAnIH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1ibGFjayBibG9jayAgcmVsYXRpdmUgei1bMTFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCAgaC0wLjUgdy02IHJvdW5kZWQtc20gJHtpc09wZW4gPyAgJy1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTInIDogJ3RyYW5zbGF0ZS15LTEnICB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3ByaW1hcnktbmF2JyBjbGFzc05hbWU9J21lbnUtdHJhbnNpdGlvbiBmbGV4ICBnYXAtNSB6LVsxMF0gIHctZnVsbCBtZDp3LWZpdCB0b3AtMCBsZWZ0LTAgbWQ6cmlnaHQtMCBweC02ICBtZDpweC0wIGJnLXdoaXRlIG1kOmJnLXRyYW5zcGFyZW50ICBoLTAgYWJzb2x1dGUgbWQ6cmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LXZpc2libGUgbWQ6aC1maXQgdGV4dC1uYXYtbW9iaWxlICBtZDp0ZXh0LW5hdi1zbWFsbCAgbGc6dGV4dC1uYXYgIHRleHQtYmxhY2sgJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayAgb25DbGljaz17aGFuZGxlQ2xpY2t9ICBrZXk9e2l0ZW0uaHJlZn0gY2xhc3NOYW1lPSdncm91cCBoLWZpdCB3LWZpdCcgaHJlZj17aXRlbS5ocmVmfT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2dyb3VwLWhvdmVyOnRleHQtYWNjZW50Jz57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHctZnVsbCBtZDp3LTAgZ3JvdXAtaG92ZXI6dy1mdWxsICB0cmFuc2l0aW9uLWFsbCBoLVsycHhdIGJnLWFjY2VudCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgPC8+XG59Il0sIm5hbWVzIjpbInBvcHBpbnMiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJtZW51SXRlbXMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVDbGljayIsInNjcmVlbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm5hdkVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicXVlcnlTZWxlY3RvciIsInNldFRpbWVvdXQiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJocmVmIiwiYnV0dG9uIiwic3BhbiIsImlkIiwibWFwIiwiaXRlbSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});