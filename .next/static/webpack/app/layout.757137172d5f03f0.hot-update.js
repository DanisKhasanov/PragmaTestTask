"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/tasksSlice.ts":
/*!*********************************!*\
  !*** ./src/redux/tasksSlice.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: function() { return /* binding */ addTask; },\n/* harmony export */   editTask: function() { return /* binding */ editTask; },\n/* harmony export */   setPage: function() { return /* binding */ setPage; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    tasks: [\n        {\n            id: 3,\n            title: \"Третья задача\",\n            email: \"user@user.com\",\n            description: \"Получить офер у Pragma\",\n            status: \"не выполнена\"\n        },\n        {\n            id: 2,\n            title: \"Вторая задача\",\n            email: \"user@user.com\",\n            description: \"пройти тех.собеседование у Pragma\",\n            status: \"не выполнена\"\n        }\n    ],\n    currentPage: 1\n};\nconst tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tasks\",\n    initialState,\n    reducers: {\n        addTask: (state, action)=>{\n            const newTask = {\n                id: state.tasks.length + 1,\n                status: \"не выполнена\",\n                ...action.payload\n            };\n            state.tasks.unshift(newTask);\n        },\n        setPage: (state, action)=>{\n            state.currentPage = action.payload;\n        },\n        editTask: (state, action)=>{\n            const index = state.tasks.findIndex((task)=>task.id === action.payload.id);\n            if (index !== -1) {\n                state.tasks[index] = action.payload;\n            }\n        }\n    }\n});\nconst { addTask, setPage, editTask } = tasksSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasksSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC90YXNrc1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkQ7QUFlN0QsTUFBTUMsZUFBMkI7SUFDL0JDLE9BQU87UUFDTDtZQUNFQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFFBQVE7UUFDVjtRQUNBO1lBQ0VKLElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsUUFBUTtRQUNWO0tBRUQ7SUFDREMsYUFBYTtBQUNmO0FBRUEsTUFBTUMsYUFBYVQsNkRBQVdBLENBQUM7SUFDN0JVLE1BQU07SUFDTlQ7SUFDQVUsVUFBVTtRQUNSQyxTQUFTLENBQUNDLE9BQU9DO1lBQ2YsTUFBTUMsVUFBZ0I7Z0JBQ3BCWixJQUFJVSxNQUFNWCxLQUFLLENBQUNjLE1BQU0sR0FBRztnQkFDekJULFFBQVE7Z0JBQ1IsR0FBR08sT0FBT0csT0FBTztZQUNuQjtZQUNBSixNQUFNWCxLQUFLLENBQUNnQixPQUFPLENBQUNIO1FBQ3RCO1FBQ0FJLFNBQVMsQ0FBQ04sT0FBT0M7WUFDZkQsTUFBTUwsV0FBVyxHQUFHTSxPQUFPRyxPQUFPO1FBQ3BDO1FBQ0FHLFVBQVUsQ0FBQ1AsT0FBT0M7WUFDaEIsTUFBTU8sUUFBUVIsTUFBTVgsS0FBSyxDQUFDb0IsU0FBUyxDQUNqQyxDQUFDQyxPQUFTQSxLQUFLcEIsRUFBRSxLQUFLVyxPQUFPRyxPQUFPLENBQUNkLEVBQUU7WUFFekMsSUFBSWtCLFVBQVUsQ0FBQyxHQUFHO2dCQUNoQlIsTUFBTVgsS0FBSyxDQUFDbUIsTUFBTSxHQUFHUCxPQUFPRyxPQUFPO1lBQ3JDO1FBQ0Y7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFTCxPQUFPLEVBQUVPLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEdBQUdYLFdBQVdlLE9BQU87QUFDaEUsK0RBQWVmLFdBQVdnQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC90YXNrc1NsaWNlLnRzPzQwY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbnRlcmZhY2UgVGFzayB7XG4gIGlkOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICBlbWFpbDogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIHN0YXR1czogJ9Cy0YvQv9C+0LvQvdC10L3QsCcgfCAn0L3QtSDQstGL0L/QvtC70L3QtdC90LAnXG59XG5cbmludGVyZmFjZSBUYXNrc1N0YXRlIHtcbiAgdGFza3M6IFRhc2tbXVxuICBjdXJyZW50UGFnZTogbnVtYmVyXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGFza3NTdGF0ZSA9IHtcbiAgdGFza3M6IFtcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRpdGxlOiAn0KLRgNC10YLRjNGPINC30LDQtNCw0YfQsCcsXG4gICAgICBlbWFpbDogJ3VzZXJAdXNlci5jb20nLFxuICAgICAgZGVzY3JpcHRpb246ICfQn9C+0LvRg9GH0LjRgtGMINC+0YTQtdGAINGDIFByYWdtYScsXG4gICAgICBzdGF0dXM6ICfQvdC1INCy0YvQv9C+0LvQvdC10L3QsCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiAn0JLRgtC+0YDQsNGPINC30LDQtNCw0YfQsCcsXG4gICAgICBlbWFpbDogJ3VzZXJAdXNlci5jb20nLFxuICAgICAgZGVzY3JpcHRpb246ICfQv9GA0L7QudGC0Lgg0YLQtdGFLtGB0L7QsdC10YHQtdC00L7QstCw0L3QuNC1INGDIFByYWdtYScsXG4gICAgICBzdGF0dXM6ICfQvdC1INCy0YvQv9C+0LvQvdC10L3QsCcsXG4gICAgfSxcbiAgIFxuICBdLFxuICBjdXJyZW50UGFnZTogMSxcbn1cblxuY29uc3QgdGFza3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3Rhc2tzJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFRhc2s6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPE9taXQ8VGFzaywgJ2lkJyB8ICdzdGF0dXMnPj4pID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2s6IFRhc2sgPSB7XG4gICAgICAgIGlkOiBzdGF0ZS50YXNrcy5sZW5ndGggKyAxLFxuICAgICAgICBzdGF0dXM6ICfQvdC1INCy0YvQv9C+0LvQvdC10L3QsCcsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgc3RhdGUudGFza3MudW5zaGlmdChuZXdUYXNrKVxuICAgIH0sXG4gICAgc2V0UGFnZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgZWRpdFRhc2s6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFRhc2s+KSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnRhc2tzLmZpbmRJbmRleChcbiAgICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgKVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzdGF0ZS50YXNrc1tpbmRleF0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGRUYXNrLCBzZXRQYWdlLCBlZGl0VGFzayB9ID0gdGFza3NTbGljZS5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCB0YXNrc1NsaWNlLnJlZHVjZXJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRhc2tzIiwiaWQiLCJ0aXRsZSIsImVtYWlsIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJjdXJyZW50UGFnZSIsInRhc2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUYXNrIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdUYXNrIiwibGVuZ3RoIiwicGF5bG9hZCIsInVuc2hpZnQiLCJzZXRQYWdlIiwiZWRpdFRhc2siLCJpbmRleCIsImZpbmRJbmRleCIsInRhc2siLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/tasksSlice.ts\n"));

/***/ })

});