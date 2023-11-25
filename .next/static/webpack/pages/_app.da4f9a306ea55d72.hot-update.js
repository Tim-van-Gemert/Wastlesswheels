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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/header.js\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"]}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/header.js\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header(param) {\n    let { menuItems } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        const screenWidth = window.innerWidth;\n        if (screenWidth < 768) {\n            setIsOpen(!isOpen);\n            const navElement = document.getElementById(\"primary-nav\");\n            const navItems = navElement.querySelectorAll(\".navitem\");\n            if (!isOpen) {\n                setTimeout(()=>{\n                    navElement.classList.remove(\"h-0\");\n                    navElement.classList.add(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\", \"menu-transition\");\n                }, 200);\n                document.querySelector(\"body\").classList.add(\"overflow-hidden\");\n            } else {\n                // Adding a delay of 500 milliseconds (adjust as needed)\n                setTimeout(()=>{\n                    navElement.classList.add(\"h-0\");\n                    navElement.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\");\n                    document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                }, 200);\n                setTimeout(()=>{\n                    navItems.map((item)=>{\n                        item.classList.add(\"opacity-0\");\n                    });\n                }, 230);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const navElement = document.getElementById(\"primary-nav\");\n            const navItems = navElement.querySelectorAll(\".navitem\");\n            if (window.innerWidth > 768) {\n                navElement.classList.add(\"h-0\");\n                navElement.classList.remove(\"flex-col\", \"pt-[100px]\", \"pb-[1000px]\");\n                document.querySelector(\"body\").classList.remove(\"overflow-hidden\");\n                navItems.map((item)=>{\n                    item.classList.remove(\"opacity-0\");\n                });\n            } else {\n                setIsOpen(false);\n            }\n        };\n        if (true) {\n            window.addEventListener(\"resize\", handleResize);\n        }\n        // Clean up the event listener on component unmount\n        return ()=>{\n            if (true) {\n                window.removeEventListener(\"resize\", handleResize);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"flex absolute top-0 z-[2] justify-center py-5 w-screen px-6 \".concat((next_font_google_target_css_path_src_components_header_js_import_Poppins_arguments_subsets_latin_weight_400_500_600_700_800_900_variableName_poppins___WEBPACK_IMPORTED_MODULE_3___default().className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-center w-full lg:w-theme  max-w-theme \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        onClick: handleClick,\n                        href: \"/\",\n                        className: \"text-nav text-primary relative z-[11]\",\n                        children: \"Wasteless Wheels\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        className: \"flex relative z-[11]'> flex-col justify-center items-center md:hidden flex gap-1 h-[30px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm \".concat(isOpen ? \"rotate-45 translate-y-2\" : \"-translate-y-1\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 95,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 \".concat(isOpen ? \"opacity-0\" : \"opacity-100\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-black block  relative z-[11] transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm \".concat(isOpen ? \"-rotate-45 -translate-y-2\" : \"translate-y-1\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"primary-nav\",\n                        className: \"menu-transition flex  gap-5 z-[10]  w-full md:w-fit top-0 left-0 md:right-0 px-6  md:px-0 bg-white md:bg-transparent  h-0 absolute md:relative overflow-hidden md:overflow-visible md:h-fit text-nav-mobile  md:text-nav-small  lg:text-nav  text-black \",\n                        children: menuItems.map((item)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                onClick: handleClick,\n                                className: \"group navitem h-fit w-fit\",\n                                href: item.href,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"group-hover:text-accent\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" w-full md:w-0 group-hover:w-full  transition-all h-[2px] bg-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, item.href, true, {\n                                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tim/Desktop/Wastlesswheels/src/components/header.js\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"vl0Rt3/A8evyRPW1OQ1AhRk4UhU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUNJLDhEQUFDdEIsa0RBQUlBO2dDQUFFNkIsU0FBU3RCO2dDQUE4Qm9CLFdBQVU7Z0NBQTRCRyxNQUFNUixLQUFLUSxJQUFJOztrREFDbkcsOERBQUNFO3dDQUFLTCxXQUFVO2tEQUEyQkwsS0FBS1ksS0FBSzs7Ozs7O2tEQUNyRCw4REFBQ047d0NBQUlELFdBQVU7Ozs7Ozs7K0JBRm9CTCxLQUFLUSxJQUFJOzs7Ozt3QkFLcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQS9Hd0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanM/OWJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3BwaW5zIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHBvcHBpbnMgPSBQb3BwaW5zKHsgc3Vic2V0czogWydsYXRpbiddLCAgd2VpZ2h0OiBbXCI0MDBcIiwgXCI1MDBcIiwgXCI2MDBcIiwgXCI3MDBcIiwgXCI4MDBcIiwgXCI5MDBcIl0gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHttZW51SXRlbXN9KSB7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmIChzY3JlZW5XaWR0aCA8IDc2OCkge1xuICAgICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuXG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5LW5hdicpO1xuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBuYXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpdGVtJylcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2gtMCcpO1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2wnLCAncHQtWzEwMHB4XScsICdwYi1bMTAwMHB4XScsICdtZW51LXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGEgZGVsYXkgb2YgNTAwIG1pbGxpc2Vjb25kcyAoYWRqdXN0IGFzIG5lZWRlZClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaC0wJyk7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4LWNvbCcsICdwdC1bMTAwcHhdJywgJ3BiLVsxMDAwcHhdJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktMCcpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0sIDIzMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gIFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5LW5hdicpO1xuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBuYXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpdGVtJylcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2gtMCcpO1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxleC1jb2wnLCAncHQtWzEwMHB4XScsICdwYi1bMTAwMHB4XScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktMCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YGZsZXggYWJzb2x1dGUgdG9wLTAgei1bMl0ganVzdGlmeS1jZW50ZXIgcHktNSB3LXNjcmVlbiBweC02ICR7cG9wcGlucy5jbGFzc05hbWV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbGc6dy10aGVtZSAgbWF4LXctdGhlbWUgJz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBocmVmPXsnLyd9IGNsYXNzTmFtZT0ndGV4dC1uYXYgdGV4dC1wcmltYXJ5IHJlbGF0aXZlIHotWzExXSc+V2FzdGVsZXNzIFdoZWVsczwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImZsZXggcmVsYXRpdmUgei1bMTFdJz4gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOmhpZGRlbiBmbGV4IGdhcC0xIGgtWzMwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1ibGFjayBibG9jayAgcmVsYXRpdmUgei1bMTFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSAke2lzT3BlbiA/ICdyb3RhdGUtNDUgdHJhbnNsYXRlLXktMicgOiAnLXRyYW5zbGF0ZS15LTEnIH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BiZy1ibGFjayBibG9jayAgcmVsYXRpdmUgei1bMTFdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBoLTAuNSB3LTYgcm91bmRlZC1zbSBteS0wLjUgJHtpc09wZW4gPyAnb3BhY2l0eS0wJyA6ICdvcGFjaXR5LTEwMCcgfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGJnLWJsYWNrIGJsb2NrICByZWxhdGl2ZSB6LVsxMV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0ICBoLTAuNSB3LTYgcm91bmRlZC1zbSAke2lzT3BlbiA/ICAnLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMicgOiAndHJhbnNsYXRlLXktMScgIH1gfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgIFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ncHJpbWFyeS1uYXYnIGNsYXNzTmFtZT0nbWVudS10cmFuc2l0aW9uIGZsZXggIGdhcC01IHotWzEwXSAgdy1mdWxsIG1kOnctZml0IHRvcC0wIGxlZnQtMCBtZDpyaWdodC0wIHB4LTYgIG1kOnB4LTAgYmctd2hpdGUgbWQ6YmctdHJhbnNwYXJlbnQgIGgtMCBhYnNvbHV0ZSBtZDpyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctdmlzaWJsZSBtZDpoLWZpdCB0ZXh0LW5hdi1tb2JpbGUgIG1kOnRleHQtbmF2LXNtYWxsICBsZzp0ZXh0LW5hdiAgdGV4dC1ibGFjayAnPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBvbkNsaWNrPXtoYW5kbGVDbGlja30gIGtleT17aXRlbS5ocmVmfSBjbGFzc05hbWU9J2dyb3VwIG5hdml0ZW0gaC1maXQgdy1maXQnIGhyZWY9e2l0ZW0uaHJlZn0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdncm91cC1ob3Zlcjp0ZXh0LWFjY2VudCc+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgbWQ6dy0wIGdyb3VwLWhvdmVyOnctZnVsbCAgdHJhbnNpdGlvbi1hbGwgaC1bMnB4XSBiZy1hY2NlbnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIDwvPlxufSJdLCJuYW1lcyI6WyJwb3BwaW5zIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwibWVudUl0ZW1zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiaGFuZGxlQ2xpY2siLCJzY3JlZW5XaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuYXZFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInNldFRpbWVvdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwibWFwIiwiaXRlbSIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJzcGFuIiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});