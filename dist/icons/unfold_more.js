"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* unfold_more icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M24 11.66L30.34 18l2.83-2.83L24 6l-9.17 9.17L17.66 18 24 11.66zm0 24.68L17.66 30l-2.83 2.83L24 42l9.17-9.17L30.34 30 24 36.34z" })
);
Icon.displayName = "UnfoldMoreIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;