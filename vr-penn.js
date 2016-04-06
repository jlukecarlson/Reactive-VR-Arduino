if (Meteor.isClient) {

    Template.scene.onRendered(function() {
        console.log(this.data.light);
    });


    Template.scene.helpers({
        colorPlane: function() {
            
            if (Session.get("color-plane")) {
                return Session.get("color-plane");
            }
            return "#7BC8A4";

        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
