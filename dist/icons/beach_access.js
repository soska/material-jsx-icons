"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* beach_access icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M26.248 29.11l2.863-2.862 12.9 12.89-2.86 2.864zm8.592-11.45l5.73-5.73c-7.9-7.9-20.7-7.91-28.61-.02 7.87-2.61 16.62-.52 22.88 5.75zm-22.93-5.71c-7.88 7.91-7.88 20.71.02 28.61l5.73-5.73c-6.27-6.25-8.36-15-5.75-22.88zm.04-.03c-.01.01-.01.01-.02.01-.01.01-.01.01-.01.02-.75 6.02 2.34 13.77 8.61 20.03l11.46-11.46c-6.28-6.26-14.02-9.36-20.04-8.6z" })
);
Icon.displayName = "BeachAccessIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;