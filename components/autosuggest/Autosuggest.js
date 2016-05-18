import React from 'react';
import ClassNames from 'classnames';
import Input from '../input';
import style from './style';
import events from '../utils/events';

export default class Autosuggest extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    direction: React.PropTypes.string,
    error: React.PropTypes.string,
    label: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onSelectItem: React.PropTypes.func,
    source: React.PropTypes.any,
    template: React.PropTypes.func,
    value: React.PropTypes.any
  };

  static defaultProps = {
    className: '',
    direction: 'auto',
    multiple: true,
    source: {}
  };

  state = {
    direction: this.props.direction,
    focus: false,
    query: ''
  };

  handleSuggestionHover = (key) => {
    this.setState({active: key});
  };
  select (key, event) {
    events.pauseEvent(event);
    this.handleSelect(key, event);
  }
  suggestions () {
    return this.props.source;
  }
  renderSuggestions () {
    const suggestions = [...this.suggestions()].map((item, key) => {
      const className = ClassNames(style.suggestion, {[style.active]: this.state.active === key});
      return (
        <li
          key={key}
          className={className}
          onMouseDown={this.select.bind(this, key)}
          onMouseOver={this.handleSuggestionHover.bind(this, key)}
        >
          {this.props.template ? this.props.template(item) : item.value}
        </li>
      );
    });

    const className = ClassNames(style.suggestions, {[style.up]: this.state.direction === 'up'});
    return <ul ref='suggestions' className={className}>{suggestions}</ul>;
  }
  getItem (key) {
    return this.source().get(key);
  }
  source () {
    const { source: src } = this.props;
    if (src.hasOwnProperty('length')) {
      return new Map(src.map((item, key) => Array.isArray(item) ? [...item] : [key, item]));
    } else {
      return new Map(Object.keys(src).map((item, key) => [key, src[key]]));
    }
  }
  handleSelect = (key) => {
    const query = this.getItem(key);
    if (this.props.onSelectItem) this.props.onSelectItem(key, query);
    this.setState({ focus: false, query: query.value }, () => { this.refs.input.blur(); });
  };
  handleQueryChange = (value) => {
    if (this.props.onChange) this.props.onChange(value);
    this.setState({query: value});
  };
  handleQueryFocus = () => {
    this.refs.suggestions.scrollTop = 0;
    this.setState({active: '', focus: true});
  };
  handleQueryBlur = () => {
    if (this.state.focus) this.setState({focus: false});
  };
  handleQueryKeyUp = (event) => {
    if (event.which === 13 && this.state.active >= 0) this.select(this.state.active, event);
    if (event.which === 27) this.refs.input.blur();
    if ([40, 38].indexOf(event.which) !== -1) {
      const suggestionsKeys = [...this.suggestions().keys()];
      let index = suggestionsKeys.indexOf(this.state.active) + (event.which === 40 ? +1 : -1);
      if (index < 0) index = suggestionsKeys.length - 1;
      if (index >= suggestionsKeys.length) index = 0;
      this.setState({active: suggestionsKeys[index]});
    }
  };
  getSelectedItem = () => {
    for (const item of this.props.source) {
      if (item.id === this.props.value.id) return item;
    }
  };
  render () {
    const {error, label, ...other} = this.props;
    const selected = this.getSelectedItem();
    const className = ClassNames(style.root, {
      [style.focus]: this.state.focus
    }, this.props.className);

    return (
      <div data-react-toolbox='autosuggest' className={className}>
        <Input
          {...other}
          ref='input'
          className={style.input}
          error={error}
          label={label}
          onBlur={this.handleQueryBlur}
          onChange={this.handleQueryChange}
          onFocus={this.handleQueryFocus}
          onKeyUp={this.handleQueryKeyUp}
          value={selected && selected.value}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
