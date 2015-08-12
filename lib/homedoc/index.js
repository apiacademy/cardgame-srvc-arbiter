var app = module.exports = module.parent.exports.setAppDefaults();

app.get('/', function(req, res) {

  //  var name = req.query.name || "";

  var context = {};
  
  context.title = "opa";

  var template = __dirname + '/views/homedoc';
  
  res.set('Content-Type', 'application/vnd.uber+json');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
