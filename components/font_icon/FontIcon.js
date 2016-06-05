import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FontIcon = ({ children, className, color,  value, ...other}) => (
  <span
    data-react-toolbox='font-icon'
    className={classnames({'material-icons': typeof value === 'string'}, className)}
    {...other}
  >
     {colorValue ? <span style={{color: colorValue}}>{value}</span> : value}
     {children}
  </span>
);

FontIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

FontIcon.defaultProps = {
  className: ''
};

export default FontIcon;
export { FontIcon };
