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

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"walletConnectSupportedNetworks\": function() { return /* binding */ walletConnectSupportedNetworks; },\n/* harmony export */   \"supportedMetamaskNetworks\": function() { return /* binding */ supportedMetamaskNetworks; },\n/* harmony export */   \"ALBT_TOKEN_ADDRESS\": function() { return /* binding */ ALBT_TOKEN_ADDRESS; },\n/* harmony export */   \"US_ELECTION_ADDRESS\": function() { return /* binding */ US_ELECTION_ADDRESS; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar walletConnectSupportedNetworks = {\n    // Add your network rpc URL here\n    1: \"https://ethereumnode.defiterm.io\",\n    3: \"https://ethereumnode.defiterm-dev.net\"\n};\n// Network chain ids\nvar supportedMetamaskNetworks = [\n    1,\n    3,\n    4,\n    5,\n    42\n];\nvar ALBT_TOKEN_ADDRESS = \"0xc6869a93ef55e1d8ec8fdcda89c9d93616cf0a72\";\nvar US_ELECTION_ADDRESS = \"0xedB4b9688D187491dCf41E4337EcAff66fc69fFC\";\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJUyxHQUFLLENBQUNBLDhCQUE4QixHQUFhLENBQUM7SUFDdkQsRUFBZ0M7SUFDaEMsQ0FBQyxFQUFFLENBQWtDO0lBQ3JDLENBQUMsRUFBRSxDQUF1QztBQUM1QyxDQUFDO0FBRUQsRUFBb0I7QUFDYixHQUFLLENBQUNDLHlCQUF5QixHQUFHLENBQUM7SUFBQSxDQUFDO0lBQUUsQ0FBQztJQUFFLENBQUM7SUFBRSxDQUFDO0lBQUUsRUFBRTtBQUFBLENBQUM7QUFFbEQsR0FBSyxDQUFDQyxrQkFBa0IsR0FBRyxDQUE0QztBQUN2RSxHQUFLLENBQUNDLG1CQUFtQixHQUFHLENBQTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC50cz82NjRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICBleHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtzIHtcbiAgICBba2V5OiBudW1iZXJdOiBzdHJpbmc7XG4gIH1cbiAgZXhwb3J0IGNvbnN0IHdhbGxldENvbm5lY3RTdXBwb3J0ZWROZXR3b3JrczogTmV0d29ya3MgPSB7XG4gICAgLy8gQWRkIHlvdXIgbmV0d29yayBycGMgVVJMIGhlcmVcbiAgICAxOiBcImh0dHBzOi8vZXRoZXJldW1ub2RlLmRlZml0ZXJtLmlvXCIsXG4gICAgMzogXCJodHRwczovL2V0aGVyZXVtbm9kZS5kZWZpdGVybS1kZXYubmV0XCJcbiAgfTtcblxuICAvLyBOZXR3b3JrIGNoYWluIGlkc1xuICBleHBvcnQgY29uc3Qgc3VwcG9ydGVkTWV0YW1hc2tOZXR3b3JrcyA9IFsxLCAzLCA0LCA1LCA0Ml07XG5cbiAgZXhwb3J0IGNvbnN0IEFMQlRfVE9LRU5fQUREUkVTUyA9IFwiMHhjNjg2OWE5M2VmNTVlMWQ4ZWM4ZmRjZGE4OWM5ZDkzNjE2Y2YwYTcyXCI7XG4gIGV4cG9ydCBjb25zdCBVU19FTEVDVElPTl9BRERSRVNTID0gXCIweGVkQjRiOTY4OEQxODc0OTFkQ2Y0MUU0MzM3RWNBZmY2NmZjNjlmRkNcIjsiXSwibmFtZXMiOlsid2FsbGV0Q29ubmVjdFN1cHBvcnRlZE5ldHdvcmtzIiwic3VwcG9ydGVkTWV0YW1hc2tOZXR3b3JrcyIsIkFMQlRfVE9LRU5fQUREUkVTUyIsIlVTX0VMRUNUSU9OX0FERFJFU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.ts\n");

/***/ })

});