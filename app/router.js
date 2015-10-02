import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('projects');
  this.route('project', {path: '/projects/:project_id'});
  this.route('login');
});

export default Router;
