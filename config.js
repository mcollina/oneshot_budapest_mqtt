
var local = {
  brokerMQTT: 'mqtt://localhost',
  brokerWS: 'ws://localhost:3000'
}

var internet = {
  brokerMQTT: 'mqtt://test.mosca.io',
  brokerWS: 'ws://test.mosca.io'
}

module.exports = local

// comment to use local
//module.exports = internet
