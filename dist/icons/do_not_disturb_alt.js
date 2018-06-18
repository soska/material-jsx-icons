"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* do_not_disturb_alt icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zM8 24c0-8.8 7.2-16 16-16 3.7 0 7.1 1.3 9.8 3.4L11.4 33.8C9.3 31.1 8 27.7 8 24zm16 16c-3.7 0-7.1-1.3-9.8-3.4l22.4-22.4c2.1 2.7 3.4 6.1 3.4 9.8 0 8.8-7.2 16-16 16z" })
);
Icon.displayName = "DoNotDisturbAltIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;