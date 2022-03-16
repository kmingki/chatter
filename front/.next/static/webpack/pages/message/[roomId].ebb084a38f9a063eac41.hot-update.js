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


  var chattingContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); //dynamic page parameter 바뀔때마다 rerendering된다. 

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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _chattingContent$curr;

    console.log('ref object changed');
    console.log(chattingContent.current); //[id]바뀔때 컴포넌트 리렌더링은 되지만, mount는 한번된다

    (_chattingContent$curr = chattingContent.current) === null || _chattingContent$curr === void 0 ? void 0 : _chattingContent$curr.updateScroll();
  }, [roomId]);

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

  var updateScroll = function updateScroll() {
    chattingContent.current.scrollTop = chattingContent.current.scrollHeight;
  }; ///처음 채팅방을 눌렀을때, 챗이 왔을때 ? 고민좀


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: roomId !== "main" ? isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      spin: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
          lineNumber: 121,
          columnNumber: 13
        }, _this), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
          style: {
            color: "grey"
          },
          children: room.participants.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 46
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "chatContainer",
        ref: chattingContent,
        style: {
          height: "calc(100% - 110px)",
          width: "100%",
          overflow: 'auto'
        },
        children: messages && messages.map(function (m, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              height: "30px"
            },
            children: m.chat
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 48
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
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
          lineNumber: 130,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          shape: "circle",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowUpOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 61
          }, _this),
          size: "large",
          style: {
            marginRight: "5%"
          },
          onClick: onClickSubmit
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
        lineNumber: 136,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "Choose one from your existing messages, or start a new one."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Chat, "Qv6TZipqdBpoe8pZ/oz0dDdLM/k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJyb29tSWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJyb29tIiwic2V0Um9vbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImNoYXR0aW5nQ29udGVudCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInNvY2tldCIsImVtaXQiLCJwYXJzZUludCIsInNvY2tldElkIiwiaWQiLCJvbiIsInJvb21EYXRhIiwiQ2hhdHMiLCJvZmYiLCJmdWxsQ2hhdHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInVwZGF0ZVNjcm9sbCIsIm9uQ2hhbmdlTWVzc2FnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tTdWJtaXQiLCJsZW5ndGgiLCJ1c2VySWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlckJvdHRvbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0aXRsZSIsImNvbG9yIiwicGFydGljaXBhbnRzIiwib3ZlcmZsb3ciLCJtYXAiLCJtIiwiaSIsImNoYXQiLCJwb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJvcmRlclRvcCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblJpZ2h0IiwiZmxleERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEscUJBQ1ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FERDtBQUFBLE1BQ2pCQyxFQURpQixnQkFDakJBLEVBRGlCOztBQUFBLGtCQUVEQyxzREFBUSxDQUFDLEVBQUQsQ0FGUDtBQUFBLE1BRWxCQyxJQUZrQjtBQUFBLE1BRVpDLE9BRlksaUJBRWE7OztBQUZiLG1CQUdTRixzREFBUSxDQUFDLElBQUQsQ0FIakI7QUFBQSxNQUdsQkcsU0FIa0I7QUFBQSxNQUdQQyxZQUhPOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSWxCSyxPQUprQjtBQUFBLE1BSVRDLFVBSlMsa0JBSW1COzs7QUFKbkIsbUJBS09OLHNEQUFRLENBQUMsRUFBRCxDQUxmO0FBQUEsTUFLbEJPLFFBTGtCO0FBQUEsTUFLUkMsV0FMUSxrQkFLcUI7OztBQUM5QyxNQUFNQyxlQUFlLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUE5QixDQU55QixDQVF6Qjs7QUFDQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBSWhCLE1BQU0sS0FBSyxNQUFYLElBQXFCUSxTQUF6QixFQUFvQztBQUNoQ1Msc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVosRUFBd0I7QUFDcEJsQixjQUFNLEVBQUdtQixRQUFRLENBQUNuQixNQUFELEVBQVMsRUFBVCxDQURHO0FBRXBCb0IsZ0JBQVEsRUFBR0gsZ0RBQU0sQ0FBQ0k7QUFGRSxPQUF4QjtBQUlIO0FBQ0osR0FQUSxFQU9OLENBQUNyQixNQUFELENBUE0sQ0FBVDtBQVNBZ0IseURBQVMsQ0FBQyxZQUFJO0FBRVZDLG9EQUFNLENBQUNLLEVBQVAsQ0FBVSxVQUFWLEVBQXNCLFVBQUNDLFFBQUQsRUFBWTtBQUU5QjtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVZaEIsYUFBTyxDQUFDZ0IsUUFBRCxDQUFQO0FBQ0FWLGlCQUFXLENBQUNVLFFBQVEsQ0FBQ0MsS0FBVixDQUFYO0FBRUE7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFWWYsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFFSCxLQTNCRDtBQTZCQSxXQUFPLFlBQU07QUFDVFEsc0RBQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQVg7QUFDSCxLQUZEO0FBSUgsR0FuQ1EsRUFtQ04sRUFuQ00sQ0FBVDtBQXFDQVQseURBQVMsQ0FBQyxZQUFJO0FBRVZDLG9EQUFNLENBQUNLLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQUNJLFNBQUQsRUFBZTtBQUNuQztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVZYixpQkFBVyxDQUFDYSxTQUFELENBQVg7QUFDSCxLQWJEO0FBZUEsV0FBTyxZQUFNO0FBQ1RULHNEQUFNLENBQUNRLEdBQVAsQ0FBVyxZQUFYO0FBQ0gsS0FGRDtBQUlILEdBckJRLEVBcUJOLEVBckJNLENBQVQ7QUF1QkFULHlEQUFTLENBQUMsWUFBSztBQUFBOztBQUVYVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWWQsZUFBZSxDQUFDZSxPQUE1QixFQUhXLENBSVg7O0FBQ0EsNkJBQUFmLGVBQWUsQ0FBQ2UsT0FBaEIsZ0ZBQXlCQyxZQUF6QjtBQUVILEdBUFEsRUFPTixDQUFDOUIsTUFBRCxDQVBNLENBQVQ7O0FBU0EsTUFBTStCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCckIsY0FBVSxDQUFDcUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQUl6QixPQUFPLENBQUMwQixNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCVCxhQUFPLENBQUNDLEdBQVIsZ0JBQW9CbEIsT0FBcEI7QUFDQU8sc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFDdkJsQixjQUFNLEVBQUdtQixRQUFRLENBQUNuQixNQUFELEVBQVMsRUFBVCxDQURNO0FBRXZCVSxlQUFPLEVBQVBBLE9BRnVCO0FBR3ZCMkIsY0FBTSxFQUFFakMsRUFBRSxDQUFDaUI7QUFIWSxPQUEzQjtBQUtBVixnQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNIO0FBQ0osR0FWRDs7QUFZQSxNQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QmhCLG1CQUFlLENBQUNlLE9BQWhCLENBQXdCUyxTQUF4QixHQUFvQ3hCLGVBQWUsQ0FBQ2UsT0FBaEIsQ0FBd0JVLFlBQTVEO0FBQ0gsR0FGRCxDQXZHeUIsQ0F5R3ZCOzs7QUFDRixzQkFDSTtBQUFBLGNBQ0V2QyxNQUFNLEtBQUssTUFBWCxHQUNGUSxTQUFTLGdCQUFJLHFFQUFDLGlFQUFEO0FBQWlCLFVBQUk7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKLGdCQUNUO0FBQUssV0FBSyxFQUFFO0FBQUNnQyxhQUFLLEVBQUMsTUFBUDtBQUFlQyxjQUFNLEVBQUM7QUFBdEIsT0FBWjtBQUFBLDhCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNBLGdCQUFNLEVBQUUsTUFBVDtBQUFpQkMsc0JBQVksRUFBRSxvQkFBL0I7QUFBcURDLGlCQUFPLEVBQUMsTUFBN0Q7QUFBcUVDLG9CQUFVLEVBQUMsUUFBaEY7QUFBMEZDLHdCQUFjLEVBQUM7QUFBekcsU0FBWjtBQUFBLGdDQUNBO0FBQUEsb0JBQUt2QyxJQUFJLENBQUN3QztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsMkJBQ2lDO0FBQUksZUFBSyxFQUFFO0FBQUNDLGlCQUFLLEVBQUU7QUFBUixXQUFYO0FBQUEsb0JBQTZCekMsSUFBSSxDQUFDMEMsWUFBTCxDQUFrQlo7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUErQixXQUFHLEVBQUV0QixlQUFwQztBQUFxRCxhQUFLLEVBQUU7QUFBRTJCLGdCQUFNLEVBQUMsb0JBQVQ7QUFBK0JELGVBQUssRUFBQyxNQUFyQztBQUE2Q1Msa0JBQVEsRUFBQztBQUF0RCxTQUE1RDtBQUFBLGtCQUNFckMsUUFBUSxJQUFJQSxRQUFRLENBQUNzQyxHQUFULENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsOEJBQVE7QUFBYSxpQkFBSyxFQUFFO0FBQUNYLG9CQUFNLEVBQUM7QUFBUixhQUFwQjtBQUFBLHNCQUFzQ1UsQ0FBQyxDQUFDRTtBQUF4QyxhQUFVRCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVI7QUFBQSxTQUFiO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFO0FBQUNFLGtCQUFRLEVBQUMsVUFBVjtBQUFzQmIsZ0JBQU0sRUFBQyxNQUE3QjtBQUFxQ0QsZUFBSyxFQUFDLE1BQTNDO0FBQWtEZSxjQUFJLEVBQUMsR0FBdkQ7QUFBNERDLGVBQUssRUFBQyxHQUFsRTtBQUF1RUMsZ0JBQU0sRUFBQyxHQUE5RTtBQUFtRmQsaUJBQU8sRUFBQyxNQUEzRjtBQUFtR0Msb0JBQVUsRUFBRSxRQUEvRztBQUM5QkMsd0JBQWMsRUFBQyxlQURlO0FBQ0VhLG1CQUFTLEVBQUUsb0JBRGI7QUFDbUNDLHlCQUFlLEVBQUM7QUFEbkQsU0FBOUI7QUFBQSxnQ0FFSSxxRUFBQywwQ0FBRDtBQUFPLGtCQUFRLEVBQUUsS0FBakI7QUFBd0IsZUFBSyxFQUFFO0FBQUNuQixpQkFBSyxFQUFDO0FBQVAsV0FBL0I7QUFBOEMsa0JBQVEsRUFBRVQsZUFBeEQ7QUFBeUUsZUFBSyxFQUFFckI7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLHFFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFDLFFBQTdCO0FBQXNDLGNBQUksZUFBRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUE1QztBQUFpRSxjQUFJLEVBQUMsT0FBdEU7QUFBOEUsZUFBSyxFQUFFO0FBQUNrRCx1QkFBVyxFQUFFO0FBQWQsV0FBckY7QUFBMEcsaUJBQU8sRUFBRXpCO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkUsZ0JBa0JGO0FBQUssV0FBSyxFQUFFO0FBQUNRLGVBQU8sRUFBQyxNQUFUO0FBQWlCa0IscUJBQWEsRUFBRSxRQUFoQztBQUEwQ2hCLHNCQUFjLEVBQUMsUUFBekQ7QUFBbUVELGtCQUFVLEVBQUMsUUFBOUU7QUFBd0ZKLGFBQUssRUFBQyxNQUE5RjtBQUFzR0MsY0FBTSxFQUFDO0FBQTdHLE9BQVo7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkEsbUJBREo7QUEwQkgsQ0FwSUQ7O0dBQU0xQyxJO1VBQ2FFLHVEOzs7S0FEYkYsSTtBQXNJU0EsbUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZXNzYWdlL1tyb29tSWRdLmViYjA4NGEzOGY5YTA2M2VhYzQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFycm93VXBPdXRsaW5lZCwgTG9hZGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW8nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7IHJvb21JZCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKHt9KTsgLy/smZwg64uk66W4IO2OmOydtOyngOyduOuNsCDslYjrsJTrgIzrg5A/XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7IC8v7J6F66ClIOuplOyEuOyngFxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8v7LGE7YyF67CpIOuplOyEuOyngCDquLDroZ1cclxuICAgIGNvbnN0IGNoYXR0aW5nQ29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICAvL2R5bmFtaWMgcGFnZSBwYXJhbWV0ZXIg67CU64CU65WM66eI64ukIHJlcmVuZGVyaW5n65Cc64ukLiBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmIChyb29tSWQgIT09IFwibWFpblwiICYmIGlzTG9hZGluZykge1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbG9hZFJvb20nLCB7XHJcbiAgICAgICAgICAgICAgICByb29tSWQgOiBwYXJzZUludChyb29tSWQsIDEwKSxcclxuICAgICAgICAgICAgICAgIHNvY2tldElkIDogc29ja2V0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm9vbUlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tRGF0YScsIChyb29tRGF0YSk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIHNldFJvb20ocm9vbSA9PiAoey4uLnJvb20sXHJcbiAgICAgICAgICAgIENoYXRzOiBfLmNsb25lRGVlcChyb29tRGF0YS5DaGF0cyksXHJcbiAgICAgICAgICAgIFVzZXI6IF8uY2xvbmVEZWVwKHJvb21EYXRhLlVzZXIpLFxyXG4gICAgICAgICAgICBVc2VySWQ6IHJvb21EYXRhLlVzZXJJZCxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiByb29tRGF0YS5jcmVhdGVkQXQsXHJcbiAgICAgICAgICAgIGlkIDogcm9vbURhdGEuaWQsXHJcbiAgICAgICAgICAgIG1heDogcm9vbURhdGEubWF4LFxyXG4gICAgICAgICAgICBwYXJ0aWNpcGFudHM6IF8uY2xvbmVEZWVwKHJvb21EYXRhLnBhcnRpY2lwYW50cyksXHJcbiAgICAgICAgICAgIHRpdGxlOiByb29tRGF0YS50aXRsZSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiByb29tRGF0YS51cGRhdGVkQXRcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRSb29tKHJvb21EYXRhKTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZXMocm9vbURhdGEuQ2hhdHMpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBzZXRSb29tKHsuLi5yb29tLCByb29tRGF0YX0pO1xyXG4gICAgICAgICAgICBjb25zdCBjaGF0cyA9IHJvb21EYXRhLkNoYXRzO1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlcyh7Li4ubWVzc2FnZXMsIGNoYXRzfSk7XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdyb29tRGF0YScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKGZ1bGxDaGF0cykgPT4ge1xyXG4gICAgICAgICAgICAvKiBmdWxsQ2hhdHNcclxuICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgIGlkOiAyOSxcclxuICAgICAgICAgICAgICAgIGNoYXQ6ICcy7IucIDnrtoQnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAyMDIyLTAxLTI3VDA1OjA5OjAyLjAwMFosXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IDIwMjItMDEtMjdUMDU6MDk6MDIuMDAwWixcclxuICAgICAgICAgICAgICAgIFVzZXJJZDogMyxcclxuICAgICAgICAgICAgICAgIFJvb21JZDogNzRcclxuICAgICAgICAgICAgICB9LF1cclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKGZ1bGxDaGF0cyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ25ld01lc3NhZ2UnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWYgb2JqZWN0IGNoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGF0dGluZ0NvbnRlbnQuY3VycmVudCk7XHJcbiAgICAgICAgLy9baWRd67CU64CU65WMIOy7tO2PrOuEjO2KuCDrpqzroIzrjZTrp4HsnYAg65CY7KeA66eMLCBtb3VudOuKlCDtlZzrsojrkJzri6RcclxuICAgICAgICBjaGF0dGluZ0NvbnRlbnQuY3VycmVudD8udXBkYXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbcm9vbUlkXSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbmQgJHttZXNzYWdlfSB0byBzZXJ2ZXJgKTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICAgICAgcm9vbUlkIDogcGFyc2VJbnQocm9vbUlkLCAxMCksXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBtZS5pZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hhdHRpbmdDb250ZW50LmN1cnJlbnQuc2Nyb2xsVG9wID0gY2hhdHRpbmdDb250ZW50LmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfSAvLy/sspjsnYwg7LGE7YyF67Cp7J2EIOuIjOuggOydhOuVjCwg7LGX7J20IOyZlOydhOuVjCA/IOqzoOuvvOyigFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHsgcm9vbUlkICE9PSBcIm1haW5cIiA/IFxyXG4gICAgICAgIGlzTG9hZGluZyA/ICA8TG9hZGluZ091dGxpbmVkIHNwaW4gLz4gOiBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsIGhlaWdodDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjUwcHhcIiwgYm9yZGVyQm90dG9tOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgPGgyPntyb29tLnRpdGxlfTwvaDI+Jm5ic3A7Jm5ic3A7PGgyIHN0eWxlPXt7Y29sb3I6IFwiZ3JleVwifX0+e3Jvb20ucGFydGljaXBhbnRzLmxlbmd0aH08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdENvbnRhaW5lclwiIHJlZj17Y2hhdHRpbmdDb250ZW50fSBzdHlsZT17eyBoZWlnaHQ6XCJjYWxjKDEwMCUgLSAxMTBweClcIiwgd2lkdGg6XCIxMDAlXCIsIG92ZXJmbG93OidhdXRvJ319PlxyXG4gICAgICAgICAgICB7IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcCgobSwgaSk9PjxkaXYga2V5PXtpfSBzdHlsZT17e2hlaWdodDpcIjMwcHhcIn19PnttLmNoYXR9PC9kaXY+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIGhlaWdodDpcIjYwcHhcIiwgd2lkdGg6XCIxMDAlXCIsbGVmdDonMCcsIHJpZ2h0OicwJywgYm90dG9tOlwiMFwiLCBkaXNwbGF5OlwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIiwgYm9yZGVyVG9wOiBcInNvbGlkIHRoaW4gI0VGRUVGNVwiLCBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3t3aWR0aDpcIjkwJVwifX0gb25DaGFuZ2U9e29uQ2hhbmdlTWVzc2FnZX0gdmFsdWU9e21lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaGFwZT1cImNpcmNsZVwiIGljb249ezxBcnJvd1VwT3V0bGluZWQgLz59IHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IFwiNSVcIn19IG9uQ2xpY2s9e29uQ2xpY2tTdWJtaXR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDogIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIHdpZHRoOlwiMTAwJVwiLCBoZWlnaHQ6XCIxMDAlXCIsIH19PlxyXG4gICAgICAgIDxkaXY+WW91IGRvbuKAmXQgaGF2ZSBhIG1lc3NhZ2Ugc2VsZWN0ZWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2PkNob29zZSBvbmUgZnJvbSB5b3VyIGV4aXN0aW5nIG1lc3NhZ2VzLCBvciBzdGFydCBhIG5ldyBvbmUuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbi8qXHJcbjxkaXY+XHJcbiAgICAgICAgPGgxPllvdSBkb27igJl0IGhhdmUgYSBtZXNzYWdlIHNlbGVjdGVkPC9oMT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8cD5DaG9vc2Ugb25lIGZyb20geW91ciBleGlzdGluZyBtZXNzYWdlcywgb3Igc3RhcnQgYSBuZXcgb25lLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==