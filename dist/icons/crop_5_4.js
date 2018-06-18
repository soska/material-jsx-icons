"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* crop_5_4 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M38 10H10c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 24H10V14h28v20z" })
);
Icon.displayName = "Crop54Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;