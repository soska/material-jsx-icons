"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* storage icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M4 40h40v-8H4v8zm4-6h4v4H8v-4zM4 8v8h40V8H4zm8 6H8v-4h4v4zM4 28h40v-8H4v8zm4-6h4v4H8v-4z" })
);
Icon.displayName = "StorageIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;