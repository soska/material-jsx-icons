"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* cloud_circle icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9 28H16c-3.31 0-6-2.69-6-6s2.69-6 6-6l.27.03c.89-3.46 4-6.03 7.73-6.03 4.42 0 8 3.58 8 8h1c2.76 0 5 2.24 5 5s-2.24 5-5 5z" })
);
Icon.displayName = "CloudCircleIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;