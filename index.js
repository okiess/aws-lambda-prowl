var Prowl = require('node-prowl');

exports.handler = function(event, context) {
  console.log("Running prowl push message function");
  console.log("==================================");
  console.log("event", event);
  var prowlApiKey = 'TODO';
  var prowl = new Prowl(prowlApiKey);
  prowl.push(event.message, event.application, function(err, remaining) {
    if (err) throw err;
    console.log("Remaining calls: " + remaining);
    console.log("==================================");
    console.log("Stopping prowl");
    context.done();
  });
}
