webpackHotUpdate_N_E("pages/main",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\node-bird\\react-nodebird\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();













var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      searchInput = _useInput2[0],
      onChangeSearchInput = _useInput2[1];

  var onSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/hashtag/".concat(searchInput));
  }, [searchInput]);

  var toTop = function toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]
    });
  }, [_reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_OUT_REQUEST"]]);

  var menu = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
        onClick: onLogOut,
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      style: {
        marginLeft: "15%",
        marginRight: "15%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 3,
        sm: 4,
        md: 0,
        style: {
          height: "100%",
          position: "fixed",
          borderRight: "solid thin #e2e2e2",
          zIndex: "2"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "twitter.png",
              width: "50px",
              height: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px",
                fontWeight: "100"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SearchOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C",
                fontSize: "23px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              style: {
                color: "white",
                fontSize: "23px",
                backgroundColor: "green"
              },
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 136
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 4,
        offset: 2,
        style: {
          position: "fixed"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "circle",
            style: {
              display: "block",
              margin: "10px 5px",
              height: "50px",
              width: "50px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("img", {
              src: "twitter.png",
              width: "50px",
              height: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 136
            }, _this),
            onClick: toTop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["HomeOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 136
            }, _this),
            children: "\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GlobalOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 136
            }, _this),
            children: "\xA0Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SendOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 136
            }, _this),
            children: "\xA0Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["StarOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 136
            }, _this),
            children: "\xA0Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["UserOutlined"], {
              style: {
                color: "#2C2C2C"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 136
            }, _this),
            children: "\xA0Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
          overlay: menu,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            type: "text",
            shape: "round",
            style: {
              display: "block",
              margin: "10px 0",
              height: "50px",
              fontSize: "20px"
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
              children: me.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 136
            }, _this),
            children: ["\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              style: {
                display: "inline-block"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("p", {
                style: {
                  fontSize: "18px"
                },
                children: ["\xA0\xA0", me.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 66
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 21,
        sm: 0,
        md: 0,
        style: {
          marginLeft: "12.5%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "100%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px"
            },
            children: "\xA0\xA0\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 20,
        md: 0,
        offset: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "100%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px"
            },
            children: "\xA0\xA0\xA0Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px",
            zIndex: "-1"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            top: "0",
            position: "fixed",
            width: "50%",
            borderBottom: "solid thin #e2e2e2",
            backgroundColor: "white",
            zIndex: "1",
            cursor: "pointer"
          },
          onClick: toTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
            style: {
              fontSize: "25px",
              marginLeft: "15px"
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            marginTop: "50px"
          },
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 0,
        sm: 0,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
          placeholder: "\uAC80\uC0C9",
          onSearch: onSearch,
          style: {
            marginTop: "10px",
            marginLeft: "10px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(AppLayout, "72AMlNUj1LYc+gBJ5uqdnrHQj0Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0Iiwic2VhcmNoSW5wdXQiLCJvbkNoYW5nZVNlYXJjaElucHV0Iiwib25TZWFyY2giLCJ1c2VDYWxsYmFjayIsIlJvdXRlciIsInB1c2giLCJ0b1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25Mb2dPdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibWVudSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm9yZGVyUmlnaHQiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWFyZ2luIiwid2lkdGgiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm5pY2tuYW1lIiwiZW1haWwiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUM5QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUQ4QixxQkFFZkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUZJO0FBQUEsTUFFdEJDLEVBRnNCLGdCQUV0QkEsRUFG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QytCLHFCQUFTLEVBQUUsTUFBWjtBQUFvQmpCLHNCQUFVLEVBQUU7QUFBaEM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0VILENBOUZEOztHQUFNekIsUztVQUNlRyx1RCxFQUNGQyx1RCxFQUM0QkksdUQ7OztLQUh6Q1IsUztBQWdHTkEsU0FBUyxDQUFDMkMsU0FBVixHQUFzQjtBQUNsQjFDLFVBQVEsRUFBRTJDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUCxDQUF0QjtBQUllOUMsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi4xM2Y5MmU2NzIwOWI2NTZmMmE2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBSb3csIENvbCwgQnV0dG9uLCBBdmF0YXIsIERyb3Bkb3duIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBTdGFyT3V0bGluZWQsIFNlbmRPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBHbG9iYWxPdXRsaW5lZCwgSG9tZU91dGxpbmVkLCBTZWFyY2hPdXRsaW5lZCwgQ29uc29sZVNxbE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIG9uQ2hhbmdlU2VhcmNoSW5wdXRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pO1xyXG5cclxuICAgIGNvbnN0IHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOjAsIGxlZnQ6MCwgYmVoYXZpb3I6J2F1dG8nfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LCBbTE9HX09VVF9SRVFVRVNUXSk7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IChcclxuICAgICAgICA8TWVudT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17b25Mb2dPdXR9PkxvZyBvdXQ8L2E+IFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjE1JVwiLCBtYXJnaW5SaWdodDpcIjE1JVwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17M30gc209ezR9IG1kPXswfSBzdHlsZT17e2hlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIGJvcmRlclJpZ2h0OiBcInNvbGlkIHRoaW4gI2UyZTJlMlwiLCB6SW5kZXg6IFwiMlwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8aW1nIHNyYz1cInR3aXR0ZXIucG5nXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiLz59IG9uQ2xpY2s9e3RvVG9wfT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PEhvbWVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwiLCBmb250V2VpZ2h0OiBcIjEwMFwifX0vPn0gb25DbGljaz17dG9Ub3B9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8U2VhcmNoT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8U2VuZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wiLCBmb250U2l6ZTogXCIyM3B4XCJ9fS8+fT48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cImNpcmNsZVwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCA1cHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgd2lkdGg6IFwiNTBweFwifX0gaWNvbj17PFN0YXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIiwgZm9udFNpemU6IFwiMjNweFwifX0vPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxVc2VyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCIsIGZvbnRTaXplOiBcIjIzcHhcIn19Lz59PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwiY2lyY2xlXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDVweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCB3aWR0aDogXCI1MHB4XCJ9fSBpY29uPXs8QXZhdGFyIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMjNweFwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJncmVlblwifX0+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17NH0gb2Zmc2V0PXsyfSBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJjaXJjbGVcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggNXB4XCIsIGhlaWdodDogXCI1MHB4XCIsIHdpZHRoOiBcIjUwcHhcIn19IGljb249ezxpbWcgc3JjPVwidHdpdHRlci5wbmdcIiB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIvPn0gb25DbGljaz17dG9Ub3B9PjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8SG9tZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6IFwiIzJDMkMyQ1wifX0vPn0+Jm5ic3A7SG9tZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtFeHBsb3JlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTZW5kT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtNZXNzYWdlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJ0ZXh0XCIgc2hhcGU9XCJyb3VuZFwiIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMTBweCAwXCIsIGhlaWdodDogXCI1MHB4XCIsIGZvbnRTaXplOiBcIjIwcHhcIn19IGljb249ezxTdGFyT3V0bGluZWQgc3R5bGU9e3tjb2xvcjogXCIjMkMyQzJDXCJ9fS8+fT4mbmJzcDtOb3RpZmljYXRpb248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInRleHRcIiBzaGFwZT1cInJvdW5kXCIgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMHB4IDBcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgZm9udFNpemU6IFwiMjBweFwifX0gaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiBcIiMyQzJDMkNcIn19Lz59PiZuYnNwO1Byb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwidGV4dFwiIHNoYXBlPVwicm91bmRcIiBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luOiBcIjEwcHggMFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBmb250U2l6ZTogXCIyMHB4XCJ9fSBpY29uPXs8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj59PlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOzxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wifX0+PHAgc3R5bGU9e3tmb250U2l6ZTpcIjE4cHhcIn19PiZuYnNwOyZuYnNwO3ttZS5lbWFpbH08L3A+PC9kaXY+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyMX0gc209ezB9IG1kPXswfSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMTIuNSVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogXCIwXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI2UyZTJlMlwiLCBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLCB6SW5kZXg6IFwiMVwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17dG9Ub3B9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6IFwiMjVweFwifX0+Jm5ic3A7Jm5ic3A7Jm5ic3A7SG9tZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXsyMH0gbWQ9ezB9IG9mZnNldD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dG9wOiBcIjBcIiwgcG9zaXRpb246IFwiZml4ZWRcIiwgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjZTJlMmUyXCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHpJbmRleDogXCIxXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0b1RvcH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogXCIyNXB4XCJ9fT4mbmJzcDsmbmJzcDsmbmJzcDtIb21lPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCI1MHB4XCIsIHpJbmRleDogXCItMVwifX0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezB9IHNtPXswfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RvcDogXCIwXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHdpZHRoOiBcIjUwJVwiLCBib3JkZXJCb3R0b206IFwic29saWQgdGhpbiAjZTJlMmUyXCIsIGJhY2tncm91bmRDb2xvcjpcIndoaXRlXCIsIHpJbmRleDogXCIxXCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0b1RvcH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTogXCIyNXB4XCIsIG1hcmdpbkxlZnQ6XCIxNXB4XCJ9fT5Ib21lPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogXCI1MHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MH0gc209ezB9IG1kPXs0fSA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIHBsYWNlaG9sZGVyPVwi6rKA7IOJXCIgb25TZWFyY2g9e29uU2VhcmNofSBzdHlsZT17e21hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwifX0vPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=