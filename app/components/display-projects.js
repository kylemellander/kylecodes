import Ember from 'ember';

export default Ember.Component.extend({
  sortOrder: ['sort'],
  sortedProjects: Ember.computed.sort('projects', 'sortOrder'),
  show: false,
  actions: {
    showProject(project) {
      this.set('show', true);
      var modalId = ".ui.modal." + project.get('id');
      this.$(modalId).modal('show');
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
