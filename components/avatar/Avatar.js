import React, {PropTypes} from 'react';
import FontIcon from '../font_icon';
import style from './style';

const Avatar = ({children, className, icon, image, title, ...other}) => {
  return (
    <div data-react-toolbox='avatar' className={`${style.avatar} ${className}`} title={title} {...other}>
      {children}
      {typeof image === 'string' ? <img className={style.image} src={image} title={title} /> : image}
      {typeof icon === 'string' ? <FontIcon className={style.letter} value={icon} /> : icon}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string
};

export default Avatar;
