$(document).ready(function(){
    var mas_day = [[],[],[],[],[]];
    var left = document.createElement('div');
    var right = document.createElement('div');
    var arr_img = ['url(img/1.jpg)','url(img/2.jpg)','url(img/3.jpg)','url(img/4.jpg)','url(img/5.jpg)'];
    var body = document.body;
    
    left.id = 'left'; 
    right.id = 'right';
    
    body.appendChild(left);
    body.appendChild(right);
    
    $.get(
   "http://api.openweathermap.org/data/2.5/forecast",
        
       {
       "id" : "707470",
       "appid" : "0e1ecde1b691c12ec84b758227ebe661"
       },
      function(json){
    var mas_buf = [];
    var count = 0;
    var buf = 0;
    
    for(var i = 0; i < json.list.length; i++){
    var date = new Date(json.list[i].dt_txt);
  
   if(i == 0){ buf  = date.getDate(); mas_buf[count] = buf; count++
    } else{ if(buf != date.getDate()) {buf = date.getDate(); mas_buf[count] = buf; count++};
   }
    }
    //console.log(mas_buf);
    
     var count_0 = 0;
        var count_1 = 0;
        var count_2 = 0;
        var count_3 = 0;
        var count_4 = 0;
    
    for(var i = 0; i < json.list.length; i++){
        var date = new Date(json.list[i].dt_txt);
        if(date.getDate() == mas_buf[0]){ mas_day[0][count_0] = json.list[i]; count_0++} 
        if(date.getDate() == mas_buf[1]){ mas_day[1][count_1] = json.list[i]; count_1++} 
        if(date.getDate() == mas_buf[2]){ mas_day[2][count_2] = json.list[i]; count_2++} 
        if(date.getDate() == mas_buf[3]){ mas_day[3][count_3] = json.list[i]; count_3++} 
        if(date.getDate() == mas_buf[4]){ mas_day[4][count_4] = json.list[i]; count_4++} 
    }
    
         
          
    for(var i = 0; i < mas_day.length; i++){
    var slide = document.createElement('div');
    slide.id = "slide_"+i;
    slide.style.backgroundImage = arr_img[i];
    if(i == 1) {slide.className = "active slide"} else {
        slide.className = "none slide"
    }
//console.log(mas_day);
        for(var j = 0; j < mas_day[i].length; j++){
        var inf = document.createElement('div');
        //console.log(i+" "+j)
        inf.className = 'inf';
        inf.id = 'inf'+i;
        inf.innerHTML = "<div id=clouds_"+i+">"+"clouds "+ Math.round(mas_day[i][j].clouds.all)+"</div>" +
                      "<div id=humidity_"+i+">"+ "humidity "+ Math.round(mas_day[i][j].main.humidity)+"</div>" +
                      "<div id=pressure_"+i+">"+" pressure "+ Math.round(mas_day[i][j].main.pressure)+"</div>" +
                    "<div id=temp_"+i+">"+ "temp "+ Math.round(mas_day[i][j].main.temp)+"</div>";
         slide.appendChild(inf);
        }
   
  j = 0;
   
    body.appendChild(slide);
        
    }
           left.onclick = function(){ 
               slider(mas_day.length-1,-1);
    };
          right.onclick = function(){ 
               slider('0',1);
    };
         function slider(str_count,next_or_back){
                   var a = 0;
               var sl = document.getElementsByClassName('active');       
               var str_id = sl[0].id;
               var str_num = str_id[str_id.length-1];
               
               if(str_num == '0') { str_num  = str_count} else
               if(next_or_back == -1){str_num = +str_num-1;}
               
               if(str_num == mas_day.length-1) { str_num  = str_count}else
              if(next_or_back == 1){str_num = +str_num+1;}
             
              
               str_id = str_id.substring(0,str_id.length-1) + str_num;
               //console.log(str_id);
               sl[0].className = "none slide active";
               ++a;
               
               if(a==1) sl[0].classList.remove("active");
               
                var sl_next = document.getElementById(str_id);
               //console.log(sl_next.id);
               ++a;
               if(a==2)sl_next.classList.remove("none");
               ++a;
               if(a==3)sl_next.className = "slide active";
         };
      } 
    ); 

});




