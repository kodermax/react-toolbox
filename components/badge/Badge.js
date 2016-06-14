import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BADGE } from '../identifiers.js';

const Badge = ({ badgeStyle, theme, ...props }) => {
  const className = classnames(theme.badge, props.className);
  return (
    <div className={theme.root} data-react-toolbox='badge'>
         {props.children}
        <span className={className} style={Object.assign({}, badgeStyle)}>
          {props.badgeContent}
        </span>
    </div>
  );
};

Badge.propTypes = {
  badgeContent: PropTypes.node.isRequired,
  badgeStyle: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  theme: PropTypes.shape({
    badge: PropTypes.string
  })
};

Badge.defaultProps = {
  className: ''
};
export default themr(BADGE)(Badge);
export { Badge };
