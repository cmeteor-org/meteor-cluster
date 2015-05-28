if (Meteor.isClient) {
  // counter starts at 0

  Template.hello.helpers({
    rootUrl: function () {
      return Session.get('rootUrl');
    }
  });

  Template.hello.rendered = function() {
    Meteor.call('exec', "(function(){return process.env.ROOT_URL + '|' + process.pid;})()",function(err, rel) {
        Session.set('rootUrl', rel);
    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    process.env.CLUSTER_WORKERS_COUNT='auto';
  });

  Meteor.methods({
    'exec': function(func) {
      return eval(func);
    }
  });
}
