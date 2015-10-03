import Ember from 'ember';

export function githubDisplayAgain(params/*, hash*/) {
  var result = '<div class="actions"><div class="ui bottom button large">';
  result += '<a href="'+params[0]+'">';
  result += '<i class="github large icon link"></i> View on github</a></div></div>';
  return result;
}

export default Ember.Helper.helper(githubDisplayAgain);
