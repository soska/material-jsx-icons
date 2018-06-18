"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* directions icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M43.41 22.59l-18-18c-.78-.78-2.05-.78-2.82 0l-18 18c-.78.78-.78 2.05 0 2.83l18 17.99v.01c.78.78 2.05.78 2.83 0l18-18c.78-.79.78-2.05-.01-2.83zM28 29v-5h-8v6h-4v-8c0-1.11.89-2 2-2h10v-5l7 7-7 7z" })
);
Icon.displayName = "DirectionsIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;