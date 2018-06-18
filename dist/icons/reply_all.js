"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* reply_all icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14 16v-6L0 24l14 14v-6l-8-8 8-8zm12 2v-8L12 24l14 14v-8.2c10 0 17 3.2 22 10.2-2-10-8-20-22-22z" })
);
Icon.displayName = "ReplyAllIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;