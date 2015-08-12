var app = module.exports = module.parent.exports.setAppDefaults()
  , bodyParser = require('body-parser');

// POST /start-game
app.post('/', function(req, res, next) {

  var context = {};
  
  console.dir(req.body);
  
  return res.status(200).send(req.body.name + req.body.lastname);
  
  context.game_id   = req.query.game_id   || null;
  context.player_id = req.query.player_id || null;
  
  if (!context.game_id || ! context.player_id) {
    res.status(400).send(req.body.name + req.body.lastname);
    next();
  }

  var template = __dirname + '/views/gamestate';
  
  res.set('Content-Type', 'application/vnd.uber+json');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
