meteor-cluster
===============

In brower console you can execute `some code` at server.Example:

Execute blow code at  http://meteor-cluster.meteor.com/
```
Meteor.call('exec', "( function(){return Npm.require('os').cpus().length;} )()", function(err, rel) { console.log('os cpus nums:', rel); });
```

brower console will print:
```
os cpus nums: 32
```

:)
