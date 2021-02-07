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

/***/ "./components/ScheduledComp.js":
/*!*************************************!*\
  !*** ./components/ScheduledComp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var _jsxFileName = "C:\\Users\\rozit\\Desktop\\Tomi\\Programoz\xE1s\\ProShopTennis\\frontend\\components\\ScheduledComp.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  query GET_ENTRANTS_QUERY($id: ID!) {\n    entrants(where: { scheduledComps_every: {id: $id} }) {\n      phonenumber\n      email\n      name\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation ADD_ENTRANT_MUTATION(\n    $id: ID!\n    $entrant: String!\n    $phonenumber: String!\n    $email: String!\n    ) {\n    updateScheduledComp(\n      id: $id\n      entrant: $entrant \n      phonenumber: $phonenumber\n      email: $email\n\n      ) {\n      id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_SCHEDULED_QUERY($id: ID!) {\n    scheduledComp(where: { id: $id }) {\n      id\n      type\n      date\n      place\n      start\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SingleCompetitionStyles = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ScheduledComp__SingleCompetitionStyles",
  componentId: "sc-1bbxtt4-0"
})(["h6{font-size:1.6rem;margin-bottom:10px;margin-top:10px;}ul{list-style-type:none;}form{background-color:hsla(207,20%,91%,1);padding:25px;width:400px;margin-left:80px;}form.h2{margin-top:0px;}.login{background-color:hsla(207,20%,91%,1);padding:25px;width:400px;margin-left:80px;}.login.h6{font-size:1.2rem;}.details{display:grid;grid-template-columns:100px 200px;grid-row-gap:20px;align-items:center;padding-left:15px;line-height:2.6;}a{background:rgb(64,126,147);color:white;border:0;display:block;margin:0 auto;text-align:center;width:150px;font-size:1.6rem;font-weight:600;padding:0.5rem 1.2rem;}input{margin-left:20px;min-width:200px;}.entrants{display:flex;}.registered{margin-left:20px;background-color:hsla(207,20%,91%,1);padding:25px;}button{max-width:70px;font-size:1.5rem;color:white;background-color:", ";padding:5px;grid-column:1 / 3;justify-self:center;}"], function (props) {
  return props.theme.green;
});
var SINGLE_SCHEDULED_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var ADD_ENTRANT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var GET_ENTRANTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());

var ScheduledComp = /*#__PURE__*/function (_Component) {
  _inherits(ScheduledComp, _Component);

  var _super = _createSuper(ScheduledComp);

  function ScheduledComp() {
    var _this;

    _classCallCheck(this, ScheduledComp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      entrant: '',
      phonenumber: '',
      email: '',
      id: _this.props.id
    });

    _defineProperty(_assertThisInitialized(_this), "cancelCourse", function () {
      document.getElementById("register_form").reset();
    });

    _defineProperty(_assertThisInitialized(_this), "saveToState", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    return _this;
  }

  _createClass(ScheduledComp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 7
        }
      }, function (_ref) {
        var me = _ref.data.me;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
          query: SINGLE_SCHEDULED_QUERY,
          variables: {
            id: _this2.state.id
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 9
          }
        }, function (_ref2) {
          var error = _ref2.error,
              loading = _ref2.loading,
              data = _ref2.data;
          console.log(data);
          if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Error, {
            error: error,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 31
            }
          });
          if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 33
            }
          }, "Loading...");
          if (!data.scheduledComp) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 45
            }
          }, "No Item Found for ", _this2.props.id);
          var scheduledComp = data.scheduledComp;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleCompetitionStyles, {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 19
            }
          }, scheduledComp.date, ": ", scheduledComp.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 19
            }
          }, "Helysz\xEDn: ", scheduledComp.place), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 19
            }
          }, "Kezd\xE9s: ", scheduledComp.start), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "entrants",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "registered",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 19
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 21
            }
          }, "Eddigi nevez\u0151k:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
            query: GET_ENTRANTS_QUERY,
            variables: {
              id: _this2.state.id
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }
          }, function (_ref3) {
            var error = _ref3.error,
                loading = _ref3.loading,
                data = _ref3.data;
            if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 43
              }
            }, "Error: ", error.message);
            if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 45
              }
            }, "Loading...");
            if (!data.entrants) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 52
              }
            }, "M\xE9g nincsenek nevez\u0151k");
            console.log(data.entrants);
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 25
              }
            }, data.entrants.map(function (entrant, index) {
              console.log(entrant);
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 33
                }
              }, index + 1, ". ", entrant.name);
            }));
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
            mutation: ADD_ENTRANT_MUTATION,
            variables: _this2.state,
            refetchQueries: [{
              query: GET_ENTRANTS_QUERY,
              variables: {
                id: _this2.state.id
              }
            }],
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 21
            }
          }, function (updateScheduledComp, _ref4) {
            var loading = _ref4.loading,
                error = _ref4.error;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 21
              }
            }, me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
              id: "register_form",
              onSubmit: /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                  var res;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // Stop the form from submitting
                          e.preventDefault(); // call the mutation

                          _context.next = 3;
                          return updateScheduledComp();

                        case 3:
                          res = _context.sent;
                          // change them to the single item page
                          console.log(res);

                          _this2.cancelCourse();

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref5.apply(this, arguments);
                };
              }(),
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 21
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 23
              }
            }, "Nevez\xE9s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "details",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 23
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              for: "name",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 25
              }
            }, "N\xE9v:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              name: "entrant",
              placeholder: "N\xE9v",
              onChange: _this2.saveToState,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 39
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              for: "name",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 25
              }
            }, "Telefonsz\xE1m:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "text",
              name: "phonenumber",
              placeholder: "+36-20-123-45-67",
              onChange: _this2.saveToState,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 39
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
              for: "email",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 25
              }
            }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
              type: "email",
              name: "email",
              placeholder: "Email",
              onChange: _this2.saveToState,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 39
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
              type: "submit",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 25
              }
            }, "Nevez\xE9s"))), !me && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              className: "login",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 25
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 27
              }
            }, "A nevez\xE9shez k\xE9rj\xFCk jelentkezzen be!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: "/login",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 27
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 29
              }
            }, "Bejelentkez\xE9s"))));
          })));
        });
      });
    }
  }]);

  return ScheduledComp;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ScheduledComp);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\rozit\\Desktop\\Tomi\\Programoz\xE1s\\ProShopTennis\\frontend\\components\\User.js";



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./pages/scheduled.js":
/*!****************************!*\
  !*** ./pages/scheduled.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ScheduledComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ScheduledComp */ "./components/ScheduledComp.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\rozit\\Desktop\\Tomi\\Programoz\xE1s\\ProShopTennis\\frontend\\pages\\scheduled.js";




var Scheduled = function Scheduled(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ScheduledComp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: props.query.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scheduled);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/scheduled.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/scheduled.js */"./pages/scheduled.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=scheduled.js.map