webpackHotUpdate_N_E("pages/message/[roomId]",{

/***/ "./components/Chat.js":
/*!****************************!*\
  !*** ./components/Chat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/io */ "./utils/io.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\chatter\\chatter\\front\\components\\Chat.js",
    _this = undefined,
    _s = $RefreshSig$();

/* eslint-disable */









var Chat = function Chat(_ref) {
  _s();

  var roomId = _ref.roomId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      room = _useState[0],
      setRoom = _useState[1]; //왜 다른 페이지인데 안바뀌냐?


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState3[0],
      setMessage = _useState3[1]; //입력 메세지


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      messages = _useState4[0],
      setMessages = _useState4[1]; //채팅방 메세지 기록
  //dynamic page parameter 바뀔때마다 rerendering된다. 


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (roomId !== "main" && isLoading) {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('loadRoom', {
        roomId: parseInt(roomId, 10),
        socketId: _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].id
      });
    }
  }, [roomId]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('roomData', function (roomData) {
      /*
      setRoom(room => ({...room,
      Chats: _.cloneDeep(roomData.Chats),
      User: _.cloneDeep(roomData.User),
      UserId: roomData.UserId,
      createdAt: roomData.createdAt,
      id : roomData.id,
      max: roomData.max,
      participants: _.cloneDeep(roomData.participants),
      title: roomData.title,
      updatedAt: roomData.updatedAt
      }));
      */
      setRoom(roomData);
      setMessages(roomData.Chats);
      /*
      setRoom({...room, roomData});
      const chats = roomData.Chats;
      setMessages({...messages, chats});
      */

      setIsLoading(false);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('roomData');
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].on('newMessage', function (fullChats) {
      /* fullChats
      [{
          id: 29,
          chat: '2시 9분',
          createdAt: 2022-01-27T05:09:02.000Z,
          updatedAt: 2022-01-27T05:09:02.000Z,
          UserId: 3,
          RoomId: 74
        },]
      */
      setMessages(fullChats);
    });
    return function () {
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].off('newMessage');
    };
  }, []);

  var onChangeMessage = function onChangeMessage(e) {
    setMessage(e.target.value);
  };

  var onClickSubmit = function onClickSubmit() {
    if (message.length > 0) {
      console.log("send ".concat(message, " to server"));
      _utils_io__WEBPACK_IMPORTED_MODULE_4__["socket"].emit('sendMessage', {
        roomId: parseInt(roomId, 10),
        message: message,
        userId: me.id
      });
      setMessage('');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 22
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          height: "50px",
          borderBottom: "solid thin #EFEEF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          children: room.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "chatContainer",
        style: {
          height: "100%",
          width: "100%",
          overflow: 'auto',
          marginBottom: '60px'
        },
        children: messages && messages.map(function (m) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              height: "30px"
            },
            children: m.chat
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 45
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "input",
        style: {
          position: "absolute",
          height: "60px",
          width: "100%",
          left: '0',
          right: '0',
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "solid thin #EFEEF5",
          backgroundColor: 'white'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          bordered: false,
          style: {
            width: "90%"
          },
          onChange: onChangeMessage,
          value: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "You don\u2019t have a message selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Chat, "+9iTvdumGkcJ+5jZTdOGSItmfR0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Chat;
/* harmony default export */ __webpack_exports__["default"] = (Chat);
/*
<div>
        <h1>You don’t have a message selected</h1>
        <br />
        <p>Choose one from your existing messages, or start a new one.</p>
        </div>
 */

var _c;

$RefreshReg$(_c, "Chat");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInNvY2tldCIsImVtaXQiLCJwYXJzZUludCIsInNvY2tldElkIiwiaWQiLCJvbiIsInJvb21EYXRhIiwiQ2hhdHMiLCJvZmYiLCJmdWxsQ2hhdHMiLCJvbkNoYW5nZU1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrU3VibWl0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVzZXJJZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRpdGxlIiwiY29sb3IiLCJwYXJ0aWNpcGFudHMiLCJvdmVyZmxvdyIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsIm0iLCJjaGF0IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXJUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLHFCQUNWQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBREQ7QUFBQSxNQUNqQkMsRUFEaUIsZ0JBQ2pC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RUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lc3NhZ2UvW3Jvb21JZF0uZGMxZDlmYzBiYjRhYzBjNmU4MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93VXBPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7IHJvb21JZCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKHt9KTsgLy/smZwg64uk66W4IO2OmOydtOyngOyduOuNsCDslYjrsJTrgIzrg5A/XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8v7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuXHJcbiAgICAvL2R5bmFtaWMgcGFnZSBwYXJhbWV0ZXIg67CU64CU65WM66eI64ukIHJlcmVuZGVyaW5n65Cc64ukLiBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChyb29tSWQgIT09IFwibWFpblwiICYmIGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbG9hZFJvb20nLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIHNvY2tldElkIDogc29ja2V0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm9vbUlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tRGF0YScsIChyb29tRGF0YSk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHNldFJvb20ocm9vbSA9PiAoey4uLnJvb20sXHJcbiAgICAgICAgICAgIENoYXRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5DaGF0cyksXHJcbiAgICAgICAgICAgIFVzZXI6IF8uY2xvbmVEZWVwKHJvb21EYXRhLlVzZXIpLFxyXG4gICAgICAgICAgICBVc2VySWQ6IHJvb21EYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiByb29tRGF0YS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIGlkIDogcm9vbURhdGEuaWQsXHJcbiAgICAgICAgICAgIG1heDogcm9vbURhdGEubWF4LFxyXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHM6IF8uY2xvbmVEZWVwKHJvb21EYXRhLnBhcnRpY2lwYW50cyksXHJcbiAgICAgICAgICAgIHRpdGxlOiByb29tRGF0YS50aXRsZSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiByb29tRGF0YS51cGRhdGVkQXRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb21EYXRhKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocm9vbURhdGEuQ2hhdHMpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHsuLi5yb29tLCByb29tRGF0YX0pO1xyXG4gICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJvb21EYXRhLkNoYXRzO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyh7Li4ubWVzc2FnZXMsIGNoYXRzfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdyb29tRGF0YScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKGZ1bGxDaGF0cykgPT4ge1xyXG4gICAgICAgICAgICAvKiBmdWxsQ2hhdHNcclxuICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgIGlkOiAyOSxcclxuICAgICAgICAgICAgICAgIGNoYXQ6ICcy7IucIDnrtoQnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IDIwMjItMDEtMjdUMDU6MDk6MDIuMDAwWixcclxuICAgICAgICAgICAgICAgIFVzZXJJZDogMyxcclxuICAgICAgICAgICAgICAgIFJvb21JZDogNzRcclxuICAgICAgICAgICAgICB9LF1cclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKGZ1bGxDaGF0cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ25ld01lc3NhZ2UnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZU1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCAke21lc3NhZ2V9IHRvIHNlcnZlcmApO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IG1lLmlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7IHJvb21JZCAhPT0gXCJtYWluXCIgPyBcclxuICAgICAgICBpc0xvYWRpbmcgPyAgPExvYWRpbmdPdXRsaW5lZCBzcGluIC8+IDogXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCI1MHB4XCIsIGJvcmRlckJvdHRvbTogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoMj57cm9vbS50aXRsZX08L2gyPiZuYnNwOyZuYnNwOzxoMiBzdHlsZT17e2NvbG9yOiBcImdyZXlcIn19Pntyb29tLnBhcnRpY2lwYW50cy5sZW5ndGh9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdENvbnRhaW5lclwiIHN0eWxlPXt7IGhlaWdodDpcIjEwMCVcIiwgd2lkdGg6XCIxMDAlXCIsIG92ZXJmbG93OidhdXRvJywgbWFyZ2luQm90dG9tOic2MHB4J319PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeyBtZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoKG0pPT48ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiMzBweFwifX0+e20uY2hhdH08L2Rpdj4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBoZWlnaHQ6XCI2MHB4XCIsIHdpZHRoOlwiMTAwJVwiLGxlZnQ6JzAnLCByaWdodDonMCcsIGJvdHRvbTpcIjBcIiwgZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzcGFjZS1iZXR3ZWVuXCIsIGJvcmRlclRvcDogXCJzb2xpZCB0aGluICNFRkVFRjVcIiwgYmFja2dyb3VuZENvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBib3JkZXJlZD17ZmFsc2V9IHN0eWxlPXt7d2lkdGg6XCI5MCVcIn19IG9uQ2hhbmdlPXtvbkNoYW5nZU1lc3NhZ2V9IHZhbHVlPXttZXNzYWdlfS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJjaXJjbGVcIiBpY29uPXs8QXJyb3dVcE91dGxpbmVkIC8+fSBzaXplPVwibGFyZ2VcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjUlXCJ9fSBvbkNsaWNrPXtvbkNsaWNrU3VibWl0fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA6ICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCB3aWR0aDpcIjEwMCVcIiwgaGVpZ2h0OlwiMTAwJVwiLCB9fT5cclxuICAgICAgICA8ZGl2PllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9kaXY+XHJcbiAgICAgICAgPGRpdj5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcblxyXG4vKlxyXG48ZGl2PlxyXG4gICAgICAgIDxoMT5Zb3UgZG9u4oCZdCBoYXZlIGEgbWVzc2FnZSBzZWxlY3RlZDwvaDE+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPHA+Q2hvb3NlIG9uZSBmcm9tIHlvdXIgZXhpc3RpbmcgbWVzc2FnZXMsIG9yIHN0YXJ0IGEgbmV3IG9uZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAqLyJdLCJzb3VyY2VSb290IjoiIn0=