"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* local_convenience_store icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M38 14V8H10v6H4v26h16v-8h8v8h16V14h-6zm-16 6h-4v2h4v2h-6v-6h4v-2h-4v-2h6v6zm10 4h-2v-4h-4v-6h2v4h2v-4h2v10z" })
);
Icon.displayName = "LocalConvenienceStoreIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;