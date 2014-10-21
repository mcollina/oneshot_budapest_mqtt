
function video() {
  return function(deck) {

    deck.on("deactivate", function(event) {
      var video = event.slide.querySelector('video');

      if (video) {
        video.pause()
      }

      return true;
    });

    deck.on("activate", function(event) {
      var video = event.slide.querySelector('video');

      if (video) {
        video.play()
      }

      return true
    });
  };
}

module.exports = video;
