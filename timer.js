
//dom节点
var times = document.getElementById("times");
//时间量
 var time_distance = 20*1000;
//警告时间
 var time_warn = 10*1000;
setTimeout(function(){count_down(time_distance,times,time_warn)},1000);//设置每一秒调用一次倒计时函数 

//定义倒计时函数

function count_down(time_distance,times,time_warn){ 



   var int_day, int_hour, int_minute, int_second;   

 if(time_distance >= 0){
 	 if(time_distance < time_warn)  {
 		 times.style.backgroundColor="#ff0000";

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
times.innerHTML = '距离活动结束还有：'+int_day+' 天 '+int_hour+' 时 '+int_minute+' 分 '+int_second+' 秒  ';
time_distance -= 1000;
setTimeout(function(){count_down(time_distance,times,time_warn)},1000);

    }else{    
times.innerHTML = "It's over";

   }

}
