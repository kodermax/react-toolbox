import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { MENU } from '../identifiers.js';
import InjectButton from '../button/Button.js';

import InjectMenu from './Menu.js';

const factory = (Button, Menu) => {
  class ButtonMenu extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      iconRipple: PropTypes.bool,
      label: PropTypes.string,
      menuRipple: PropTypes.bool,
      onClick: PropTypes.func,
      onHide: PropTypes.func,
      onSelect: PropTypes.func,
      onShow: PropTypes.func,
      position: PropTypes.string,
      selectable: PropTypes.bool,
      selected: PropTypes.any,
      theme: PropTypes.shape({
        icon: PropTypes.string,
        iconMenu: PropTypes.string
      })
    };

    static defaultProps = {
      className: '',
      icon: 'more_vert',
      iconRipple: true,
      label: 'button',
      menuRipple: true,
      position: 'auto',
      selectable: false
    };

    state = {
      active: false
    };

    handleButtonClick = (event) => {
      this.setState({ active: !this.state.active });
      if (this.props.onClick) this.props.onClick(event);
    };

    handleMenuHide = () => {
      this.setState({ active: false });
      if (this.props.onHide) this.props.onHide();
    };

    render () {
      return (
        <div className={classnames(this.props.theme.iconMenu, this.props.className)}>
          <Button
            className={this.props.theme.icon}
            icon={this.props.icon}
            label={this.props.label}
            onClick={this.handleButtonClick}
            ripple={this.props.iconRipple}
          />
          <Menu
            ref='menu'
            active={this.state.active}
            onHide={this.handleMenuHide}
            onSelect={this.props.onSelect}
            onShow={this.props.onShow}
            position={this.props.position}
            ripple={this.props.menuRipple}
            selectable={this.props.selectable}
            selected={this.props.selected}
            theme={this.props.theme}
          >
            {this.props.children}
          </Menu>
        </div>
      );
    }
  }

  return ButtonMenu;
};

const ButtonMenu = factory(InjectButton, InjectMenu);
export default themr(MENU)(ButtonMenu);
export { factory as buttonMenuFactory };
export { ButtonMenu };
