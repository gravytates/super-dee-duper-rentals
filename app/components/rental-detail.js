import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Sure bout this?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
