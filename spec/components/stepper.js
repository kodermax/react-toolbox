import React from 'react';
import { Stepper, Step, StepButton } from '../../components/stepper';

class StepperTest extends React.Component {
  state = {
    stepIndex: 0
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }
  render () {
    const {stepIndex} = this.state;
    return (
      <section>
        <h5>Stepper</h5>
        <p>lorem ipsum...</p>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 0})}>
                Select campaign settings
              </StepButton>
            </Step>
            <Step>
              <StepButton onClick={() => this.setState({stepIndex: 1})}>
                Select campaign settings
              </StepButton>
            </Step>
          </Stepper>
      </section>
    );
  }
}

export default StepperTest;
