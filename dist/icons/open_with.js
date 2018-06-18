"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* open_with icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 18h8v-6h6L24 2 14 12h6v6zm-2 2h-6v-6L2 24l10 10v-6h6v-8zm28 4L36 14v6h-6v8h6v6l10-10zm-18 6h-8v6h-6l10 10 10-10h-6v-6z" })
);
Icon.displayName = "OpenWithIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;