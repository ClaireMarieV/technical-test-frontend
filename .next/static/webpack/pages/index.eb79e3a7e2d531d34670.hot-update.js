webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Movies.js":
/*!******************************!*\
  !*** ./components/Movies.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Claire\\Desktop\\technical-test-frontend\\components\\Movies.js",
    _this = undefined,
    _s = $RefreshSig$();




var Movies = function Movies() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      movies = _useState[0],
      setMovies = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLoading(true);
    setError(null);
    fetch("http://localhost:3001/movies").then(function (response) {
      return response.json();
    }).then(function (movies) {
      setMovies(movies);
      setLoading(false);
    })["catch"](function (error) {
      setError(error);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-2085888330",
    children: [movies.map(function (movie) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2085888330" + " " + "card",
        children: [movie.original_title, movie.overview, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2085888330",
          children: movie.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2085888330",
      children: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2xhaXJlXFxEZXNrdG9wXFx0ZWNobmljYWwtdGVzdC1mcm9udGVuZFxcY29tcG9uZW50c1xcTW92aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxDbGFpcmVcXERlc2t0b3BcXHRlY2huaWNhbC10ZXN0LWZyb250ZW5kXFxjb21wb25lbnRzXFxNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNb3ZpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbW92aWVzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChtb3ZpZXMpID0+IHtcbiAgICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIHttb3ZpZS5vcmlnaW5hbF90aXRsZX1cbiAgICAgICAgICB7bW92aWUub3ZlcnZpZXd9XG4gICAgICAgICAgPGRpdj57bW92aWUucHJpY2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Claire\\\\Desktop\\\\technical-test-frontend\\\\components\\\\Movies.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(Movies, "NjJYEYCJUCJVVaKG83n5Hdgi358=");

_c = Movies;
/* harmony default export */ __webpack_exports__["default"] = (Movies);

var _c;

$RefreshReg$(_c, "Movies");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZXMuanMiXSwibmFtZXMiOlsiTW92aWVzIiwidXNlU3RhdGUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJtb3ZpZSIsIm9yaWdpbmFsX3RpdGxlIiwib3ZlcnZpZXciLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxJQUFELENBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxLQUFELENBSG5CO0FBQUEsTUFHWkssT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBS25CQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FJLFNBQUssQ0FBQyw4QkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDUixNQUFELEVBQVk7QUFDaEJDLGVBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0FLLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMSCxXQU1TLFVBQUNILEtBQUQsRUFBVztBQUNoQkMsY0FBUSxDQUFDRCxLQUFELENBQVI7QUFDQUcsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQVRIO0FBVUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLHNCQUNFO0FBQUE7QUFBQSxlQUNHTCxNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsMEJBQ1Y7QUFBQSw0Q0FBZSxNQUFmO0FBQUEsbUJBQ0dBLEtBQUssQ0FBQ0MsY0FEVCxFQUVHRCxLQUFLLENBQUNFLFFBRlQsZUFHRTtBQUFBO0FBQUEsb0JBQU1GLEtBQUssQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBWCxDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FoQ0Q7O0dBQU1qQixNOztLQUFBQSxNO0FBaUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYjc5ZTNhN2UyZDUzMWQzNDY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTW92aWVzID0gKCkgPT4ge1xuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL21vdmllc1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigobW92aWVzKSA9PiB7XG4gICAgICAgIHNldE1vdmllcyhtb3ZpZXMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICB7bW92aWUub3JpZ2luYWxfdGl0bGV9XG4gICAgICAgICAge21vdmllLm92ZXJ2aWV3fVxuICAgICAgICAgIDxkaXY+e21vdmllLnByaWNlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9