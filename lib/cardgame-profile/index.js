var app = module.exports = module.parent.exports.setAppDefaults();

// This is in all likelihood /profile
app.get('/', function(req, res) {

  var context = {};
  context.layout = null; // We don't need JSON layout because this is XML
  
  var template = __dirname + '/views/profile';
  
  res.set('Content-Type', 'application/alps+xml');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
