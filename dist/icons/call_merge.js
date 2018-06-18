"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* call_merge icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M34 40.83L36.83 38 30 31.17 27.17 34 34 40.83zM15 16h7v11.17L11.17 38 14 40.83l12-12V16h7l-9-9-9 9z" })
);
Icon.displayName = "CallMergeIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;