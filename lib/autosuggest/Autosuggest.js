'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _style = require('./style.scss');

var _style2 = _interopRequireDefault(_style);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autosuggest = function (_React$Component) {
  _inherits(Autosuggest, _React$Component);

  function Autosuggest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Autosuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      direction: _this.props.direction,
      focus: false,
      query: _this.props.value
    }, _this.handleSuggestionHover = function (key) {
      _this.setState({ active: key });
    }, _this.handleSelect = function (key) {
      var query = _this.getItem(key);
      if (_this.props.onSelectItem) _this.props.onSelectItem(key, query);
      _this.setState({ focus: false }, function () {
        _reactDom2.default.findDOMNode(_this).querySelector('input').blur();
      });
    }, _this.handleQueryChange = function (value) {
      if (_this.props.onChange) _this.props.onChange(value);
    }, _this.handleQueryFocus = function () {
      _this.refs.suggestions.scrollTop = 0;
      _this.setState({ active: '', focus: true });
    }, _this.handleQueryBlur = function () {
      if (_this.state.focus) _this.setState({ focus: false });
    }, _this.handleQueryKeyUp = function (event) {
      if (event.which === 13 && _this.state.active >= 0) _this.select(_this.state.active, event);
      if (event.which === 27) _reactDom2.default.findDOMNode(_this).querySelector('input').blur();
      if ([40, 38].indexOf(event.which) !== -1) {
        var suggestionsKeys = [].concat(_toConsumableArray(_this.suggestions().keys()));
        var index = suggestionsKeys.indexOf(_this.state.active) + (event.which === 40 ? +1 : -1);
        if (index < 0) index = suggestionsKeys.length - 1;
        if (index >= suggestionsKeys.length) index = 0;
        _this.setState({ active: suggestionsKeys[index] });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Autosuggest, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ query: nextProps.value });
    }
  }, {
    key: 'select',
    value: function select(key, event) {
      _events2.default.pauseEvent(event);
      this.handleSelect(key, event);
    }
  }, {
    key: 'suggestions',
    value: function suggestions() {
      return this.props.source;
    }
  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions() {
      var _this2 = this;

      var suggestions = [].concat(_toConsumableArray(this.suggestions())).map(function (item, key) {
        var className = (0, _classnames2.default)(_style2.default.suggestion, _defineProperty({}, _style2.default.active, _this2.state.active === key));
        return _react2.default.createElement(
          'li',
          {
            key: key,
            className: className,
            onMouseDown: _this2.select.bind(_this2, key),
            onMouseOver: _this2.handleSuggestionHover.bind(_this2, key)
          },
          _this2.props.template ? _this2.props.template(item) : item.value
        );
      });

      var className = (0, _classnames2.default)(_style2.default.suggestions, _defineProperty({}, _style2.default.up, this.state.direction === 'up'));
      return _react2.default.createElement(
        'ul',
        { ref: 'suggestions', className: className },
        suggestions
      );
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this.source().get(key);
    }
  }, {
    key: 'source',
    value: function source() {
      var src = this.props.source;

      if (src.hasOwnProperty('length')) {
        return new Map(src.map(function (item, key) {
          return Array.isArray(item) ? [].concat(_toConsumableArray(item)) : [key, item];
        }));
      } else {
        return new Map(Object.keys(src).map(function (item, key) {
          return [key, src[key]];
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          label = _props.label;

      var className = (0, _classnames2.default)(_style2.default.root, _defineProperty({}, _style2.default.focus, this.state.focus), this.props.className);

      return _react2.default.createElement(
        'div',
        { 'data-react-toolbox': 'autosuggest', className: className },
        _react2.default.createElement(_input2.default, {
          ref: 'input',
          className: _style2.default.input,
          error: error,
          label: label,
          onBlur: this.handleQueryBlur,
          onChange: this.handleQueryChange,
          onFocus: this.handleQueryFocus,
          onKeyUp: this.handleQueryKeyUp,
          value: this.state.query
        }),
        this.renderSuggestions()
      );
    }
  }]);

  return Autosuggest;
}(_react2.default.Component);

Autosuggest.propTypes = {
  className: _react2.default.PropTypes.string,
  direction: _react2.default.PropTypes.string,
  error: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  multiple: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func,
  onSelectItem: _react2.default.PropTypes.func,
  source: _react2.default.PropTypes.any,
  template: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.any
};
Autosuggest.defaultProps = {
  className: '',
  direction: 'auto',
  multiple: true,
  source: {}
};
exports.default = Autosuggest;