import Ember from 'ember';

export default Ember.Component.extend({
  sortOrder: ['sort'],
  sortedProjects: Ember.computed.sort('projects', 'sortOrder'),
  show: false,
  actions: {
    showProject(project) {
      var modalId = ".ui.modal." + project.get('id');
      $(modalId).modal('toggle');
      this.transitionTo('projects');
    },
  },
  // didInsertElement: function() {
  //   this.$('.portfolio-flip').hide();
  //   this.$('.portfolio-flip').transition({
  //     animation: 'fly left',
  //     interval: 800
  //   });
  //   this.$('.portfolio-flip').show();
  // }
});
