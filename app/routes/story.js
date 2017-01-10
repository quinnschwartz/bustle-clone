import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('story', params.story_id);
  },
  actions:{
    destroyStory(story) {
      story.destroyRecord();
      this.transitionTo('index');
    },
    update(story, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          story.set(key,params[key]);
        }
      });
      story.save();
      this.transitionTo('index');
    }
  }
});
