import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  url: DS.attr(),
  summary: DS.attr(),
  article: DS.attr(),
  github: DS.attr(),
  thumb: DS.attr(),
  img: DS.attr(),
  created: DS.attr(),
  updated: DS.attr(),
  sort: DS.attr('number')
});
