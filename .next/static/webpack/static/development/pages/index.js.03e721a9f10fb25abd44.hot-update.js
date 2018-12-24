webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Card = function Card(_ref) {
  var photo = _ref.photo,
      i = _ref.i,
      isZoom = _ref.isZoom;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    key: i,
    className: "jsx-3464130531" + " " + "cardstyle col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3464130531" + " " + "card text-dark shadow-sm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: photo._id,
    className: "jsx-3464130531" + " " + "card-img-box"
  }, isZoom ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: photo.image,
    alt: "Card image cap",
    className: "jsx-3464130531" + " " + "card-img-top zoom"
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: photo.image,
    alt: "Card image cap",
    className: "jsx-3464130531" + " " + "card-img-top"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3464130531" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3464130531" + " " + "card-text font-weight-normal"
  }, photo.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "jsx-3464130531" + " " + "card-text font-weight-normal"
  }, photo.author.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3464130531" + " " + "card-text font-weight-normal"
  }, photo.description), !isZoom ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: photo._id + '/edit',
    className: "jsx-3464130531" + " " + "btn btn-info btn-sm"
  }, "Edit") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3464130531"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3464130531",
    css: ".card-body.jsx-3464130531{background-color:lightgrey;}.card.jsx-3464130531{width:100%;border:none;}.cardstyle.jsx-3464130531{padding:0.3em !important;}a.cardstyle.jsx-3464130531,a.cardstyle.jsx-3464130531:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.card-img-box.jsx-3464130531{overflow:hidden;}.zoom.jsx-3464130531{-webkit-transition:-webkit-transform .2s;-webkit-transition:transform .2s;transition:transform .2s;}.zoom.jsx-3464130531:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IsQUFHMkMsQUFHZixBQUljLEFBSWYsQUFJTSxBQUdTLEFBR0gsV0FqQlYsR0FRSyxFQUlyQixPQVhBLEVBR0EsRUFQQSxxQ0FZQSxjQVNBLHFCQUhBIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBDYXJkID0gKHsgcGhvdG8sIGkgLGlzWm9vbX0pID0+IChcbiAgICBcbiAgICAgICAgPHNwYW4ga2V5ID17aX0gY2xhc3NOYW1lPVwiY2FyZHN0eWxlIGNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMyBtYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC1kYXJrIHNoYWRvdy1zbVwiID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWltZy1ib3hcIiBocmVmPXtwaG90by5faWR9ID5cbiAgICAgICAgICAgICAgICAgICAge2lzWm9vbT8oXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCB6b29tXCIgc3JjPXtwaG90by5pbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bob3RvLmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPntwaG90by5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ub3JtYWxcIj57cGhvdG8uYXV0aG9yLnVzZXJuYW1lfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ub3JtYWxcIj57cGhvdG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICB7IWlzWm9vbT8oXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtXCIgaHJlZj17cGhvdG8uX2lkKycvZWRpdCd9ID5FZGl0PC9hPlxuICAgICAgICAgICAgICAgICAgICApOig8c3Bhbj48L3NwYW4+KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNhcmQtYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkc3R5bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM2VtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLmNhcmRzdHlsZSxcbiAgICAgICAgICAgIGEuY2FyZHN0eWxlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtaW1nLWJveHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnpvb20ge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnpvb206aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc3Bhbj5cbilcbmV4cG9ydCBkZWZhdWx0IENhcmQiXX0= */\n/*@ sourceURL=/Users/jason/phototank/components/Card.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.03e721a9f10fb25abd44.hot-update.js.map