"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* brightness_4 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-1.79 0-3.48-.4-5-1.1 4.13-1.9 7-6.06 7-10.9s-2.87-9-7-10.9c1.52-.7 3.21-1.1 5-1.1 6.63 0 12 5.37 12 12s-5.37 12-12 12z" })
);
Icon.displayName = "Brightness4Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;