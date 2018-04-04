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
    _video = document.getElementById('video');
    _canvas = document.getElementById('canvas');
    _context = _canvas.getContext('2d');
    _img = document.getElementById('img');
    _vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia ||
      navagator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getMedia({
      video: true, //使用摄像头对象
      audio: false  //不适用音频
    }, function (strem) {
      console.log(strem);
      var _s = _vendorUrl.createObjectURL(strem);
      console.log(_s)
      // video.attr('src', _s);
      _video.src = _s;
      _video.play();
      var t = setInterval(function () {
        function p() {
          var prom = new Promise(function (resolve, reject) {
            _context.drawImage(video, 0, 0, 400, 300);
            _img.src = _canvas.toDataURL("image/png");
            resolve(1);
          })
          return prom;
        }
        p().then(function (res) {
          // setTimeout(function(){
          $('#img').faceDetection({
            complete: function (faces) {
              console.log(faces, 'faces')
              if (faces && faces[0] && faces[0].x) {
                $("img, canvas").show();
                clearInterval(t);
                _context.strokeStyle = '#a64ceb';
                _context.strokeRect(faces[0].x, faces[0].y, faces[0].width, faces[0].height);
                _context.font = '11px Helvetica';
                _context.fillStyle = "#fff";
                _context.fillText('x: ' + faces[0].x + 'px', faces[0].x + faces[0].width + 5, faces[0].y + 11);
                _context.fillText('y: ' + faces[0].y + 'px', faces[0].x + faces[0].width + 5, faces[0].y + 22);
              }
            }
          // }, 500)
          });
        })
      }, 1000)

    }, function (error) {
      //error.code
      console.log(error);
    });
  }
  return this.main();
}
var index = new Index();
module.exports = index;
