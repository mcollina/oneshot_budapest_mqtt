
var buildUpdater = require('./updater');

function mqtt(client) {
  return function(deck) {
    var updateHumidity = buildUpdater('#humidity')
    var updateIrObject = buildUpdater('#ir-object')
    var updateIrAmbient = buildUpdater('#ir-ambient')

    client.subscribe('deck/next')
    client.subscribe('deck/prev')
    client.subscribe('sensortag/ir/+')

    client.on('message', function(topic, payload) {
      var command = topic.replace('deck/', '')

      if (deck[command])
        return deck[command]()

      if (topic == 'sensortag/ir/object') {
        updateIrObject(payload)
      }

      if (topic == 'sensortag/ir/ambient') {
        updateIrAmbient(payload)
      }
    })

    ;(function () {
      var elem = document.querySelector('#lcd')
      elem.onchange = function() {
        client.publish('mcyun/lcd', elem.value)
        deck.next()
      }
    })()

    ;(function() {
      var form = document.querySelector('form.disabled')
      form.onsubmit = function() { return false }
    })()
  }
};

module.exports = mqtt;
