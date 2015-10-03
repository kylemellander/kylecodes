import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dropdown() {
      $('.dropdown').dropdown({
        transition: 'drop'
      });
    }
  }
});
