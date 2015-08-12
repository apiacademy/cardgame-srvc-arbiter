var app = module.exports = module.parent.exports.setAppDefaults();

// GET /list-games
app.get('/', function(req, res, next) {

  var context = {};
  res.set('Content-Type', 'application/vnd.uber+json');
    
  var state = req.state || null;
  
  var template = __dirname + '/views/gameslist';
  
  return res.render(template, context);

});
