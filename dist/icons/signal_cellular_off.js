"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* signal_cellular_off icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M42 2L24.82 19.18 42 36.36V2zM9.55 9L7 11.54l12.73 12.73L2 42h35.45l4 4L44 43.45 9.55 9z" })
);
Icon.displayName = "SignalCellularOffIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;