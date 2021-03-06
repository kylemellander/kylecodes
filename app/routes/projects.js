import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
  actions: {
    addProject(params) {
      var newProject = this.store.createRecord('project', params);
      newProject.save();
      Ember.$(".km-main-container").prepend('<div class="ui message">'+params.title+' has been successfully added.</div>');
      Ember.$(".ui.message").delay(3000).fadeOut(1000, function() {Ember.$(this).remove();});
      this.transitionTo("projects");
    }
  }
});
