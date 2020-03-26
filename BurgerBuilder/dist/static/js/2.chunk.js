(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Order/Order.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/lib??postcss!./src/components/Order/Order.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Order_Order_4yi4Z {\r\n\twidth: 80%;\r\n\tborder: 1px solid #ceee;\r\n\t-webkit-box-shadow: 0 2px 3px #ccc;\r\n\t        box-shadow: 0 2px 3px #ccc;\r\n\tpadding: 10px;\r\n\tmargin: 10px auto;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}", ""]);
// Exports
exports.locals = {
	"Order": "Order_Order_4yi4Z"
};
module.exports = exports;


/***/ }),

/***/ "./src/components/Order/Order.css":
/*!****************************************!*\
  !*** ./src/components/Order/Order.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Order.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Order/Order.css");
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
		module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Order.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Order/Order.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./Order.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Order/Order.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Order/Order.js":
/*!***************************************!*\
  !*** ./src/components/Order/Order.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.css */ "./src/components/Order/Order.css");
/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Order_css__WEBPACK_IMPORTED_MODULE_1__);




var order = function order(props) {
	var ingredients = [];

	for (var ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName]
		});
	}

	var ingredientOutput = ingredients.map(function (ig) {
		return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'span',
			{
				style: {
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border: '1px solid #ccc',
					padding: '5px'
				},
				key: ig.name },
			ig.name,
			' (',
			ig.amount,
			') '
		);
	});

	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		'div',
		{ className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.Order },
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'p',
			null,
			'Ingredients: ',
			ingredientOutput
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'p',
			null,
			'Price: ',
			react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'strong',
				null,
				'USD ',
				Number.parseFloat(props.price).toFixed(2)
			),
			' '
		)
	);
};

/* harmony default export */ __webpack_exports__["default"] = (order);

/***/ }),

/***/ "./src/containers/Orders/Orders.js":
/*!*****************************************!*\
  !*** ./src/containers/Orders/Orders.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Order/Order */ "./src/components/Order/Order.js");
/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../axios-orders */ "./src/axios-orders.js");
/* harmony import */ var _hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withErrorHandler/withErrorHandler */ "./src/hoc/withErrorHandler/withErrorHandler.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/index */ "./src/store/actions/index.js");
/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ "./src/components/UI/Spinner/Spinner.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Orders = function (_Component) {
	_inherits(Orders, _Component);

	function Orders() {
		_classCallCheck(this, Orders);

		return _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).apply(this, arguments));
	}

	_createClass(Orders, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onfetchOrders(this.props.token, this.props.userId);
		}
	}, {
		key: 'render',
		value: function render() {
			var orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null);

			if (!this.props.loading) {
				orders = this.props.orders.map(function (order) {
					return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Order_Order__WEBPACK_IMPORTED_MODULE_2__["default"], { key: order.id,
						ingredients: order.ingredients,
						price: order.price
					});
				});
			}
			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				null,
				orders
			);
		}
	}]);

	return Orders;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
	return {
		orders: state.order.orders,
		loading: state.order.loading,
		token: state.auth.token,
		userId: state.auth.userId
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onfetchOrders: function onfetchOrders(token, userId) {
			return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__["fetchOrders"](token, userId));
		}
	};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(Orders, _axios_orders__WEBPACK_IMPORTED_MODULE_3__["default"])));

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map