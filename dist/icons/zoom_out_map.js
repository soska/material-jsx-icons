"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* zoom_out_map icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M30 6l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L42 18V6zM6 18l4.59-4.59 5.75 5.76 2.83-2.83-5.76-5.75L18 6H6zm12 24l-4.59-4.59 5.76-5.75-2.83-2.83-5.75 5.76L6 30v12zm24-12l-4.59 4.59-5.75-5.76-2.83 2.83 5.76 5.75L30 42h12z" })
);
Icon.displayName = "ZoomOutMapIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;