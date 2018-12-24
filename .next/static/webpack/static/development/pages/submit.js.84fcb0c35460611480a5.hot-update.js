webpackHotUpdate("static/development/pages/submit.js",{

/***/ "./pages/submit.js":
/*!*************************!*\
  !*** ./pages/submit.js ***!
  \*************************/
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
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:3000/', {
        title: title,
        img: img,
        description: description
      }).then(function (response) {
        //access the resp here....
        console.log('response' + response.data); //var payload = JSON.stringify(response, null, 2);

        var payload = "Upload Success";
        console.log("response fetched. ".concat(payload));

        _this.setState({
          title: "",
          description: "",
          img: "",
          errorLabelHidden: true,
          list: _this.state.list.concat([payload])
        }); //redirect back to new photo


        window.location = response.data; //const href = '/'
        //router.push(href)
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
      title: "",
      description: "",
      img: "",
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
      }, "Submit a photo"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
        css: "form.jsx-992695396{margin:auto;padding:0 2em;}.btn-primary.jsx-992695396{margin-top:1.5em;}h4.jsx-992695396{margin-top:1em;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9waG90b3RhbmsvcGFnZXMvc3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HNEIsQUFHb0MsQUFJSyxBQUdGLFlBTkQsR0FPSSxFQUhyQixTQUhBLE9BT0EiLCJmaWxlIjoiL1VzZXJzL2phc29uL3Bob3RvdGFuay9wYWdlcy9zdWJtaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgIGltZzogXCJcIixcbiAgICAgICAgICAgIGVycm9yTGFiZWw6IFwiXCIsXG4gICAgICAgICAgICBlcnJvckxhYmVsSGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgbGlzdDogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IHVzZXIgfSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICByZXR1cm4ge3VzZXI6dXNlcn1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIC8vIEJlY2F1c2Ugd2UgbmFtZWQgdGhlIGlucHV0cyB0byBtYXRjaCB0aGVpciBjb3JyZXNwb25kaW5nIHZhbHVlcyBpbiBzdGF0ZSwgaXQnc1xuICAgICAgICAvLyBzdXBlciBlYXN5IHRvIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuXG4gICAgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGdldCBvdXIgZm9ybSBkYXRhIG91dCBvZiBzdGF0ZVxuICAgICAgICBjb25zdCB7dGl0bGUsaW1nLGRlc2NyaXB0aW9uLCBsaXN0LCBlcnJvckxhYmVsfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsIHt0aXRsZTogdGl0bGUsaW1nOiBpbWcsZGVzY3JpcHRpb246IGRlc2NyaXB0aW9ufSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vYWNjZXNzIHRoZSByZXNwIGhlcmUuLi4uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJysgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAvL3ZhciBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpO1xuICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gXCJVcGxvYWQgU3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZXNwb25zZSBmZXRjaGVkLiAke3BheWxvYWR9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsSGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLnN0YXRlLmxpc3QuY29uY2F0KFtwYXlsb2FkXSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBuZXcgcGhvdG9cbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgaHJlZiA9ICcvJ1xuICAgICAgICAgICAgICAgIC8vcm91dGVyLnB1c2goaHJlZilcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KGVycm9yLCBudWxsLCAyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGFiZWxIaWRkZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvckxhYmVsOiBcIk9PUFMgdGhhdCBkaWRuJ3Qgd29yayA6KFwiLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLnN0YXRlLmxpc3QuY29uY2F0KFtwYXlsb2FkXSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHt0aXRsZSxkZXNjcmlwdGlvbixpbWcsIGxpc3QsIGVycm9yTGFiZWx9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZSA9ICdQaG90b0xpbmsnIHVzZXIgPSB7dGhpcy5wcm9wcy51c2VyfT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXJcIiBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aDQ+U3VibWl0IGEgcGhvdG88L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHJlcXVpcmVkIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aXRsZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZURpc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCIoT3B0aW9uYWwpXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltZ1wiPllvdXIgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYmFzaWMtYWRkb24zXCI+aHR0cHM6Ly9leGFtcGxlLmNvbS9pbWcuanBnPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYmFzaWMtdXJsXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uM1wiIG5hbWU9XCJpbWdcIiB2YWx1ZT17aW1nfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzcGFuIGhpZGRlbj57ZXJyb3JMYWJlbH08L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBmb3Jte1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4tcHJpbWFyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcblxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/jason/phototank/pages/submit.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = _ref.query.user;
                console.log(user);
                return _context.abrupt("return", {
                  user: user
                });

              case 3:
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/submit")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=submit.js.84fcb0c35460611480a5.hot-update.js.map