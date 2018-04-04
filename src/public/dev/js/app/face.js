/* eslint-disable */
const main = require('main');
const url = require('url');

function Index() {
  var _this = this;
  this.main = function (e) {
    _this.event();
    _this.init();
  }
  this.event = function (e) {
    main.event(this, 'click', "ts-click");
  } 
  this.init = function () {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var tracker = new tracking.ObjectTracker('face');
    // tracker.setInitialScale(4);
    // tracker.setStepSize(2);
    // tracker.setEdgesDensity(0.1);

    tracking.track('#video', tracker, { camera: true });

    // tracker.on('track', function (event) {
    //   context.clearRect(0, 0, canvas.width, canvas.height);

    //   event.data.forEach(function (rect) {
    //     console.log('track', rect)
    //     // context.drawImage(video, 0, 0, 320, 240);
    //     context.strokeStyle = '#a64ceb';
    //     context.strokeRect(rect.x, rect.y, rect.width, rect.height);
    //     context.font = '11px Helvetica';
    //     context.fillStyle = "#fff";
    //     context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
    //     context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    //   });
    // });
  }
  return this.main();
}
var index = new Index();
module.exports = index;
