import React from 'react';
import Badge from '../../components/badge';
import Button from '../../components/button';

const BadgeTest = () => (
  <section>
    <h5>Badge</h5>
    <p>This component generates a small badge to the top-right of its child(ren).</p>
    <Badge badgeContent={10} secondary badgeStyle={{top: 12, right: 12}}>
      <Button label='test' raised primary/>
    </Badge>
  </section>
);

export default BadgeTest;
