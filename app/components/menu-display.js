import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dropdown() {
      this.$('.dropdown').dropdown({ transition: 'drop'});
    }
  }
});
