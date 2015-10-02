import Ember from 'ember';

export function githubDisplay(params/*, hash*/) {
  if (params[0]!=="" && params[0]!==undefined) {
    var result = '<div class="ui bottom attached button large">';
    result += '<a href="'+params[0]+'">';
    result += '<i class="github large icon link"></i> View on github</a></div>';
    return result
  }
}

export default Ember.Helper.helper(githubDisplay);
