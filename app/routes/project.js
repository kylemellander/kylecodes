import Ember from 'ember';

export default Ember.Route.extend({
  model(project) {
    return this.store.findRecord('project', project.project_id);
  },
  actions: {
    edit(project, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          project.set(key, params[key]);
        }
      });
      project.save();
      this.transitionTo('project');
    },
    delete(project) {
      project.destroyRecord();
      this.transitionTo('projects');
      Ember.$(".km-main-container").prepend('<div class="ui message">Your question has been deleted</div>');
      Ember.$(".ui.message").delay(3000).fadeOut(1000, function() {Ember.$(this).remove();});
    }
  }
});
