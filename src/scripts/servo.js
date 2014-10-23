
function servo(client) {
  return function(deck) {
    ;(function () {
      var elems = document.querySelectorAll('.servo-cw')
      var elem;

      for (var i = 0; i < elems.length; i++) {
        elem = elems[i]
        elem.onclick = function() {
          client.publish('servo/cw', '0.3')
          return false;
        }
      }
    })()

    ;(function () {
      var elems = document.querySelectorAll('.servo-ccw')
      var elem;

      for (var i = 0; i < elems.length; i++) {
        elem = elems[i]
        elem.onclick = function() {
          client.publish('servo/ccw', '0.3')
          return false;
        }
      };
    })()

    ;(function () {
      var elems = document.querySelectorAll('.servo-stop')
      var elem;

      for (var i = 0; i < elems.length; i++) {
        elem = elems[i]
        elem.onclick = function() {
          client.publish('servo/stop', 'true')
          return false;
        }
      }
    })()
  }
};

module.exports = servo;
