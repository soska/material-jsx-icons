"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* find_in_page icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M40 39.17V16L28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c.89 0 1.71-.3 2.37-.8l-8.87-8.87C27.93 35.38 26.04 36 24 36c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10c0 2.04-.62 3.93-1.66 5.51L40 39.17zM18 26c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6z" })
);
Icon.displayName = "FindInPageIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;