import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
 actions: {
   storyFormShow() {
     this.set('addNewStory', true);
   },

     saveStory1() {
     var params = {
       author: this.get('author'),
       title: this.get('title'),
       content: this.get('content'),
       image: this.get('image'),
     };
     this.set('addNewStory', false);
     this.sendAction('saveStory2', params);
   }
 }
});
