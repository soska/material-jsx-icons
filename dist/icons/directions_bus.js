"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* directions_bus icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M8 32c0 1.77.78 3.34 2 4.44V40c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h16v2c0 1.1.89 2 2 2h2c1.1 0 2-.9 2-2v-3.56c1.22-1.1 2-2.67 2-4.44V12c0-7-7.16-8-16-8S8 5 8 12v20zm7 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H12V12h24v10z" })
);
Icon.displayName = "DirectionsBusIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;