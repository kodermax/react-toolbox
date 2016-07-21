export default {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut (duration, property, delay, easeFunction) {
    const cEaseFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      let transitions = '';
      for (let i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, cEaseFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },

  create (duration, property, delay, easeFunction) {
    const cDuration = duration || '450ms';
    const cProperty = property || 'all';
    const cDelay = delay || '0ms';
    const cEaseFunction = easeFunction || 'linear';

    return `${cProperty} ${cDuration} ${cEaseFunction} ${cDelay}`;
  }
};
