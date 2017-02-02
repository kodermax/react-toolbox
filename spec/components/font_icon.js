import React from 'react';
import FontIcon from '../../components/font_icon';

const FontIconTest = () => (
  <section>
    <h5>Font Icons</h5>
    <p>lorem ipsum...</p>

    <FontIcon colorIcon="red" value="add icon"/>
    <FontIcon value="access_alarm"/>
    <FontIcon value="explore icon"/>
    <FontIcon value="zoom_in icon"/>
    <FontIcon alt="input icon">input</FontIcon>
  </section>
);

export default FontIconTest;
