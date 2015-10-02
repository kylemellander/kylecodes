import Ember from 'ember';

export default Ember.Component.extend({
  sortOrder: ['sort'],
  sortedProjects: Ember.computed.sort('projects', 'sortOrder'),
});
