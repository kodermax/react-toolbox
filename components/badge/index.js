import { themr } from 'react-css-themr';
import { Badge } from './Badge.js';
import { BADGE } from '../identifiers.js';
import theme from './theme.scss';

const ThemedBadge = themr(BADGE, theme)(Badge);

export default ThemedBadge;
export { ThemedBadge as Badge };
