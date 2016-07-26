import React, {PropTypes} from 'react';
import pure from 'recompose/pure';

const propTypes = {
  /**
   * Override the inline-style of the root element.
   */
  style: PropTypes.object
};

const contextTypes = {
  stepper: PropTypes.object
};

const StepConnector = (props, context) => {
  const {stepper} = context;
  const styles = {
    wrapper: {
      flex: '1 1 auto'
    },
    line: {
      display: 'block',
      borderColor: '#bdbdbd'
    }
  };

  /**
   * Clean up once we can use CSS pseudo elements
   */
  if (stepper.orientation === 'horizontal') {
    styles.line.marginLeft = -6;
    styles.line.borderTopStyle = 'solid';
    styles.line.borderTopWidth = 1;
  } else if (stepper.orientation === 'vertical') {
    styles.wrapper.marginLeft = 14 + 11; // padding + 1/2 icon
    styles.line.borderLeftStyle = 'solid';
    styles.line.borderLeftWidth = 1;
    styles.line.minHeight = 28;
  }

  return (
    <div style={styles.wrapper}>
      <span style={styles.line}></span>
    </div>
  );
};

StepConnector.propTypes = propTypes;
StepConnector.contextTypes = contextTypes;

export {StepConnector as PlainStepConnector};
export default pure(StepConnector);
