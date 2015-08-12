var app = module.exports = module.parent.exports.setAppDefaults();

app.get('/profile', function(req, res) {

  var context = {};
  
  var template = __dirname + '/views/profile';
  
  res.set('Content-Type', 'application/alps+xml');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
