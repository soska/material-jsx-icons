"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* format_textdirection_r_to_l icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 20v10h4V8h4v22h4V8h4V4H20c-4.42 0-8 3.58-8 8s3.58 8 8 8zm-4 14v-6l-8 8 8 8v-6h24v-4H16z" })
);
Icon.displayName = "FormatTextdirectionRToLIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;