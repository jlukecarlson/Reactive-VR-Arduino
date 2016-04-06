Template.handler.onRendered(function() {
    var id = Handlers.find().fetch()[0]._id;
    Handlers.update({_id: id}, {$inc: {counter: 1}});
});
