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
    className: "jsx-3464130531" + " " + "btn btn-info"
  }, "Edit") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3464130531"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3464130531",
    css: ".card-body.jsx-3464130531{background-color:lightgrey;}.card.jsx-3464130531{width:100%;border:none;}.cardstyle.jsx-3464130531{padding:0.3em !important;}a.cardstyle.jsx-3464130531,a.cardstyle.jsx-3464130531:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.card-img-box.jsx-3464130531{overflow:hidden;}.zoom.jsx-3464130531{-webkit-transition:-webkit-transform .2s;-webkit-transition:transform .2s;transition:transform .2s;}.zoom.jsx-3464130531:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCd0IsQUFHMkMsQUFHZixBQUljLEFBSWYsQUFJTSxBQUdTLEFBR0gsV0FqQlYsR0FRSyxFQUlyQixPQVhBLEVBR0EsRUFQQSxxQ0FZQSxjQVNBLHFCQUhBIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBDYXJkID0gKHsgcGhvdG8sIGkgLGlzWm9vbX0pID0+IChcbiAgICBcbiAgICAgICAgPHNwYW4ga2V5ID17aX0gY2xhc3NOYW1lPVwiY2FyZHN0eWxlIGNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMyBtYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC1kYXJrIHNoYWRvdy1zbVwiID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWltZy1ib3hcIiBocmVmPXtwaG90by5faWR9ID5cbiAgICAgICAgICAgICAgICAgICAge2lzWm9vbT8oXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCB6b29tXCIgc3JjPXtwaG90by5pbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Bob3RvLmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPntwaG90by5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ub3JtYWxcIj57cGhvdG8uYXV0aG9yLnVzZXJuYW1lfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250LXdlaWdodC1ub3JtYWxcIj57cGhvdG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICB7IWlzWm9vbT8oXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBocmVmPXtwaG90by5faWQrJy9lZGl0J30gPkVkaXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICk6KDxzcGFuPjwvc3Bhbj4pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2FyZC1ib2R5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmRzdHlsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuY2FyZHN0eWxlLFxuICAgICAgICAgICAgYS5jYXJkc3R5bGU6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC1pbWctYm94e1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuem9vbSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yczsgLyogQW5pbWF0aW9uICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuem9vbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTsgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIFxuICAgIFxuKVxuZXhwb3J0IGRlZmF1bHQgQ2FyZCJdfQ== */\n/*@ sourceURL=/Users/jason/phototank/components/Card.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.6995192e868d986b9e7c.hot-update.js.map