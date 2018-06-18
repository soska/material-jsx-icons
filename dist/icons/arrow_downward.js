"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* arrow_downward icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", {
    d: "M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z",
    fill: "#010101"
  })
);
Icon.displayName = "ArrowDownwardIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;