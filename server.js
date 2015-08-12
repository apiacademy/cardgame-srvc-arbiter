var server = require('nodebootstrap-server');

server.setup(function(runningApp) {
  
  // runningApp.use(require('express-session')({secret: CONF.app.cookie_secret, resave: false, saveUninitialized: false}));
  
  // Choose your favorite view engine(s) 

  runningApp.set('view engine', 'handlebars');
  runningApp.engine('handlebars', require('hbs').__express);

  //// you could use two view engines in parallel (if you are brave):  
  // runningApp.set('view engine', 'j2');
  // runningApp.engine('j2', require('swig').renderFile);

  var cors = require('cors');
  runningApp.options('*', cors()); // include before other routes
  runningApp.use(cors());

  //---- Mounting well-encapsulated application modules
  //---- See: http://vimeo.com/56166857

  runningApp.use(require('homedoc')); // attach to root route
  runningApp.use('/profile',    require('cardgame-profile')); // attach to sub-route
  runningApp.use('/game-state', require('gamestate')); // attach to sub-route
  runningApp.use('/start-game', require('startgame')); // attach to sub-route
  
  // If you need websockets:
  // var socketio = require('socket.io')(runningApp.http);
  // require('fauxchatapp')(socketio);
  
});