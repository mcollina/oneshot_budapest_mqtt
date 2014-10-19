
function buildUpdater(key) {
  return function(value) {
    var elem = document.querySelector(key)
    value = parseFloat(value) * 100
    elem.innerText = Math.round(value) / 100
  }
}

module.exports = buildUpdater;
