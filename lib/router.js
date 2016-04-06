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
    data: function() {
        return Handlers.findOne()
    }
});
