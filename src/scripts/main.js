// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  run = require('bespoke-run'),
  camera = require('bespoke-camera'),
  forms = require('bespoke-forms')
  sensortag = require('./sensortag'),
  mqtt = require('mows'),
  config = require('../../config'),
  video = require('./video'),
  servo = require('./servo'),
  client = mqtt.createClient(config.brokerWS);


global.mqtt = mqtt;
global.mqttBroker = config.brokerWS;

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  run(),
  sensortag(client),
  servo(client),
  camera({ width: "320px" }),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  video(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

