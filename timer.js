//根据天，时，分，秒的ID找到相对应的元素

var time_day = document.getElementById("times_day");

var time_hour = document.getElementById("times_hour");

var time_minute = document.getElementById("times_minute");

var time_second = document.getElementById("times_second");




 var time_end = 20*1000;
  var time_distance = time_end;
setTimeout("count_down()",1000);//设置每一秒调用一次倒计时函数 

//定义倒计时函数

function count_down(){ 

   // var time_now = new Date();  // 获取当前时间
// 
   // time_now = time_now.getTime();

   time_distance -= 1000;  // 时间差：活动结束时间减去当前时间   

   var int_day, int_hour, int_minute, int_second;   

 if(time_distance >= 0){
 	 if(time_distance < 10*1000)  {
 		 document.getElementById("times").style.backgroundColor="#ff0000";

 	} 

     // 天数   

     int_day = Math.floor(time_distance/86400000)

     time_distance -= int_day * 86400000; 

 

 // 小时

        int_hour = Math.floor(time_distance/3600000) 

        time_distance -= int_hour * 3600000;  

 

// 分钟   

     int_minute = Math.floor(time_distance/60000)    

    time_distance -= int_minute * 60000; 

 

 // 秒数  

      int_second = Math.floor(time_distance/1000)    

 

    // 判断小时小于10时，前面加0进行占位

        if(int_hour < 10) 

        int_hour = "0" + int_hour;  

 

// 判断分钟小于10时，前面加0进行占位      

  if(int_minute < 10)    

   int_minute = "0" + int_minute;  

 

 // 判断秒数小于10时，前面加0进行占位 

       if(int_second < 10) 

       int_second = "0" + int_second;       

 

// 显示    

time_day.innerHTML = int_day;

time_hour.innerHTML = int_hour; 

time_minute.innerHTML = int_minute; 

time_second.innerHTML = int_second;

setTimeout("count_down()",1000);

    }else{    
document.getElementById("times").innerHTML = "It's over";

   }

}
