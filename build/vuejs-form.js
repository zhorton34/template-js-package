var vuejsform =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/helpers/accessor.js":
/*!**********************************!*\
  !*** ./dist/helpers/accessor.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Get value of a nested property\n *\n * @param form\n * @returns {*}\n */\n\nmodule.exports = function access(form) {\n  return new Proxy(form, {\n    get: function get(target, key) {\n      return Object.keys(target.data).includes(key) ? target.data[key] : target[key];\n    },\n    set: function set(target, key, value) {\n      target.data[key] = value;\n      return target.data[key] === value;\n    }\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/accessor.js?");

/***/ }),

/***/ "./dist/helpers/dataGet.js":
/*!*********************************!*\
  !*** ./dist/helpers/dataGet.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isObject = function isObject(check) {\n  return _typeof(check) === 'object' && Array.isArray(check) === false;\n};\n\nvar isArray = function isArray(check) {\n  return Array.isArray(check) === true;\n};\n/**\n * Get Nested Data With An Optional \"*\" wildcard\n */\n\n\nmodule.exports = function (target) {\n  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (path === '') {\n    return target;\n  }\n\n  path = Array.isArray(path) ? path : path.split('.');\n  return path.reduce(function (value, segment) {\n    if (segment === '*') {\n      if (isArray(value)) {\n        return value.reduce(function (list, item) {\n          return [].concat(_toConsumableArray(list), [item]);\n        }, []);\n      } else if (isObject(value)) {\n        return Object.values(value);\n      } else {\n        return value;\n      }\n    }\n\n    if (isArray(value)) {\n      return value.reduce(function (list, item) {\n        if (isObject(item)) {\n          return Object.keys(item).includes(segment) ? [].concat(_toConsumableArray(list), [item[segment]]) : _toConsumableArray(list);\n        } else if (!isObject(item) && isArray(item)) {\n          return [].concat(_toConsumableArray(list), [item[segment]]);\n        } else {\n          return [].concat(_toConsumableArray(list), [item]);\n        }\n      }, []);\n    }\n\n    if (isObject(value)) {\n      return value[segment];\n    }\n\n    return value[segment] || value || null;\n  }, target);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/dataGet.js?");

/***/ }),

/***/ "./dist/helpers/exists.js":
/*!********************************!*\
  !*** ./dist/helpers/exists.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Determine if a key value pair is missing\n *\n * @param value\n * @returns boolean\n */\n\nmodule.exports = function (value) {\n  return typeof value !== \"undefined\";\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/exists.js?");

/***/ }),

/***/ "./dist/helpers/isEmpty.js":
/*!*********************************!*\
  !*** ./dist/helpers/isEmpty.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Determine if a value is empty\n *\n * @param value\n * @returns boolean\n */\n\nmodule.exports = function (value) {\n  if (value === null || value === '') return true;\n  if (Array.isArray(value)) return value.length === 0;\n\n  for (var key in value) {\n    if (Object.keys(value, key)) return false;\n  }\n\n  return true;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/isEmpty.js?");

/***/ }),

/***/ "./dist/helpers/setKeys.js":
/*!*********************************!*\
  !*** ./dist/helpers/setKeys.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ./variadic.js */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function (form, keys) {\n  var properties = variadic(keys);\n  return properties.length > 0 ? {\n    has: function has() {\n      return properties;\n    }\n  } : {\n    has: function has() {\n      return form.keys();\n    }\n  };\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/setKeys.js?");

/***/ }),

/***/ "./dist/helpers/setkeys.js":
/*!*********************************!*\
  !*** ./dist/helpers/setkeys.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar variadic = __webpack_require__(/*! ./variadic.js */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function (form, keys) {\n  var properties = variadic(keys);\n  return properties.length > 0 ? {\n    has: function has() {\n      return properties;\n    }\n  } : {\n    has: function has() {\n      return form.keys();\n    }\n  };\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/setkeys.js?");

/***/ }),

/***/ "./dist/helpers/variadic.js":
/*!**********************************!*\
  !*** ./dist/helpers/variadic.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Variadic helper function\n *\n * @param args\n * @returns {*}\n */\n\nmodule.exports = function variadic(args) {\n  if (Array.isArray(args[0])) {\n    return args[0];\n  }\n\n  return args;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/helpers/variadic.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n'strict';\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction VueForm(input) {\n  if (input !== undefined && !Array.isArray(input) && _typeof(input) !== 'object') {\n    this.data = [input];\n  } else if (input instanceof this.constructor) {\n    this.data = input.all();\n  } else {\n    this.data = input || {};\n  }\n}\n\nVueForm.prototype.anyFilled = __webpack_require__(/*! ./methods/anyFilled */ \"./dist/methods/anyFilled.js\");\nVueForm.prototype.all = __webpack_require__(/*! ./methods/all */ \"./dist/methods/all.js\");\nVueForm.prototype[\"boolean\"] = __webpack_require__(/*! ./methods/boolean */ \"./dist/methods/boolean.js\");\nVueForm.prototype.empty = __webpack_require__(/*! ./methods/empty */ \"./dist/methods/empty.js\");\nVueForm.prototype.except = __webpack_require__(/*! ./methods/except */ \"./dist/methods/except.js\");\nVueForm.prototype.extend = __webpack_require__(/*! ./methods/extend */ \"./dist/methods/extend.js\");\nVueForm.prototype.fill = __webpack_require__(/*! ./methods/fill */ \"./dist/methods/fill.js\");\nVueForm.prototype.filled = __webpack_require__(/*! ./methods/filled */ \"./dist/methods/filled.js\");\nVueForm.prototype.forget = __webpack_require__(/*! ./methods/forget */ \"./dist/methods/forget.js\");\nVueForm.prototype.has = __webpack_require__(/*! ./methods/has */ \"./dist/methods/has.js\");\nVueForm.prototype.hasAny = __webpack_require__(/*! ./methods/hasAny */ \"./dist/methods/hasAny.js\");\nVueForm.prototype.input = __webpack_require__(/*! ./methods/input */ \"./dist/methods/input.js\");\nVueForm.prototype.keys = __webpack_require__(/*! ./methods/keys */ \"./dist/methods/keys.js\");\nVueForm.prototype.make = __webpack_require__(/*! ./methods/make */ \"./dist/methods/make.js\");\nVueForm.prototype.missing = __webpack_require__(/*! ./methods/missing */ \"./dist/methods/missing.js\");\nVueForm.prototype.only = __webpack_require__(/*! ./methods/only */ \"./dist/methods/only.js\");\nVueForm.prototype.set = __webpack_require__(/*! ./methods/set */ \"./dist/methods/set.js\");\nVueForm.prototype.toArray = __webpack_require__(/*! ./methods/toArray */ \"./dist/methods/toArray.js\");\nVueForm.prototype.wrap = __webpack_require__(/*! ./methods/wrap */ \"./dist/methods/wrap.js\");\n\nvar accessor = __webpack_require__(/*! ./helpers/accessor */ \"./dist/helpers/accessor.js\");\n\nvar form = function form(input) {\n  return accessor(new VueForm(input));\n};\n\nmodule.exports = form;\nmodule.exports.form = form;\nmodule.exports[\"default\"] = form;\nmodule.exports.VueForm = VueForm;\n\n//# sourceURL=webpack://vuejsform/./dist/index.js?");

/***/ }),

/***/ "./dist/methods/all.js":
/*!*****************************!*\
  !*** ./dist/methods/all.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function all() {\n  return this.data;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/all.js?");

/***/ }),

/***/ "./dist/methods/anyFilled.js":
/*!***********************************!*\
  !*** ./dist/methods/anyFilled.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty */ \"./dist/helpers/isEmpty.js\");\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys.js */ \"./dist/helpers/setKeys.js\");\n\nmodule.exports = function anyFilled() {\n  var _this = this;\n\n  var valueFilled = function valueFilled(key) {\n    return isEmpty(dataGet(_this.data, key)) === false;\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return setKeys(this, args).has().some(valueFilled);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/anyFilled.js?");

/***/ }),

/***/ "./dist/methods/boolean.js":
/*!*********************************!*\
  !*** ./dist/methods/boolean.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet.js */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function _boolean(property) {\n  var truthy = [1, \"1\", true, \"true\", \"on\", \"yes\"];\n  return truthy.includes(dataGet(this.data, property));\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/boolean.js?");

/***/ }),

/***/ "./dist/methods/empty.js":
/*!*******************************!*\
  !*** ./dist/methods/empty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty */ \"./dist/helpers/isEmpty.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys.js */ \"./dist/helpers/setKeys.js\");\n\nmodule.exports = function empty() {\n  var _this = this;\n\n  var emptyValue = function emptyValue(key) {\n    return isEmpty(dataGet(_this.data, key));\n  };\n\n  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {\n    properties[_key] = arguments[_key];\n  }\n\n  return setKeys(this, properties).has().some(emptyValue);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/empty.js?");

/***/ }),

/***/ "./dist/methods/except.js":
/*!********************************!*\
  !*** ./dist/methods/except.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic.js */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function except() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return Object.keys(this.data).filter(function (property) {\n    return !properties.includes(property);\n  }).reduce(function (only, field) {\n    return _objectSpread(_defineProperty({}, field, _this.data[field]), only);\n  }, {});\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/except.js?");

/***/ }),

/***/ "./dist/methods/extend.js":
/*!********************************!*\
  !*** ./dist/methods/extend.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function extend(method, callback) {\n  if (Object.keys(this).includes(method)) {\n    return console.error(\"Cant extend form with \".concat(method, \", it already exists\"));\n  }\n\n  this.constructor.prototype[name] = callback;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/extend.js?");

/***/ }),

/***/ "./dist/methods/fill.js":
/*!******************************!*\
  !*** ./dist/methods/fill.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function fill() {\n  var _this = this;\n\n  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  Object.entries(input).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    if (_this.empty(key)) {\n      _this.data[key] = value;\n    }\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/fill.js?");

/***/ }),

/***/ "./dist/methods/filled.js":
/*!********************************!*\
  !*** ./dist/methods/filled.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty */ \"./dist/helpers/isEmpty.js\");\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys */ \"./dist/helpers/setKeys.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function filled() {\n  var _this = this;\n\n  var valueFilled = function valueFilled(key) {\n    return isEmpty(dataGet(_this.data, key)) === false;\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return setKeys(this, args).has().every(valueFilled);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/filled.js?");

/***/ }),

/***/ "./dist/methods/forget.js":
/*!********************************!*\
  !*** ./dist/methods/forget.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys */ \"./dist/helpers/setKeys.js\");\n\nmodule.exports = function forget() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  setKeys(this, args).has().forEach(function (property) {\n    return delete _this.data[property];\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/forget.js?");

/***/ }),

/***/ "./dist/methods/has.js":
/*!*****************************!*\
  !*** ./dist/methods/has.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys */ \"./dist/helpers/setKeys.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function has() {\n  var _this = this;\n\n  var value = function value(key) {\n    return dataGet(_this.data, key);\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return setKeys(this, args).has().every(value);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/has.js?");

/***/ }),

/***/ "./dist/methods/hasAny.js":
/*!********************************!*\
  !*** ./dist/methods/hasAny.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar setKeys = __webpack_require__(/*! ../helpers/setkeys */ \"./dist/helpers/setkeys.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function hasAny() {\n  var _this = this;\n\n  var value = function value(key) {\n    return dataGet(_this.data, key);\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return setKeys(this, args).has().some(value);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/hasAny.js?");

/***/ }),

/***/ "./dist/methods/input.js":
/*!*******************************!*\
  !*** ./dist/methods/input.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmpty = __webpack_require__(/*! ../helpers/isEmpty.js */ \"./dist/helpers/isEmpty.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet.js */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function input(key) {\n  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var value = dataGet(this.data, key);\n  return isEmpty(value) ? defaultValue : value;\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/input.js?");

/***/ }),

/***/ "./dist/methods/keys.js":
/*!******************************!*\
  !*** ./dist/methods/keys.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function keys() {\n  return Object.keys(this.data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/keys.js?");

/***/ }),

/***/ "./dist/methods/make.js":
/*!******************************!*\
  !*** ./dist/methods/make.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar accessor = __webpack_require__(/*! ../helpers/accessor */ \"./dist/helpers/accessor.js\");\n\nmodule.exports = function make(input) {\n  return accessor(new this.constructor(input));\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/make.js?");

/***/ }),

/***/ "./dist/methods/missing.js":
/*!*********************************!*\
  !*** ./dist/methods/missing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar exists = __webpack_require__(/*! ../helpers/exists */ \"./dist/helpers/exists.js\");\n\nvar setKeys = __webpack_require__(/*! ../helpers/setKeys */ \"./dist/helpers/setKeys.js\");\n\nvar dataGet = __webpack_require__(/*! ../helpers/dataGet */ \"./dist/helpers/dataGet.js\");\n\nmodule.exports = function missing() {\n  var _this = this;\n\n  var missing = function missing(key) {\n    return !exists(dataGet(_this.data, key));\n  };\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return setKeys(this, args).has().some(missing);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/missing.js?");

/***/ }),

/***/ "./dist/methods/only.js":
/*!******************************!*\
  !*** ./dist/methods/only.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar variadic = __webpack_require__(/*! ../helpers/variadic */ \"./dist/helpers/variadic.js\");\n\nmodule.exports = function only() {\n  var _this = this;\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var properties = variadic(args);\n  return properties.reduce(function (only, field) {\n    return _objectSpread(_defineProperty({}, field, _this.data[field]), only);\n  }, {});\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/only.js?");

/***/ }),

/***/ "./dist/methods/set.js":
/*!*****************************!*\
  !*** ./dist/methods/set.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function set() {\n  var _this = this;\n\n  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  Object.entries(input).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    _this.data[key] = value;\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/set.js?");

/***/ }),

/***/ "./dist/methods/toArray.js":
/*!*********************************!*\
  !*** ./dist/methods/toArray.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function toArray() {\n  return Object.entries(this.data).map(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    return {\n      key: key,\n      value: value\n    };\n  });\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/toArray.js?");

/***/ }),

/***/ "./dist/methods/wrap.js":
/*!******************************!*\
  !*** ./dist/methods/wrap.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nmodule.exports = function wrap(key) {\n  return key.split('.').reverse().reduce(function (payload, property) {\n    return _defineProperty({}, property, _objectSpread({}, payload));\n  }, this.data);\n};\n\n//# sourceURL=webpack://vuejsform/./dist/methods/wrap.js?");

/***/ })

/******/ });