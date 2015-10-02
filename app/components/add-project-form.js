import Ember from 'ember';

export default Ember.Component.extend({
  addProject: false,
  actions: {
    showAddProject() {
      this.set('addProject', true);
    },
    addProject() {
      var params = {
        title: this.get('title'),
        url: this.get('url'),
        summary: this.get('summary'),
        article: this.get('article'),
        github: this.get('github'),
        thumb: this.get('thumb'),
        img: this.get('img'),
        created: new Date(),
        updated: new Date(),
        sort: parseInt(this.get('sort'))
      };
      this.set('addProject', false);
      this.set('title', "");
      this.set('url', "");
      this.set('summary', "");
      this.set('github', "");
      this.set('thumb', "");
      this.set('img', "");
      this.set('sort', "");
      this.set('article', "");
      this.sendAction('addProject', params);
    },
    hide() {
      this.set('addProject', false);
    }
  }
});
