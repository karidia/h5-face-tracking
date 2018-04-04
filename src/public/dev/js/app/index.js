/* eslint-disable */
const main = require('main');
const url = require('url');

const video = $('video'),
  snap = $('tack'),
  img = $('img'),
  vendorUrl = window.URL || window.webkitURL;

function Index() {
  var _this = this;
  this.main = function (e) {
    _this.event();
    _this.init(); 
  }
  this.event = function (e) {
    main.event(this, 'click', "ts-click");
  }
  // this.snapshot = function (ths) {
  //   ctx.drawImage(video, 0, 0, 400, 300);
  //   //把canvas图像转为img图片
  //   img.src = mycanvas.toDataURL("image/png");
  // }
  this.init = function () {
    console.log('init')
    //媒体对象
    navigator.getMedia = navigator.getUserMedia ||
      navagator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getMedia({
      video: true, //使用摄像头对象
      audio: false  //不适用音频
    }, function (strem) {
      console.log(strem);
      var _s = vendorUrl.createObjectURL(strem);
      console.log(_s)
      // video.attr('src', _s);
      $('video')[0].src = _s;
      $('video')[0].play();
    }, function (error) {
      //error.code
      console.log(error);
    });
  }
  return this.main();
}
var index = new Index();
module.exports = index;
