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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Seo */ \"./src/components/Seo.tsx\");\n\n\n\n\nvar __N_SSP = true;\nfunction HomePage(param) {\n    let { posts  } = param;\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                templateTitle: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    \"home page\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: data.data.map((post)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUVpQjtBQUNiOztBQUVwQixTQUFTRyxTQUFTLEtBQWMsRUFBRTtRQUFoQixFQUFFQyxNQUFLLEVBQU8sR0FBZDtJQUMvQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDSCxpRUFBTUE7OzBCQUVMLDhEQUFDQyx1REFBR0E7Z0JBQUNLLGVBQWM7Ozs7OzswQkFFbkIsOERBQUNDOztvQkFBSztrQ0FFSiw4REFBQ0M7a0NBQ0VDLEtBQUtBLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQWM7NEJBQzVCLHFCQUNFOzBDQUNFLDRFQUFDQzs4Q0FDQyw0RUFBQ0M7a0RBQUlGLEtBQUtHLEtBQUs7Ozs7Ozs7Ozs7Ozt3QkFJdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLENBQUM7S0F4QnVCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgU2VvIGZyb20gXCJAL2NvbXBvbmVudHMvU2VvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgcG9zdHMgfTogYW55KSB7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7LyogPFNlbyB0ZW1wbGF0ZVRpdGxlPSdIb21lJyAvPiAqL31cbiAgICAgIDxTZW8gdGVtcGxhdGVUaXRsZT1cIkhvbWUgUGFnZVwiIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICBob21lIHBhZ2VcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZGF0YS5kYXRhLm1hcCgocG9zdDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT57cG9zdC50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9wb3N0cz9wb3B1bGF0ZT0qYCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHM6IHBvc3RzIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJTZW8iLCJIb21lUGFnZSIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInRlbXBsYXRlVGl0bGUiLCJtYWluIiwiZGl2IiwiZGF0YSIsIm1hcCIsInBvc3QiLCJ1bCIsImxpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});