(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/UI/Input/Input.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/lib??postcss!./src/components/UI/Input/Input.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Input_Input_s67N0 {\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n.Input_Label__n-1m {\r\n\tfont-weight: bold;\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.Input_InputElement_2-aFx {\r\n\toutline: none;\r\n\tborder: 1px solid #ccc;\r\n\tbackground-color: white;\r\n\tfont: inherit;\r\n\tpadding: 6px 10px;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n.Input_InputElement_2-aFx:focus {\r\n\toutline: none;\r\n\tbackground-color: #ccc;\r\n}\r\n\r\n.Input_Invalid_1sl1p {\r\n\tborder: 1px solid red;\r\n\tbackground-color: #FDA49A;\r\n}\r\n\r\n.Input_ValidationError_1ElSg {\r\n\tcolor: red;\r\n\tmargin: 5px 0;\r\n}", ""]);
// Exports
exports.locals = {
	"Input": "Input_Input_s67N0",
	"Label": "Input_Label__n-1m",
	"InputElement": "Input_InputElement_2-aFx",
	"Invalid": "Input_Invalid_1sl1p",
	"ValidationError": "Input_ValidationError_1ElSg"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/containers/Auth/Auth.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/lib??postcss!./src/containers/Auth/Auth.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Auth_Auth_2YUr1 {\r\n\tmargin: 20px auto;\r\n\twidth: 80%;\r\n\ttext-align: center;\r\n\t-webkit-box-shadow: 0 2px 3px #ccc;\r\n\t        box-shadow: 0 2px 3px #ccc;\r\n\tborder: 1px solid #eee;\r\n\tpadding: 10px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n\r\n@media (min-width: 600px){\r\n\t.Auth_Auth_2YUr1 {\r\n\t\twidth: 500px;\r\n\t}\r\n\r\n}", ""]);
// Exports
exports.locals = {
	"Auth": "Auth_Auth_2YUr1"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/UI/Input/Input.css":
/*!*******************************************!*\
  !*** ./src/components/UI/Input/Input.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/lib??postcss!./Input.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/UI/Input/Input.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/lib??postcss!./Input.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/UI/Input/Input.css", function() {
			var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/postcss-loader/lib??postcss!./Input.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/UI/Input/Input.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/UI/Input/Input.js":
/*!******************************************!*\
  !*** ./src/components/UI/Input/Input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.css */ "./src/components/UI/Input/Input.css");
/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_css__WEBPACK_IMPORTED_MODULE_1__);




var input = function input(props) {

	var validationError = null;
	var inputElement = null;
	var inputClasses = [_Input_css__WEBPACK_IMPORTED_MODULE_1___default.a.InputElement];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(_Input_css__WEBPACK_IMPORTED_MODULE_1___default.a.Invalid);
		validationError = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'p',
			{ className: _Input_css__WEBPACK_IMPORTED_MODULE_1___default.a.ValidationError },
			props.errorMessage
		);
	}

	var inputClassesString = inputClasses.join(' ');

	switch (props.elementType) {
		case 'input':
			inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', Object.assign({
				className: inputClassesString
			}, props.elementConfig, {
				value: props.value,
				onChange: props.changed }));
			break;
		case 'textarea':
			inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', Object.assign({
				className: inputClassesString
			}, props.elementConfig, {
				value: props.value,
				onChange: props.changed }));
			break;
		case 'select':
			inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'select',
				{
					className: inputClassesString,
					value: props.value,
					onChange: props.changed },
				props.elementConfig.options.map(function (option) {
					return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						'option',
						{ key: option.value, value: option.value },
						option.displayValue
					);
				})
			);
			break;
		default:
			inputElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', Object.assign({
				className: inputClassesString
			}, props.elementConfig, {
				value: props.value }));
	}
	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		'div',
		{ className: _Input_css__WEBPACK_IMPORTED_MODULE_1___default.a.Input },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'label',
			{ className: _Input_css__WEBPACK_IMPORTED_MODULE_1___default.a.Label },
			props.label
		),
		inputElement,
		validationError
	);
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./src/containers/Auth/Auth.css":
/*!**************************************!*\
  !*** ./src/containers/Auth/Auth.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Auth.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/containers/Auth/Auth.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Auth.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/containers/Auth/Auth.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Auth.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/containers/Auth/Auth.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Auth/Auth.js":
/*!*************************************!*\
  !*** ./src/containers/Auth/Auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UI/Input/Input */ "./src/components/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/Button/Button */ "./src/components/UI/Button/Button.js");
/* harmony import */ var _Auth_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Auth.css */ "./src/containers/Auth/Auth.css");
/* harmony import */ var _Auth_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Auth_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/index */ "./src/store/actions/index.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/utility */ "./src/shared/utility.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Auth = function (_Component) {
	_inherits(Auth, _Component);

	function Auth() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Auth);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Auth.__proto__ || Object.getPrototypeOf(Auth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			controls: {
				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'Mail Address'
					},
					value: '',
					validation: {
						required: true,
						isEmail: true,
						touched: false
					},
					valid: false,
					touched: false,
					errorMessage: 'Please enter a non-empty name'
				},
				password: {
					elementType: 'input',
					elementConfig: {
						type: 'password',
						placeholder: 'Password'
					},
					value: '',
					validation: {
						required: true,
						minLength: 6
					},
					valid: false,
					touched: false,
					errorMessage: 'Please enter a non-empty name'
				}
			},
			isSignUp: true
		}, _this.inputChangedHandler = function (event, controlName) {

			var updateControls = Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["updateObject"])(_this.state.controls, _defineProperty({}, controlName, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["updateObject"])(_this.state.controls[controlName], {
				value: event.target.value,
				valid: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["checkValidity"])(event.target.value, _this.state.controls[controlName].validation),
				touched: true
			})));

			//two way binding
			_this.setState({ controls: updateControls });
		}, _this.submitHandler = function (event) {
			event.preventDefault();
			_this.props.onAuth(_this.state.controls.email.value, _this.state.controls.password.value, _this.state.isSignUp);
		}, _this.siwthAuthModeHandler = function () {
			_this.setState(function (prevState) {
				return { isSignUp: !prevState.isSignUp };
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Auth, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
				this.props.onSetAuthRedirectPath();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var fromElementsArray = [];

			for (var key in this.state.controls) {
				fromElementsArray.push({
					id: key,
					config: this.state.controls[key]
				});
			}

			var form = fromElementsArray.map(function (formElement) {
				return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
					key: formElement.id,
					elementType: formElement.config.elementType,
					elementConfig: formElement.config.elementConfig,
					value: formElement.config.value,
					invalid: !formElement.config.valid,
					shouldValidate: formElement.config.validation,
					touched: formElement.config.touched,
					errorMessage: formElement.config.errorMessage,
					changed: function changed(event) {
						return _this2.inputChangedHandler(event, formElement.id);
					}
				});
			});

			if (this.props.loading) {
				form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], null);
			}

			var errorMessage = null;

			if (this.props.error) {
				errorMessage = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'p',
					null,
					this.props.error.message
				);
			}

			var authRedirect = null;

			if (this.props.isAuth) {
				authRedirect = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], { to: this.props.authRedirectPath });
			}

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: _Auth_css__WEBPACK_IMPORTED_MODULE_5___default.a.Auth },
				authRedirect,
				errorMessage,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'form',
					{ onSubmit: this.submitHandler },
					form,
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
						_components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
						{ btnType: 'Success' },
						'SUBMIT'
					)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					_components_UI_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"],
					{
						clicked: this.siwthAuthModeHandler,
						btnType: 'Danger' },
					'SWITCH TO ',
					this.state.isSignUp ? "SIGNIN" : "SIGNUP"
				)
			);
		}
	}]);

	return Auth;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuth: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onAuth: function onAuth(email, password, isSignUp) {
			return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["auth"](email, password, isSignUp));
		},
		onSetAuthRedirectPath: function onSetAuthRedirectPath() {
			return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_6__["setAuthRedirectPath"]('/'));
		}
	};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Auth));

/***/ })

}]);
//# sourceMappingURL=1.chunk.js.map