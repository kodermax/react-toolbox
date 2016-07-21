import React from 'react';
import SvgIcon from '../../components/svg_icon';

class SvgIconTest extends React.Component {
  render () {
    return (
      <section>
        <h5>SvgIcon</h5>
        <p>lorem ipsum...</p>
        <SvgIcon>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      </section>
    );
  }
}

export default SvgIconTest;
