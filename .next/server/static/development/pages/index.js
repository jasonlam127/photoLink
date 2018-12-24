module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
    integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    integrity: "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
    type: "text/javascript",
    async: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header(_ref) {
  var title = _ref.title,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-352069347"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-352069347"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
    crossOrigin: "anonymous",
    className: "jsx-352069347"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-352069347" + " " + "navbar navbar-expand navbar-dark bg-dark"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-352069347" + " " + "navbar-brand"
  }, "PhotoLink"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-352069347" + " " + "navbar-collapse collapse"
  }, !user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-352069347" + " " + "navbar-nav ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-352069347" + " " + "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/login",
    className: "jsx-352069347" + " " + "nav-link"
  }, "Log In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-352069347" + " " + "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/signup",
    className: "jsx-352069347" + " " + "nav-link btn btn-info"
  }, "Sign Up"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-352069347" + " " + "navbar-nav ml-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-352069347" + " " + "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-352069347" + " " + "nav-link "
  }, user.username)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-352069347" + " " + "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/logout",
    className: "jsx-352069347" + " " + "nav-link btn btn-info"
  }, "Logout"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "352069347",
    css: "a.jsx-352069347{color:white !important;}.navbar.jsx-352069347{z-index:= 2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUd3QyxBQUdaLFlBQ2YsV0FIQSIsImZpbGUiOiIvVXNlcnMvamFzb24vcGhvdG90YW5rL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNvbnN0IEhlYWRlciA9ICh7dGl0bGUsIHVzZXIgfSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtTUN3OTgvU0ZuR0U4ZkpUM0dYd0VPbmdzVjdadDI3TlhGb2FvQXBtWW04MWl1WG9Qa0ZPSndKOEVSZGtuTFBNT1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5QaG90b0xpbms8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7IXVzZXI/KFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9naW5cIj5Mb2cgSW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJ0bi1pbmZvXCIgaHJlZj1cIi9zaWdudXBcIj5TaWduIFVwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCIgaHJlZj1cIi9cIj57dXNlci51c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJ0bi1pbmZvXCIgaHJlZj1cIi9sb2dvdXRcIj5Mb2dvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFye1xuICAgICAgICAgICAgICAgIHotaW5kZXggPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/Users/jason/phototank/components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");




var Layout = function Layout(_ref) {
  var children = _ref.children,
      user = _ref.user,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    user: user
  }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SlideShow.js":
/*!*********************************!*\
  !*** ./components/SlideShow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var SlideShow = function SlideShow() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2428142392"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2428142392" + " " + "jumbotron jumbotron-fluid slideshow"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2428142392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2428142392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2428142392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2428142392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-2428142392"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2428142392" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2428142392" + " " + "display-5"
  }, "Welcome to PhotoLink!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2428142392" + " " + "lead"
  }, "Connect with other people and share your beautiful photos with the world"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/submit",
    role: "button",
    className: "jsx-2428142392" + " " + "btn btn-info startShare"
  }, "Start Share"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2428142392",
    css: ".jumbotron.jsx-2428142392{background-color:#000;background-size:cover;padding-top:10%;padding-bottom:10%;margin-bottom:0rem !important;z-index:0;position:relative;overflow:hidden;}.display-5.jsx-2428142392,.lead.jsx-2428142392,.startShare.jsx-2428142392{color:white;z-index:1;position:relative;}.slideshow.jsx-2428142392 li.jsx-2428142392{width:100%;height:100%;position:absolute;top:0;left:0;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;opacity:0;z-index:0;-webkit-animation:imageAnimation-jsx-2428142392 25s linear infinite;animation:imageAnimation-jsx-2428142392 25s linear infinite;}.slideshow.jsx-2428142392 li.jsx-2428142392:nth-child(1){background-image:url(\"/static/bg1.jpg\");}.slideshow.jsx-2428142392 li.jsx-2428142392:nth-child(2){background-image:url(\"/static/bg2.jpg\");-webkit-animation-delay:5s;animation-delay:5s;}.slideshow.jsx-2428142392 li.jsx-2428142392:nth-child(3){background-image:url(\"/static/bg3.jpg\");-webkit-animation-delay:10s;animation-delay:10s;}.slideshow.jsx-2428142392 li.jsx-2428142392:nth-child(4){background-image:url(\"/static/bg4.jpg\");-webkit-animation-delay:15s;animation-delay:15s;}.slideshow.jsx-2428142392 li.jsx-2428142392:nth-child(5){background-image:url(\"/static/bg5.jpg\");-webkit-animation-delay:20s;animation-delay:20s;}@-webkit-keyframes imageAnimation-jsx-2428142392{0%{opacity:0;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}10%{opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}20%{opacity:1;}30%{opacity:0;}}@keyframes imageAnimation-jsx-2428142392{0%{opacity:0;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}10%{opacity:1;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}20%{opacity:1;}30%{opacity:0;}}.no-cssanimations.jsx-2428142392 .slideshow.jsx-2428142392 li.jsx-2428142392{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvY29tcG9uZW50cy9TbGlkZVNob3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUd1QyxBQVVYLEFBS0EsQUFjeUIsQUFHQSxBQUlBLEFBSUEsQUFJQSxBQUt0QixBQUlBLEFBS2YsQUFHQSxBQUlXLFVBZjRCLEFBSUMsQUFJdkMsQUFHQSxBQUtKLENBbERnQixDQUxELFVBVlcsQUFXSixDQUtBLGlCQUp0QixBQWlCQSxBQUdtQixBQUlDLEFBSUEsQUFJQSxDQTNCVixHQWhCVSxHQWlCVCxPQUVlLE1BbEJILGdCQW1CUyxHQWxCRSxPQThCbEMsQUFpQkksRUFiSixBQUlBLEFBSUEsQUFTSSxnQkFoQzRCLEtBbEJqQixVQUNNLGFBa0JQLEtBakJNLEtBa0JOLFVBQ21DLENBbEJqRCwrSEFtQkEiLCJmaWxlIjoiL1VzZXJzL2phc29uL3Bob3RvdGFuay9jb21wb25lbnRzL1NsaWRlU2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBTbGlkZVNob3cgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uLWZsdWlkIHNsaWRlc2hvd1wiPlxuICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRpc3BsYXktNVwiPldlbGNvbWUgdG8gUGhvdG9MaW5rITwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPkNvbm5lY3Qgd2l0aCBvdGhlciBwZW9wbGUgYW5kIHNoYXJlIHlvdXIgYmVhdXRpZnVsIHBob3RvcyB3aXRoIHRoZSB3b3JsZDwvcD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gc3RhcnRTaGFyZVwiIGhyZWYgPSAnL3N1Ym1pdCdyb2xlPVwiYnV0dG9uXCI+U3RhcnQgU2hhcmU8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmp1bWJvdHJvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7IFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDAgO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlzcGxheS01ICwgLmxlYWQgLCAuc3RhcnRTaGFyZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEgO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZXNob3cgbGkgeyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGltYWdlQW5pbWF0aW9uIDI1cyBsaW5lYXIgaW5maW5pdGU7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlc2hvdyBsaTpudGgtY2hpbGQoMSkgeyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvYmcxLmpwZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDIpIHsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2JnMi5qcGdcIik7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDVzOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZXNob3cgbGk6bnRoLWNoaWxkKDMpIHsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2JnMy5qcGdcIik7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEwczsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2xpZGVzaG93IGxpOm50aC1jaGlsZCg0KSB7IFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9iZzQuanBnXCIpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlc2hvdyBsaTpudGgtY2hpbGQoNSkgeyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvYmc1LmpwZ1wiKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMjBzOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgaW1hZ2VBbmltYXRpb24geyBcbiAgICAgICAgICAgICAgICAwJSB7IFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwOyBcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzAlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIE9sZGVyIGJyb3dzZXIgc3VwcG9ydCAtIC5uby1jc3NhbmltYXRpb25zIGNsYXNzIGFkZGVkIGJ5IG1vZGVybml6ciAqL1xuICAgICAgICAgICAgLm5vLWNzc2FuaW1hdGlvbnMgLnNsaWRlc2hvdyBsaSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5leHBvcnQgZGVmYXVsdCBTbGlkZVNob3ciXX0= */\n/*@ sourceURL=/Users/jason/phototank/components/SlideShow.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideShow);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SlideShow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SlideShow.js */ "./components/SlideShow.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card.js */ "./components/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      //console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "PhotoLink",
        user: this.props.user
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SlideShow_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-3421119047" + " " + "containerButton btn-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-3421119047" + " " + "uploadButton ml-3"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/submit",
        className: "jsx-3421119047" + " " + "btn btn-info"
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-3421119047" + " " + "dropdown mb-2 ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "button",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        className: "jsx-3421119047" + " " + "btn btn-secondary dropdown-toggle"
      }, "Sort By:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        "aria-labelledby": "dropdownMenuButton",
        className: "jsx-3421119047" + " " + "dropdown-menu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "jsx-3421119047" + " " + "dropdown-item"
      }, "Most View"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "jsx-3421119047" + " " + "dropdown-item"
      }, "Most Likes"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "jsx-3421119047" + " " + "dropdown-item"
      }, "Most Recent")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-3421119047" + " " + "containerGrid"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-3421119047" + " " + "row "
      }, this.props.data.map(function (photo, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          photo: photo,
          isZoom: 1
        });
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3421119047",
        css: "body.jsx-3421119047{background:#f9f9f9 !important;}.containerGrid.jsx-3421119047{width:98%;margin-left:auto;margin-right:auto;padding:1em;padding-top:0em;}.containerButton.jsx-3421119047{width:98%;margin-left:auto;margin-right:auto;padding-top:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUQ0QixBQUl1RCxBQUlyQixBQVFBLFVBUE8sQUFRQSxpQkFQQyxBQVFBLEdBYnJCLGVBTWdCLEFBUUksWUFQQSxJQVFwQixZQVBBIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9waG90b3RhbmsvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVTaG93IGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVTaG93LmpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHVzZXIgfSB9KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codXNlcik7XG4gICAgICAgIGNvbnN0IHJlc3ggPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dldFBob3RvcycpXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN4Lmpzb24oKVxuICAgICAgICByZXR1cm4geyBkYXRhOiBqc29uLmQgLHVzZXI6dXNlcn1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZSA9ICdQaG90b0xpbmsnIHVzZXIgPSB7dGhpcy5wcm9wcy51c2VyfSA+XG5cbiAgICAgICAgICAgICAgICA8U2xpZGVTaG93IC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckJ1dHRvbiBidG4tZ3JvdXBcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZEJ1dHRvbiBtbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBocmVmPVwiL3N1Ym1pdFwiPlN1Ym1pdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBtYi0yIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29ydCBCeTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+TW9zdCBWaWV3PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPk1vc3QgTGlrZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+TW9zdCBSZWNlbnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCgocGhvdG8saSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IHBob3RvID0ge3Bob3RvfSBpc1pvb20gPSB7MX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lckdyaWR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5OCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDphdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyQnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6OTglO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/Users/jason/phototank/pages/index.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var user, resx, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _ref.query.user;
                _context.next = 3;
                return fetch('http://localhost:3000/getPhotos');

              case 3:
                resx = _context.sent;
                _context.next = 6;
                return resx.json();

              case 6:
                json = _context.sent;
                return _context.abrupt("return", {
                  data: json.d,
                  user: user
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map