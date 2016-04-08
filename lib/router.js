Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'scene',
    data: function() {
        return Handlers.findOne()
    }
});

Router.route('/test', {
    name: 'handler',
    waitOn: function() {
      return Meteor.subscribe('handlers');
    },
    data: function() {
        return Handlers.findOne()
    }

});

Router.route('/testapi', {where: "server"})
  .get( function() {
    var h = Handlers.find().fetch()[0];
    Handlers.update({_id: h._id}, {$inc: {counter: 1}});
    this.render("handler");
    var res = this.response;
    res.end('hello from the server\n');
  })
  .post( function() {
  // If a POST request is made, create the user's profile.
  })
  .put( function() {
  // If a PUT request is made, either update the user's profile or
  // create it if it doesn't already exist.
  })
  .delete( function() {
  // If a DELETE request is made, delete the user's profile.
});
