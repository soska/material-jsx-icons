"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* unfold_less icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M14.83 37.17L17.66 40 24 33.66 30.34 40l2.83-2.83L24 28l-9.17 9.17zm18.34-26.34L30.34 8 24 14.34 17.66 8l-2.83 2.83L24 20l9.17-9.17z" })
);
Icon.displayName = "UnfoldLessIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;