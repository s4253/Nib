/**
 * Separate list has been created here to avoid circular dependency issue.
 */
import block from '../block';
import blockquote from '../blockquote';
import common from '../common';
import color from '../color';
import history from '../history';
import image from '../image';
import inline from '../inline';
import link from '../link';
import list from '../list';
import table from '../table';
import video from '../video';

const Plugins = {
  block,
  blockquote,
  common,
  color,
  history,
  image,
  inline,
  link,
  list,
  table,
  video,
};

export default Plugins;
