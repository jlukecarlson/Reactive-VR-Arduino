Meteor.publish('handlers', function() {
      return Handlers.find();
});
