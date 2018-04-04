/* eslint-disable */
require('../../less/app.less');
const url = require('url');

//模板配置
var tplArr = [];
var template = require('templateConfig');
var modalTpl = require('../template/modal.txt');
tplArr['modal'] = template.compile(modalTpl.replace(/^\s*|\s*$/g, ""));

function Main() {
  var _this = this;
  this.main = function () {
    this.event(this, 'touchstart', "ts-btn");
    this.event(this, 'click', "ts-click");
    this.event(this, 'touchend', "te-btn");
    this.event(this, 'tap', 'm-tap');
    this.init();
  }
  //事件封装
  this.event = function (_this, type, name) {
    $(document).on(type, '[' + name + ']', function (e) {
      var event = $($(this)[0]).attr(name);
      var Fun = event.split(',');
      _this[Fun[0]]($($(this)[0]), Fun[1], e);
    });
  } 
  this.snapshot = function (ths) {
    const cv = canvas.getContext('2d'); 
    cv.getContext('2d').drawImage(video, 0, 0, 400, 300);
    //把canvas图像转为img图片
    img.src = canvas.toDataURL("image/png");
  }
  //设置cookie
  this.setCookie = function (name, value, timeout) {
    var d = new Date();
    d.setDate(d.getDate() + timeout);
    document.cookie = name + '=' + value + ';expires=' + d;
  }
  //获取cookie
  this.getCookie = function (name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('='); //['abc','cba']  
      if (arr2[0] == name) {
        return arr2[1];
        console.log(arr2[1]);
      }
    }
    return '';
  }
  this.init = function () {
  }

  return this.main();
};

Array.prototype.cloneArrObj = function () {
  var a = [];
  for (var i = 0, l = this.length; i < l; i++) a.push(cloneObj(this[i]));
  return a;
}
var cloneObj = function (obj) {
  var str, newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj), //序列化对象
      newobj = JSON.parse(str); //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};
var main = new Main();
module.exports = main;
