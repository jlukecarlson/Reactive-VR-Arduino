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
    name: 'hanlder',
    data: function() {
        return Handlers.findOne()
    }
});
