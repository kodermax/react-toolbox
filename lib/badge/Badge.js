'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Badge = function Badge(_ref) {
  var badgeStyle = _ref.badgeStyle,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ['badgeStyle', 'theme']);

  var className = (0, _classnames2.default)(theme.badge, props.className);
  return _react2.default.createElement(
    'div',
    { className: theme.root, 'data-react-toolbox': 'badge' },
    props.children,
    _react2.default.createElement(
      'span',
      { className: className, style: Object.assign({}, badgeStyle) },
      props.badgeContent
    )
  );
};

Badge.propTypes = {
  badgeContent: _react.PropTypes.node.isRequired,
  badgeStyle: _react.PropTypes.object,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  primary: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  theme: _react.PropTypes.shape({
    badge: _react.PropTypes.string
  })
};

Badge.defaultProps = {
  className: ''
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.BADGE)(Badge);
exports.Badge = Badge;