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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Seo */ \"./src/components/Seo.tsx\");\n\n\n\n\nvar __N_SSP = true;\nfunction HomePage(param) {\n    let { posts  } = param;\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                templateTitle: \"Home Page\"\n            }, void 0, false, {\n                fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    \"home page\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: posts.data.map((post)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: post.title\n                                    }, post.id, false, {\n                                        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/reactslayer/Development/reaview-app/frontend-next/src/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUVpQjtBQUNiOztBQUVwQixTQUFTRyxTQUFTLEtBQWMsRUFBRTtRQUFoQixFQUFFQyxNQUFLLEVBQU8sR0FBZDtJQUMvQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDSCxpRUFBTUE7OzBCQUVMLDhEQUFDQyx1REFBR0E7Z0JBQUNLLGVBQWM7Ozs7OzswQkFFbkIsOERBQUNDOztvQkFBSztrQ0FFSiw4REFBQ0M7a0NBQ0VMLE1BQU1NLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQWM7NEJBQzdCLHFCQUNFOzBDQUNFLDRFQUFDQzs4Q0FDQyw0RUFBQ0M7a0RBQWtCRixLQUFLRyxLQUFLO3VDQUFwQkgsS0FBS0ksRUFBRTs7Ozs7Ozs7Ozs7d0JBSXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0tBeEJ1QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiQC9jb21wb25lbnRzL1Nlb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IHBvc3RzIH06IGFueSkge1xuICBjb25zb2xlLmxvZyhwb3N0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgey8qIDxTZW8gdGVtcGxhdGVUaXRsZT0nSG9tZScgLz4gKi99XG4gICAgICA8U2VvIHRlbXBsYXRlVGl0bGU9XCJIb21lIFBhZ2VcIiAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgaG9tZSBwYWdlXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Bvc3RzLmRhdGEubWFwKChwb3N0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvcG9zdHM/cG9wdWxhdGU9KmApO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHBvc3RzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHBvc3RzOiBkYXRhLnBvc3RzIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJTZW8iLCJIb21lUGFnZSIsInBvc3RzIiwiY29uc29sZSIsImxvZyIsInRlbXBsYXRlVGl0bGUiLCJtYWluIiwiZGl2IiwiZGF0YSIsIm1hcCIsInBvc3QiLCJ1bCIsImxpIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});