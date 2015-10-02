import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.$('.intro-flip').hide();
    this.$('.intro-flip').transition({
      animation: 'horizontal flip',
      interval: 500
    });
  }
});
