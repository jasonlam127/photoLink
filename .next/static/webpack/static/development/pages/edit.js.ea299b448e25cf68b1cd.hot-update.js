webpackHotUpdate("static/development/pages/edit.js",{

/***/ "./pages/edit.js":
/*!***********************!*\
  !*** ./pages/edit.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      // Because we named the inputs to match their corresponding values in state, it's
      // super easy to update the state
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (e) {
      e.preventDefault(); // get our form data out of state

      var _this$state = _this.state,
          title = _this$state.title,
          img = _this$state.img,
          description = _this$state.description,
          list = _this$state.list,
          errorLabel = _this$state.errorLabel;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/' + _this.props.photo._id + '?_method=PUT', {
        title: title,
        img: img,
        description: description
      }).then(function (response) {
        var payload = "Upload Success"; //console.log(`response fetched. ${payload}`);

        _this.setState({
          title: "",
          description: "",
          img: "",
          errorLabelHidden: true,
          list: _this.state.list.concat([payload])
        }); //redirect back to homepage


        window.location = response.data;
      }).catch(function (error) {
        var payload = JSON.stringify(error, null, 2);
        console.log(error);

        _this.setState({
          errorLabelHidden: false,
          errorLabel: "OOPS that didn't work :(",
          list: _this.state.list.concat([payload])
        });
      });
    });

    _this.state = {
      title: _this.props.photo.name,
      description: _this.props.photo.description,
      img: _this.props.photo.image,
      errorLabel: "",
      errorLabelHidden: true,
      list: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          description = _this$state2.description,
          img = _this$state2.img,
          list = _this$state2.list,
          errorLabel = _this$state2.errorLabel;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "PhotoLink",
        user: this.props.user
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "jsx-992695396" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
        className: "jsx-992695396"
      }, "Edit photo"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-992695396" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        htmlFor: "title",
        className: "jsx-992695396"
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "text",
        id: "exampleTitle",
        placeholder: "Title",
        required: true,
        name: "title",
        value: title,
        onChange: this.onChange,
        className: "jsx-992695396" + " " + "form-control"
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-992695396" + " " + "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        htmlFor: "description",
        className: "jsx-992695396"
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "text",
        id: "exampleDiscription",
        placeholder: "(Optional)",
        name: "description",
        value: description,
        onChange: this.onChange,
        className: "jsx-992695396" + " " + "form-control"
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        htmlFor: "img",
        className: "jsx-992695396"
      }, "Your Photo URL"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-992695396" + " " + "input-group mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-992695396" + " " + "input-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        id: "basic-addon3",
        className: "jsx-992695396" + " " + "input-group-text"
      }, "https://example.com/img.jpg")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        type: "url",
        id: "basic-url",
        "aria-describedby": "basic-addon3",
        name: "img",
        value: img,
        onChange: this.onChange,
        className: "jsx-992695396" + " " + "form-control"
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-992695396"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        hidden: true,
        className: "jsx-992695396"
      }, errorLabel)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        type: "submit",
        className: "jsx-992695396" + " " + "btn btn-primary"
      }, "Submit")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "992695396",
        css: "form.jsx-992695396{margin:auto;padding:0 2em;}.btn-primary.jsx-992695396{margin-top:1.5em;}h4.jsx-992695396{margin-top:1em;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvcGFnZXMvZWRpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRjRCLEFBR29DLEFBSUssQUFHRixZQU5ELEdBT0ksRUFIckIsU0FIQSxPQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9waG90b3RhbmsvcGFnZXMvZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy5waG90by5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMucHJvcHMucGhvdG8uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpbWc6IHRoaXMucHJvcHMucGhvdG8uaW1hZ2UsXG4gICAgICAgICAgICBlcnJvckxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgZXJyb3JMYWJlbEhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgIGxpc3Q6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyB1c2VyICxwaG90b30gfSkge1xuICAgICAgICByZXR1cm4ge3VzZXI6dXNlciAscGhvdG86cGhvdG99XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAvLyBCZWNhdXNlIHdlIG5hbWVkIHRoZSBpbnB1dHMgdG8gbWF0Y2ggdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZXMgaW4gc3RhdGUsIGl0J3NcbiAgICAgICAgLy8gc3VwZXIgZWFzeSB0byB1cGRhdGUgdGhlIHN0YXRlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ2V0IG91ciBmb3JtIGRhdGEgb3V0IG9mIHN0YXRlXG4gICAgICAgIGNvbnN0IHt0aXRsZSxpbWcsZGVzY3JpcHRpb24sIGxpc3QsIGVycm9yTGFiZWx9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBheGlvcy5wb3N0KCcvJyt0aGlzLnByb3BzLnBob3RvLl9pZCsnP19tZXRob2Q9UFVUJywge3RpdGxlOiB0aXRsZSxpbWc6IGltZyxkZXNjcmlwdGlvbjogZGVzY3JpcHRpb259KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBcIlVwbG9hZCBTdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgcmVzcG9uc2UgZmV0Y2hlZC4gJHtwYXlsb2FkfWApO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGltZzogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbEhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogdGhpcy5zdGF0ZS5saXN0LmNvbmNhdChbcGF5bG9hZF0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWVwYWdlXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwgMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsSGlkZGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMYWJlbDogXCJPT1BTIHRoYXQgZGlkbid0IHdvcmsgOihcIixcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogdGhpcy5zdGF0ZS5saXN0LmNvbmNhdChbcGF5bG9hZF0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7dGl0bGUsZGVzY3JpcHRpb24saW1nLCBsaXN0LCBlcnJvckxhYmVsfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGUgPSAnUGhvdG9MaW5rJyB1c2VyID0ge3RoaXMucHJvcHMudXNlcn0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGg0PkVkaXQgcGhvdG88L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlcXVpcmVkIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZURpc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCIoT3B0aW9uYWwpXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltZ1wiPllvdXIgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYmFzaWMtYWRkb24zXCI+aHR0cHM6Ly9leGFtcGxlLmNvbS9pbWcuanBnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYmFzaWMtdXJsXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uM1wiIG5hbWU9XCJpbWdcIiB2YWx1ZT17aW1nfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIGhpZGRlbj57ZXJyb3JMYWJlbH08L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcblxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/jason/phototank/pages/edit.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var _ref$query, user, photo;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$query = _ref.query, user = _ref$query.user, photo = _ref$query.photo;
                return _context.abrupt("return", {
                  user: user,
                  photo: photo
                });

              case 2:
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
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/edit")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=edit.js.ea299b448e25cf68b1cd.hot-update.js.map