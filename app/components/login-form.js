import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      var context = this;
      this.sendAction('login', params, context);
    }
  }
});
