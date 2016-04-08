Template.handler.onCreated(function() {
    Handlers.update({_id: this.data._id}, {$inc: {counter: 1}});
});
