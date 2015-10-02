import Ember from 'ember';

export default Ember.Component.extend({
  sortOrder: ['sort'],
  sortedProjects: Ember.computed.sort('projects', 'sortOrder'),
  // didInsertElement: function() {
  //   this.$('.portfolio-flip').hide();
  //   this.$('.portfolio-flip').transition({
  //     animation: 'fly left',
  //     interval: 800
  //   });
  //   this.$('.portfolio-flip').show();
  // }
});
