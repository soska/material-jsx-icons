"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* brightness_2 icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M20 4c-3.65 0-7.06.99-10 2.7 5.97 3.46 10 9.9 10 17.3s-4.03 13.84-10 17.3c2.94 1.71 6.35 2.7 10 2.7 11.05 0 20-8.95 20-20S31.05 4 20 4z" })
);
Icon.displayName = "Brightness2Icon";
Icon.isMaterialIcon = true;
exports.default = Icon;