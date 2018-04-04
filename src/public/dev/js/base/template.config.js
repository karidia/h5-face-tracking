/* eslint-disable */
var template = require('template');

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
