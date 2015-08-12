var app = module.exports = module.parent.exports.setAppDefaults();

// POST /join-game
app.post('/', function(req, res, next) {

  var context = {};
  
  var player_two_name = req.body.player_two_name || null;
  var game_id         = req.body.game_id || null;
  
  res.set('Content-Type', 'application/vnd.uber+json');
  
  if (!game_id) {
    var err_tpl = __dirname + '/views/error';
    var err_ctx = {};
    err_ctx.error_message = "Missing form parameter: game_id " + err_tpl;
    err_ctx.layout = null;
    res.status(400);
    // @TODO: renders only part, something needs fixing.
    return res.render(err_tpl, err_ctx);
  }
  
  context.game_id         = game_id;
  context.game_name       = "Firewalls";
  context.player_two_id   = "0ab57b32-e7af-41a7-8523-c3bfc3e87703"; 
  context.player_one_name = "Jasmine Smith";
  context.player_two_name = player_two_name || "Timothy Dobrow";
    
  var template = __dirname + '/views/gamejoined';
  
  res.render(template, context);

});
