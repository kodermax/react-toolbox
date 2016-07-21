import React, {Component, PropTypes} from 'react';
import SvgIcon from '../svg_icon';

const getStyles = ({active, completed, disabled}, {stepper}) => {
  const textColor = 'rgba(0, 0, 0, 0.870588)';
  const disabledTextColor = 'rgba(0, 0, 0, 0.26)';
  const iconColor = '#00bcd4';
  const inactiveIconColor = '#9e9e9e';
  const {orientation} = stepper;

  const styles = {
    root: {
      height: orientation === 'horizontal' ? 72 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 24,
      height: 24
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: 8,
      width: 24
    }
  };

  if (active) {
    styles.root.fontWeight = 500;
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor;
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor;
    styles.root.color = disabledTextColor;
    styles.root.cursor = 'not-allowed';
  }

  return styles;
};

class StepLabel extends Component {
  static muiName = 'StepLabel';

  static propTypes = {
    /**
     * Sets active styling. Overrides disabled coloring.
     */
    active: PropTypes.bool,
    /**
     * The label text node
     */
    children: PropTypes.node,
    /**
     * Sets completed styling. Overrides disabled coloring.
     */
    completed: PropTypes.bool,
    /**
     * Sets disabled styling.
     */
    disabled: PropTypes.bool,
    /**
     * The icon displayed by the step label.
     */
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number
    ]),
    /**
     * @ignore
     */
    last: PropTypes.bool,
    /**
     * Override the inline-style of the root element.
     */
    style: PropTypes.object
  };

  static contextTypes = {
    stepper: PropTypes.object
  };

  renderIcon (completed, icon, styles) {
    const iconType = typeof icon;

    if (iconType === 'number' || iconType === 'string') {
      if (completed) {
        return (
        <SvgIcon color={styles.icon.color} style={styles.icon}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </SvgIcon>
        );
      }

      return (
        <SvgIcon color={styles.icon.color} style={styles.icon}>
          <circle cx="12" cy="12" r="10" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="12"
            fill="#fff"
          >
            {icon}
          </text>
        </SvgIcon>
      );
    }

    return icon;
  }

  render () {
    const {
      active, // eslint-disable-line no-unused-vars
      children,
      completed,
      icon: userIcon,
      last, // eslint-disable-line no-unused-vars
      style,
      ...other
    } = this.props;
    const styles = getStyles(this.props, this.context);
    const icon = this.renderIcon(completed, userIcon, styles);

    return (
      <span style={Object.assign(styles.root, style)} {...other}>
        {icon && (
          <span style={styles.iconContainer}>
            {icon}
          </span>
        )}
        {children}
      </span>
    );
  }
}

export default StepLabel;
