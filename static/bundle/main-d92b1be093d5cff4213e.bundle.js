!function(e){var n={};function t(r){if(n[r])return n[r].exports;var _=n[r]={i:r,l:!1,exports:{}};return e[r].call(_.exports,_,_.exports,t),_.l=!0,_.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var _ in e)t.d(r,_,function(n){return e[n]}.bind(null,_));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dashboard_scripts_scheduler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _components_dashboard_scripts_scheduler_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dashboard_scripts_scheduler_js__WEBPACK_IMPORTED_MODULE_1__);\n// Import custom scripts here\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?")},function(module,exports){eval("(function () {\n  const XHR = new XMLHttpRequest()\n  const MONTH_SELECT = document.getElementById('month-select')\n  MONTH_SELECT.addEventListener('change', event => {\n    XHR.onload = () => {\n      const schedule_form_container = document.querySelector('.schedule-form-container')\n      schedule_form_container.innerHTML = XHR.response\n    }\n\n    XHR.open('POST', `${window.location.origin}/scheduler-form`)\n    XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')\n    XHR.send(`month=${event.target.value}`)\n  })\n})();\n\nconst mutationObserver = new MutationObserver((mutations) => {\n  const schedule_form = document.getElementById('schedule-form')\n  schedule_form.addEventListener('submit', event => {\n    event.preventDefault()\n  })\n  console.log(mutations)\n  console.log('Mutation observed inside form section')\n})\n\nmutationObserver.observe(document.querySelector('.schedule-form-container'), {\n  characterData: true,\n  childList: true,\n  subtree: true,\n})\n\n\n//# sourceURL=webpack:///./src/components/dashboard/scripts/scheduler.js?")}]);