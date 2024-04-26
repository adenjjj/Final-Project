"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/recipes",{

/***/ "./pages/recipes.js":
/*!**************************!*\
  !*** ./pages/recipes.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Recipes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Recipes() {\n    _s();\n    const [recipes, setRecipes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadedRecipes = JSON.parse(localStorage.getItem(\"recipes\")) || [];\n        setRecipes(loadedRecipes);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-3\",\n                children: \"Your Recipes\"\n            }, void 0, false, {\n                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            recipes.length > 0 ? recipes.map((recipe, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"card-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/add-recipe?edit=true&index=\".concat(index),\n                                    legacyBehavior: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: recipe.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 19,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Ingredients:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 24,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: recipe.ingredients\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Instructions:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 26,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: recipe.instructions\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Comments:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 28,\n                                columnNumber: 29\n                            }, this),\n                            recipe.comments && recipe.comments.map((cmt, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: cmt\n                                }, idx, false, {\n                                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 33\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/recipes/\".concat(index),\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: \"Comment\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/delete-recipe/\".concat(index),\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-danger\",\n                                    children: \"Delete Recipe\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                        lineNumber: 18,\n                        columnNumber: 25\n                    }, this)\n                }, index, false, {\n                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                    lineNumber: 17,\n                    columnNumber: 21\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No recipes found. Add your first recipe!\"\n            }, void 0, false, {\n                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/add-recipe\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"btn btn-success\",\n                    children: \"Add a New Recipe\"\n                }, void 0, false, {\n                    fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                    lineNumber: 44,\n                    columnNumber: 53\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adenjuda/Documents/AIT/FinalProject/Final-Project/pages/recipes.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Recipes, \"xBkrk5r3hhKgEpMO+HGI7yKr/O8=\");\n_c = Recipes;\nvar _c;\n$RefreshReg$(_c, \"Recipes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNpcGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBRWQsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1NLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsZUFBZSxFQUFFO1FBQ3ZFTCxXQUFXQztJQUNmLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQU87Ozs7OztZQUNwQlIsUUFBUVUsTUFBTSxHQUFHLElBQ2RWLFFBQVFXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDakIsOERBQUNOO29CQUFnQkMsV0FBVTs4QkFDdkIsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007Z0NBQUdOLFdBQVU7MENBQ1YsNEVBQUNWLGtEQUFJQTtvQ0FBQ2lCLE1BQU0sK0JBQXFDLE9BQU5GO29DQUFTRyxjQUFjOzhDQUM5RCw0RUFBQ0M7a0RBQUdMLE9BQU9NLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3hCLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBR1IsT0FBT1MsV0FBVzs7Ozs7OzBDQUN0Qiw4REFBQ0Y7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUdSLE9BQU9VLFlBQVk7Ozs7OzswQ0FDdkIsOERBQUNIOzBDQUFHOzs7Ozs7NEJBQ0hQLE9BQU9XLFFBQVEsSUFBSVgsT0FBT1csUUFBUSxDQUFDWixHQUFHLENBQUMsQ0FBQ2EsS0FBS0Msb0JBQzFDLDhEQUFDTDs4Q0FBYUk7bUNBQU5DOzs7OzswQ0FFWiw4REFBQzNCLGtEQUFJQTtnQ0FBQ2lCLE1BQU0sWUFBa0IsT0FBTkY7Z0NBQVNHLGNBQWM7MENBQzNDLDRFQUFDVTtvQ0FBT2xCLFdBQVU7OENBQWtCOzs7Ozs7Ozs7OzswQ0FFeEMsOERBQUNWLGtEQUFJQTtnQ0FBQ2lCLE1BQU0sa0JBQXdCLE9BQU5GO2dDQUFTRyxjQUFjOzBDQUNqRCw0RUFBQ1U7b0NBQU9sQixXQUFVOzhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBbkJyQ0s7Ozs7MENBeUJkLDhEQUFDTzswQkFBRTs7Ozs7OzBCQUVQLDhEQUFDdEIsa0RBQUlBO2dCQUFDaUIsTUFBSztnQkFBY0MsY0FBYzswQkFBQyw0RUFBQ0M7b0JBQUVULFdBQVU7OEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUduRjtHQTNDd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlY2lwZXMuanM/MjVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlcygpIHtcbiAgICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkZWRSZWNpcGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVjaXBlcycpKSB8fCBbXTtcbiAgICAgICAgc2V0UmVjaXBlcyhsb2FkZWRSZWNpcGVzKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItM1wiPllvdXIgUmVjaXBlczwvaDE+XG4gICAgICAgICAgICB7cmVjaXBlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIHJlY2lwZXMubWFwKChyZWNpcGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRkLXJlY2lwZT9lZGl0PXRydWUmaW5kZXg9JHtpbmRleH1gfSBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyZWNpcGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SW5ncmVkaWVudHM6PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cmVjaXBlLmluZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SW5zdHJ1Y3Rpb25zOjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3JlY2lwZS5pbnN0cnVjdGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Db21tZW50czo8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNpcGUuY29tbWVudHMgJiYgcmVjaXBlLmNvbW1lbnRzLm1hcCgoY210LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpZHh9PntjbXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVjaXBlcy8ke2luZGV4fWB9IGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZWxldGUtcmVjaXBlLyR7aW5kZXh9YH0gbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5EZWxldGUgUmVjaXBlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwPk5vIHJlY2lwZXMgZm91bmQuIEFkZCB5b3VyIGZpcnN0IHJlY2lwZSE8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZGQtcmVjaXBlXCIgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+QWRkIGEgTmV3IFJlY2lwZTwvYT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiUmVjaXBlcyIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwibG9hZGVkUmVjaXBlcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCIsIm1hcCIsInJlY2lwZSIsImluZGV4IiwiaDIiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwidGl0bGUiLCJoNCIsInAiLCJpbmdyZWRpZW50cyIsImluc3RydWN0aW9ucyIsImNvbW1lbnRzIiwiY210IiwiaWR4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/recipes.js\n"));

/***/ })

});