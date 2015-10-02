import Ember from 'ember';

export default Ember.Component.extend({
  add: false,
  actions: {
    showAddProject() {
      this.set('add', true);
    },
    addProject() {
      if (this.get('session').isAuthenticated){
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
        this.set('add', false);
        this.set('title', "");
        this.set('url', "");
        this.set('summary', "");
        this.set('github', "");
        this.set('thumb', "");
        this.set('img', "");
        this.set('sort', "");
        this.set('article', "");
        this.sendAction('addProject', params);
      } else {
        $(".km-main-container").prepend('<div class="ui message">You cannot add a project because you are not logged in.</div>');
        $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});

      }
    },
    hide() {
      this.set('addProject', false);
    }
  }
});
