import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FontIcon = ({ alt, children, className, theme, value, ...other}) => ( // eslint-disable-line
  <span
    data-react-toolbox="font-icon"
    aria-label={alt}
    className={classnames({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)}
    {...other}
  >
    {colorIcon ? <span aria-hidden="true" style={{color: colorIcon}}> {value} </span> :
      <span aria-hidden="true">{value}</span>
    }
    {children}
  </span>
);

FontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  colorIcon: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

FontIcon.defaultProps = {
  alt: '',
  className: '',
};

export default FontIcon;
export { FontIcon };
