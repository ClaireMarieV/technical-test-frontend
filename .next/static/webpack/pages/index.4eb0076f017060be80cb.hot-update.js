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




var Movies = function Movies(_ref) {
  _s();

  var title = _ref.title;

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2351388049" + " " + "movies",
      children: [movies.map(function (movie) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2351388049" + " " + "movie",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/imageMovie/wonderWoman.jpg",
            className: "jsx-2351388049"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2351388049" + " " + "content",
            children: movie.original_title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "2351388049",
        children: ".movies.jsx-2351388049{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:auto;grid-gap:3rem;}.movies.jsx-2351388049>.movie.jsx-2351388049{border:1px solid #999a9d;border-radius:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content.jsx-2351388049{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:black;padding:1rem;color:white;}img.jsx-2351388049{z-index:-1;object-fit:cover;width:-webkit-fill-available;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2xhaXJlXFxEZXNrdG9wXFx0ZWNobmljYWwtdGVzdC1mcm9udGVuZFxcY29tcG9uZW50c1xcTW92aWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDb0IsQUFHMEIsQUFNWSxBQU9QLEFBTVAsV0FDTSxFQW5CK0IsWUFNL0IsR0FjWSxjQWJoQixlQWNmLEVBcEJjLFFBWVcsSUFYVCxjQUNoQixLQVdlLGFBQ0QsWUFDZCxDQVJ3Qiw4RUFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxDbGFpcmVcXERlc2t0b3BcXHRlY2huaWNhbC10ZXN0LWZyb250ZW5kXFxjb21wb25lbnRzXFxNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNb3ZpZXMgPSAoeyB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbW92aWVzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChtb3ZpZXMpID0+IHtcbiAgICAgICAgc2V0TW92aWVzKG1vdmllcyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZXNcIj5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VNb3ZpZS93b25kZXJXb21hbi5qcGdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e21vdmllLm9yaWdpbmFsX3RpdGxlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tb3ZpZXMge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW92aWVzID4gLm1vdmllIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTlhOWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Claire\\\\Desktop\\\\technical-test-frontend\\\\components\\\\Movies.js */"
      }, void 0, false, void 0, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZXMuanMiXSwibmFtZXMiOlsiTW92aWVzIiwidGl0bGUiLCJ1c2VTdGF0ZSIsIm1vdmllcyIsInNldE1vdmllcyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsIm1vdmllIiwib3JpZ2luYWxfdGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDckJDLE1BRHFCO0FBQUEsTUFDYkMsU0FEYTs7QUFBQSxtQkFFRkYsc0RBQVEsQ0FBQyxJQUFELENBRk47QUFBQSxNQUVyQkcsS0FGcUI7QUFBQSxNQUVkQyxRQUZjOztBQUFBLG1CQUdFSixzREFBUSxDQUFDLEtBQUQsQ0FIVjtBQUFBLE1BR3JCSyxPQUhxQjtBQUFBLE1BR1pDLFVBSFk7O0FBSzVCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRixZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FJLFNBQUssQ0FBQyw4QkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDUixNQUFELEVBQVk7QUFDaEJDLGVBQVMsQ0FBQ0QsTUFBRCxDQUFUO0FBQ0FLLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FMSCxXQU1TLFVBQUNILEtBQUQsRUFBVztBQUNoQkMsY0FBUSxDQUFDRCxLQUFELENBQVI7QUFDQUcsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQVRIO0FBVUQsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS1A7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDBDQUFlLFFBQWY7QUFBQSxpQkFDR0UsTUFBTSxDQUFDVyxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLDRCQUNWO0FBQUEsOENBQWUsT0FBZjtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFDLDZCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxnREFBZSxTQUFmO0FBQUEsc0JBQTBCQSxLQUFLLENBQUNDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWCxDQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBM0REOztHQUFNaEIsTTs7S0FBQUEsTTtBQTREU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGViMDA3NmYwMTcwNjBiZTgwY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1vdmllcyA9ICh7IHRpdGxlIH0pID0+IHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9tb3ZpZXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKG1vdmllcykgPT4ge1xuICAgICAgICBzZXRNb3ZpZXMobW92aWVzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllc1wiPlxuICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZU1vdmllL3dvbmRlcldvbWFuLmpwZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1vdmllcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDNyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb3ZpZXMgPiAubW92aWUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OWE5ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW92aWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==