"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* all_inclusive icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M37.2 13.25c-2.88 0-5.6 1.12-7.55 3.07l-5.65 5-.01-.01-3.03 2.67.02.02-5.39 4.78c-1.28 1.27-2.98 1.97-4.79 1.97-3.74 0-6.78-3.03-6.78-6.75s3.04-6.75 6.78-6.75c1.81 0 3.51.7 4.88 2.06l2.27 2.01 3.02-2.67-2.53-2.24c-2.04-2.03-4.75-3.15-7.64-3.15C4.84 13.25 0 18.07 0 24s4.84 10.75 10.8 10.75c2.88 0 5.59-1.12 7.55-3.06L24 26.68l.01.01 3.02-2.68-.01-.01 5.39-4.77c1.28-1.28 2.98-1.98 4.79-1.98 3.74 0 6.78 3.03 6.78 6.75s-3.04 6.75-6.78 6.75c-1.81 0-3.51-.7-4.88-2.05l-2.27-2.01-3.02 2.68 2.53 2.24c2.04 2.03 4.75 3.14 7.63 3.14C43.16 34.75 48 29.93 48 24s-4.84-10.75-10.8-10.75z" })
);
Icon.displayName = "AllInclusiveIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;