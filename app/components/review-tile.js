import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(review) {
      if (confirm('sure bout this?')) {
        this.sendAction('destroyReview', review);
      }
    }
  }
});
