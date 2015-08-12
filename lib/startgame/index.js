var app = module.exports = module.parent.exports.setAppDefaults()
  , bodyParser = require('body-parser');

// POST /start-game
app.post('/', function(req, res, next) {

  var context = {};
  
  game_title,player_one_name
  
  var player_one_name = req.body.player_one_name || null;
  var game_title      = req.body.game_title || null;
  
  context.game_id       = "8e819026-4134-11e5-a151-feff819cdc9f";
  context.player_one_id = "8e819026-4134-11e5-a151-feff819cdc9f"; 
    
  var template = __dirname + '/views/gamestart';
  
  res.set('Content-Type', 'application/vnd.uber+json');
  res.render(template, context);

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
});
