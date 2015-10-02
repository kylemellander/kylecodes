import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(params, context) {
      var ref = new Firebase("https://kylecodes.firebaseio.com");
      ref.authWithPassword({
        email    : params.email,
        password : params.password
      }, function(error, authData) {
        if (error) {
          $(".km-main-container").prepend('<div class="ui message">'+error+'</div>');
          $(".ui.message").delay(3000).fadeOut(1000, function() {$(this).remove();});
          console.log("Login Failed!", error);
        } else {
          window.location.reload();
        }
      });
    }
  }
});
