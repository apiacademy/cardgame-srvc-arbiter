var app = module.exports = module.parent.exports.setAppDefaults();

app.get('/', function(req, res, next) {

  var context = {};
  
  context.game_id   = req.query.game_id   || null;
  context.player_id = req.query.player_id || null;
  
  if (!context.game_id || ! context.player_id) {
    return res.status(400).send();
  }



  var template = __dirname + '/views/gamestate';
  
  res.set('Content-Type', 'application/vnd.uber+json');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
