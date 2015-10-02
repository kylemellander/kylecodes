import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    showEdit() {
      this.set('showEditForm', true);
    },
    hide() {
      this.set('showEditForm', false);
    },
    edit(project) {
      var params = {
        title: this.get('title'),
        url: this.get('url'),
        summary: this.get('summary'),
        article: this.get('article'),
        github: this.get('github'),
        thumb: this.get('thumb'),
        img: this.get('img'),
        updated: new Date(),
        sort: this.get('sort')
      };
      this.set('showEditForm', false);
      this.sendAction('edit', project, params);
    },
    delete(project) {
      this.sendAction('delete', project);
    }
  }
});
