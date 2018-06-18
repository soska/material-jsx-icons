"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* hourglass_full icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M32 4H12v11h.02l-.02.02L20.98 24 12 32.98l.02.02H12v11h24V33h-.02l.02-.02L27.02 24 36 15.02l-.02-.02H36V4h-4z" })
);
Icon.displayName = "HourglassFullIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;