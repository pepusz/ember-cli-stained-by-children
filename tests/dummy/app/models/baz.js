import DS from 'ember-data';

export default DS.Model.extend({
  foo: DS.belongsTo('foo'),
  val: DS.attr('boolean', {defaultValue: false})
});