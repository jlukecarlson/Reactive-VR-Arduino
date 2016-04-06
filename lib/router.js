Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'scene',
    data: function() {
        return Handlers.findOne()
    }
});
