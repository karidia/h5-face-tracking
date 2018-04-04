/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"index","1":"faceJq","2":"face"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const getdata = "../../"; // 服务器接口
// var getdata = "../../getdata/";//本地接口

module.exports = {
};



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
__webpack_require__(6);
var url = __webpack_require__(0);

//模板配置
var tplArr = [];
var template = __webpack_require__(2);
var modalTpl = __webpack_require__(7);
tplArr['modal'] = template.compile(modalTpl.replace(/^\s*|\s*$/g, ""));

function Main() {
  var _this = this;
  this.main = function () {
    this.event(this, 'touchstart', "ts-btn");
    this.event(this, 'click', "ts-click");
    this.event(this, 'touchend', "te-btn");
    this.event(this, 'tap', 'm-tap');
    this.init();
  };
  //事件封装
  this.event = function (_this, type, name) {
    $(document).on(type, '[' + name + ']', function (e) {
      var event = $($(this)[0]).attr(name);
      var Fun = event.split(',');
      _this[Fun[0]]($($(this)[0]), Fun[1], e);
    });
  };
  this.snapshot = function (ths) {
    var cv = canvas.getContext('2d');
    cv.getContext('2d').drawImage(video, 0, 0, 400, 300);
    //把canvas图像转为img图片
    img.src = canvas.toDataURL("image/png");
  };
  //设置cookie
  this.setCookie = function (name, value, timeout) {
    var d = new Date();
    d.setDate(d.getDate() + timeout);
    document.cookie = name + '=' + value + ';expires=' + d;
  };
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
  };
  this.init = function () {};

  return this.main();
};

Array.prototype.cloneArrObj = function () {
  var a = [];
  for (var i = 0, l = this.length; i < l; i++) {
    a.push(cloneObj(this[i]));
  }return a;
};
var cloneObj = function cloneObj(obj) {
  var str,
      newobj = obj.constructor === Array ? [] : {};
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj), //序列化对象
    newobj = JSON.parse(str); //还原
  } else {
    for (var i in obj) {
      newobj[i] = _typeof(obj[i]) === 'object' ? cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};
var main = new Main();
module.exports = main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var template = __webpack_require__(3);

	template.config('escape',false);
	
	//时间输出
	template.helper('H24', function (content) {
	    var myDate = new Date();
	    var h = myDate.getHours();
	    var m = '';
	    for(var i = 0;i<24;i++){
	        var selected = '';
	        if(h == i){selected = 'selected="selected"'}
	        m+= '<option '+selected+' value="'+i+'">'+i+':00</option>'
	    }
	    return m;
	});
    //比较生日
    template.helper('getYear', function(content){
        var t = new Date(content);
        var s = new Date('1926/01/01');
        var e = new Date('2004/01/01');
        var tDate = t.getTime();
        var sDate = s.getTime();
        var eDate = e.getTime();
        //console.log(tDate);
        // console.log(sDate);
        // console.log(eDate);
        if(tDate>eDate || tDate<sDate){
            return '';
        }else{
            return content;
        }
        //return d.getFullYear();
    });

    //邮箱判断
    template.helper('checkEmail', function(content){  
        if(content=='noemail@noemail.com'||content=='aa@hotmail.com'||content=='ABC123@163.COM'||content=='123456@qq.com'){
            return '';
        }else{
            return content;
        }
       
    });
	//数组转字符串输出
	template.helper('join', function(content){
	    return content.join(",");
	});
    //手机号中间转*
    template.helper('hideMobile', function(content){
        var phone = content;
        var mphone =phone.substr(3,4);//substr(start,length)第四位开始长度为4
        return phone.replace(mphone,"****");
    });
    //姓名中间转*
    
    // 格式化卡号
    template.helper('spaceNum', function(content){
        var cardnum = content;
        var scardnum =cardnum.substring(0,4)+" "+cardnum.substring(4,8)+" "+cardnum.substring(8,12);//substr(start,length)第四位开始长度为4
        return scardnum;
    });
    //计算购买记录总金额&总积分
    template.helper('recordInfo', function(content){
        var info = {
            "Point":0,
            "TotalAmount":0,
        }
        for(var i = 0;i<content.length;i++){
            info.Point += content[i].Point;
            info.TotalAmount += content[i].TotalAmount;
        }
        return info;
    });
    //过滤特定用户名
    template.helper('filter', function(content){
        if(content=='会员'||content=='先生' ||content=='客户' ||content=='女士'||content=='男士'||content=='官网消费者'){
            return '';
        }else{
            return content;
        }
    });
    //过滤城市中最后一个“市”字
    template.helper('filterWord', function(content){
        //replace(/市/g," ")
        var after = content;
        var city = after.substr(-1);//
        return after.replace(city,"");
    });

    //换行
    //$("#content").val($("#content").val().replace(/[\r\n]/g,""));
    template.helper('Enter', function(content){
        var after = content.replace(/\r\n/g, "<br>");
        return after;
    });
	//日期格式
	/**   
     * 对日期进行格式化，  
     * @param date 要格式化的日期  
     * @param format 进行格式化的模式字符串  
     *     支持的模式字母有：  
     *     y:年,  
     *     M:年中的月份(1-12),  
     *     d:月份中的天(1-31),  
     *     h:小时(0-23),  
     *     m:分(0-59),  
     *     s:秒(0-59),  
     *     S:毫秒(0-999),  
     *     q:季度(1-4)  
     * @return String  
     */  
	template.helper('xx', function(date, format,type){ 
        //console.log(type);
    if(type==1){
        if(date==''){return "";}
    } else{
        if(date==''){return "1985-01-01";}
    }
      
        date = new Date(date.replace(/\-/g, "/"));  
        //console.log(date);
        var map = {  
            "M": date.getMonth() + 1, //月份   
            "d": date.getDate(), //日   
            "h": date.getHours(), //小时   
            "m": date.getMinutes(), //分   
            "s": date.getSeconds(), //秒   
            "q": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds() //毫秒   
        };  
          
        format = format.replace(/([yMdhmsqS])+/g, function(all, t){  
            var v = map[t];  
            if (v !== undefined) {  
                if (all.length > 1) {
                    v = '0' + v;
                    v = v.substr(v.length - 2);  
                }  
                return v;  
            }  
            else if (t === 'y') {  
                    return (date.getFullYear() + '').substr(4 - all.length);  
                }  
            return all;  
        });  
        return format;  
	});

    //日期--星期
    template.helper('week', function(date){
        var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var myDate = new Date(Date.parse(date.replace(/-/g, "/"))); 
        return weekDay[myDate.getDay()];
    });
    
module.exports = template;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;e.openTag="{{",e.closeTag="}}";var z=function(a,b){var c=b.split(":"),d=c.shift(),e=c.join(":")||"";return e&&(e=", "+e),"$helpers."+d+"("+a+e+")"};e.parser=function(a){a=a.replace(/^\s/,"");var b=a.split(" "),c=b.shift(),e=b.join(" ");switch(c){case"if":a="if("+e+"){";break;case"else":b="if"===b.shift()?" if("+b.join(" ")+")":"",a="}else"+b+"{";break;case"/if":a="}";break;case"each":var f=b[0]||"$data",g=b[1]||"as",h=b[2]||"$value",i=b[3]||"$index",j=h+","+i;"as"!==g&&(f="[]"),a="$each("+f+",function("+j+"){";break;case"/each":a="});";break;case"echo":a="print("+e+");";break;case"print":case"include":a=c+"("+b.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(e)){var k=!0;0===a.indexOf("#")&&(a=a.substr(1),k=!1);for(var l=0,m=a.split("|"),n=m.length,o=m[l++];n>l;l++)o=z(o,m[l]);a=(k?"=":"=#")+o}else a=d.helpers[c]?"=#"+c+"("+b.join(",")+");":"="+a}return a}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return d}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof exports?module.exports=d:this.template=d}();


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "{{if tType == 'test'}}\n<div>test</div>\n{{/if}}\n"

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);