"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* airline_seat_legroom_normal icon*/


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Icon = (props = {}) => _react2.default.createElement(
  "svg",
  _extends({ viewBox: "0 0 48 48" }, props),
  _react2.default.createElement("path", { d: "M10 24V6H6v18c0 5.52 4.48 10 10 10h12v-4H16c-3.31 0-6-2.69-6-6zm31 12h-3V22c0-2.21-1.79-4-4-4H24V6H12v16c0 3.3 2.7 6 6 6h14v14h9c1.66 0 3-1.34 3-3s-1.34-3-3-3z" })
);
Icon.displayName = "AirlineSeatLegroomNormalIcon";
Icon.isMaterialIcon = true;
exports.default = Icon;