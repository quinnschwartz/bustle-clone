import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";


export default Ember.Route.extend(InfinityRoute, {
  model(){
    //return this.store.findAll('story');
    return this.infinityModel("story", { perPage: 1, startingPage: 1});
  },

    actions: {
    saveStory3(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    }
  }
});
