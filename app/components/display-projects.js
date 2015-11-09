import Ember from 'ember';

export default Ember.Component.extend({
  sortOrder: ['sort'],
  sortedProjects: Ember.computed.sort('projects', 'sortOrder'),
  show: false,
  actions: {
    showProject(project) {
      var modalId = ".ui.modal." + project.get('id');
      $(modalId).modal('toggle');
    },
  },
});
