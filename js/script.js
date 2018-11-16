$(document).ready(function(){
    var mas_day = [[],[],[],[],[]];
    $.get(
   "http://api.openweathermap.org/data/2.5/forecast",
        
       {
       "id" : "707470",
       "appid" : "0e1ecde1b691c12ec84b758227ebe661"
       },
      function(json){
          console.log(json);
          var mas_buf = [];
    var count = 0;
     var buf = 0;
    
    for(var i = 0; i < json.list.length; i++){
    var date = new Date(json.list[i].dt_txt);
  
   if(i == 0){ buf  = date.getDate(); mas_buf[count] = buf; count++
    } else{ if(buf != date.getDate()) {buf = date.getDate(); mas_buf[count] = buf; count++};
   }
    }
    console.log(mas_buf);
    
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
        slide.className = "none"
    }
console.log(mas_day);
        for(var j = 0; j < mas_day[i].length; j++){
        var inf = document.createElement('div');
        console.log(i+" "+j)
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
          
      } 
    ); 

});


//var arr = [1,2,3,4];
var arr_img = ['url(img/1.jpg)','url(img/2.jpg)','url(img/3.jpg)','url(img/4.jpg)','url(img/5.jpg)'];

var body = document.body;
//function add_slide(count){
//    for(var i = 0; i < count; i++){
//    var slide = document.createElement('div');
//    slide.id = "slide_"+i;
//    slide.style.backgroundImage = arr_img[i];
//    if(i == 0) {slide.className = "active slide"} else {
//        slide.className = "none"
//    }
//add_info(3);
//function add_info(count_inf){
//        for(var i = 0; i < count_inf; i++){
//        var inf = document.createElement('div');
//        
//        inf.className = 'inf';
//        inf.id = 'inf'+i;
//        inf.innerHTML = "<div id=name_"+i+">sdsd</div>" +
//                      "<div id=icon_"+i+">sdsd<img id=img_"+i+"></div>" +
//                      "<div id=clouds_"+i+">sds</div>" +
//                      "<div id=humidity_"+i+">sd</div>" +
//                      "<div id=pressure_"+i+">sd</div>"
//                      "<div id=temp_"+i+">sds</div>";
//         slide.appendChild(inf);
//        }
//   
//    }   
//   
//    body.appendChild(slide);
//        
//    }
//
//}
//
//add_slide(3);






//          var mas_buf = [];
//    var count = 0;
//     var buf = 0;
//    
//    for(var i = 0; i < json.list.length; i++){
//    var date = new Date(json.list[i].dt_txt);
//  
//   if(i == 0){ buf  = date.getDate(); mas_buf[count] = buf; count++
//    } else{ if(buf != date.getDate()) {buf = date.getDate(); mas_buf[count] = buf; count++};
//   }
//    }
//    console.log(mas_buf);
//    
//     var count_0 = 0;
//        var count_1 = 0;
//        var count_2 = 0;
//        var count_3 = 0;
//        var count_4 = 0;
//    
//    for(var i = 0; i < json.list.length; i++){
//        var date = new Date(json.list[i].dt_txt);
//        if(date.getDate() == mas_buf[0]){ mas_day[0][count_0] = json.list[i]; count_0++} 
//        if(date.getDate() == mas_buf[1]){ mas_day[1][count_1] = json.list[i]; count_1++} 
//        if(date.getDate() == mas_buf[2]){ mas_day[2][count_2] = json.list[i]; count_2++} 
//        if(date.getDate() == mas_buf[3]){ mas_day[3][count_3] = json.list[i]; count_3++} 
//        if(date.getDate() == mas_buf[4]){ mas_day[4][count_4] = json.list[i]; count_4++} 
//    }
//    console.log(mas_day);
//      } 
//    ); 
//
//});
/*
var json = {"cod":"200","message":0.0026,"cnt":40,"list":[{"dt":1542380400,"main":{"temp":275.12,"temp_min":270.698,"temp_max":275.12,"pressure":977.99,"sea_level":1049.96,"grnd_level":977.99,"humidity":86,"temp_kf":4.43},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":36},"wind":{"speed":1.85,"deg":355.504},"snow":{"3h":0.001},"sys":{"pod":"n"},"dt_txt":"2018-11-16 15:00:00"},{"dt":1542391200,"main":{"temp":273.25,"temp_min":269.933,"temp_max":273.25,"pressure":978.14,"sea_level":1050.86,"grnd_level":978.14,"humidity":88,"temp_kf":3.32},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":44},"wind":{"speed":1.96,"deg":38.5048},"snow":{"3h":0.077},"sys":{"pod":"n"},"dt_txt":"2018-11-16 18:00:00"},{"dt":1542402000,"main":{"temp":270.26,"temp_min":268.044,"temp_max":270.26,"pressure":978.16,"sea_level":1051.28,"grnd_level":978.16,"humidity":86,"temp_kf":2.21},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":56},"wind":{"speed":1.57,"deg":37.0019},"snow":{"3h":0.049},"sys":{"pod":"n"},"dt_txt":"2018-11-16 21:00:00"},{"dt":1542412800,"main":{"temp":269.14,"temp_min":268.029,"temp_max":269.14,"pressure":978.25,"sea_level":1051.5,"grnd_level":978.25,"humidity":90,"temp_kf":1.11},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.77,"deg":57.5002},"snow":{"3h":0.427},"sys":{"pod":"n"},"dt_txt":"2018-11-17 00:00:00"},{"dt":1542423600,"main":{"temp":268.076,"temp_min":268.076,"temp_max":268.076,"pressure":978.11,"sea_level":1051.39,"grnd_level":978.11,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.78,"deg":53.5121},"snow":{"3h":0.238},"sys":{"pod":"n"},"dt_txt":"2018-11-17 03:00:00"},{"dt":1542434400,"main":{"temp":268.417,"temp_min":268.417,"temp_max":268.417,"pressure":978.46,"sea_level":1051.83,"grnd_level":978.46,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":1.76,"deg":73.0003},"snow":{"3h":0.215},"sys":{"pod":"d"},"dt_txt":"2018-11-17 06:00:00"},{"dt":1542445200,"main":{"temp":269.764,"temp_min":269.764,"temp_max":269.764,"pressure":978.3,"sea_level":1051.12,"grnd_level":978.3,"humidity":95,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":1.82,"deg":80},"snow":{"3h":0.085},"sys":{"pod":"d"},"dt_txt":"2018-11-17 09:00:00"},{"dt":1542456000,"main":{"temp":270.603,"temp_min":270.603,"temp_max":270.603,"pressure":977.66,"sea_level":1049.99,"grnd_level":977.66,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":1.81,"deg":72.5027},"snow":{"3h":0.07075},"sys":{"pod":"d"},"dt_txt":"2018-11-17 12:00:00"},{"dt":1542466800,"main":{"temp":270.264,"temp_min":270.264,"temp_max":270.264,"pressure":977.64,"sea_level":1050.2,"grnd_level":977.64,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.62,"deg":51.0026},"snow":{"3h":0.09625},"sys":{"pod":"n"},"dt_txt":"2018-11-17 15:00:00"},{"dt":1542477600,"main":{"temp":270.078,"temp_min":270.078,"temp_max":270.078,"pressure":977.29,"sea_level":1050.31,"grnd_level":977.29,"humidity":89,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":1.62,"deg":64.0035},"snow":{"3h":0.105},"sys":{"pod":"n"},"dt_txt":"2018-11-17 18:00:00"},{"dt":1542488400,"main":{"temp":269.881,"temp_min":269.881,"temp_max":269.881,"pressure":976.35,"sea_level":1049.56,"grnd_level":976.35,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.65,"deg":46.002},"snow":{"3h":0.0575},"sys":{"pod":"n"},"dt_txt":"2018-11-17 21:00:00"},{"dt":1542499200,"main":{"temp":269.845,"temp_min":269.845,"temp_max":269.845,"pressure":975.88,"sea_level":1049.18,"grnd_level":975.88,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":76},"wind":{"speed":1.66,"deg":327.001},"snow":{"3h":0.07},"sys":{"pod":"n"},"dt_txt":"2018-11-18 00:00:00"},{"dt":1542510000,"main":{"temp":268.974,"temp_min":268.974,"temp_max":268.974,"pressure":974.07,"sea_level":1047.49,"grnd_level":974.07,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":48},"wind":{"speed":1.41,"deg":288.002},"snow":{"3h":0.0375},"sys":{"pod":"n"},"dt_txt":"2018-11-18 03:00:00"},{"dt":1542520800,"main":{"temp":268.975,"temp_min":268.975,"temp_max":268.975,"pressure":973.01,"sea_level":1046.49,"grnd_level":973.01,"humidity":90,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":76},"wind":{"speed":1.66,"deg":292.5},"snow":{"3h":0.025},"sys":{"pod":"d"},"dt_txt":"2018-11-18 06:00:00"},{"dt":1542531600,"main":{"temp":271.699,"temp_min":271.699,"temp_max":271.699,"pressure":971.35,"sea_level":1043.88,"grnd_level":971.35,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":1.81,"deg":290.501},"snow":{"3h":0.0375},"sys":{"pod":"d"},"dt_txt":"2018-11-18 09:00:00"},{"dt":1542542400,"main":{"temp":272.966,"temp_min":272.966,"temp_max":272.966,"pressure":968.99,"sea_level":1040.65,"grnd_level":968.99,"humidity":92,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":68},"wind":{"speed":2.11,"deg":318.5},"snow":{"3h":0.0175},"sys":{"pod":"d"},"dt_txt":"2018-11-18 12:00:00"},{"dt":1542553200,"main":{"temp":270.648,"temp_min":270.648,"temp_max":270.648,"pressure":967.3,"sea_level":1039.04,"grnd_level":967.3,"humidity":91,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":68},"wind":{"speed":1.81,"deg":314.001},"snow":{"3h":0.0049999999999999},"sys":{"pod":"n"},"dt_txt":"2018-11-18 15:00:00"},{"dt":1542564000,"main":{"temp":270.21,"temp_min":270.21,"temp_max":270.21,"pressure":965.34,"sea_level":1037.43,"grnd_level":965.34,"humidity":85,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":2.21,"deg":294.002},"snow":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2018-11-18 18:00:00"},{"dt":1542574800,"main":{"temp":269.855,"temp_min":269.855,"temp_max":269.855,"pressure":963.67,"sea_level":1035.77,"grnd_level":963.67,"humidity":87,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":2.39,"deg":293.5},"snow":{"3h":0.31},"sys":{"pod":"n"},"dt_txt":"2018-11-18 21:00:00"},{"dt":1542585600,"main":{"temp":270.6,"temp_min":270.6,"temp_max":270.6,"pressure":962.02,"sea_level":1033.9,"grnd_level":962.02,"humidity":88,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.76,"deg":278.501},"snow":{"3h":0.345},"sys":{"pod":"n"},"dt_txt":"2018-11-19 00:00:00"},{"dt":1542596400,"main":{"temp":270.755,"temp_min":270.755,"temp_max":270.755,"pressure":960.64,"sea_level":1032.43,"grnd_level":960.64,"humidity":90,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.61,"deg":285.001},"snow":{"3h":0.285},"sys":{"pod":"n"},"dt_txt":"2018-11-19 03:00:00"},{"dt":1542607200,"main":{"temp":271.065,"temp_min":271.065,"temp_max":271.065,"pressure":960.59,"sea_level":1032.25,"grnd_level":960.59,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":1.51,"deg":295.504},"snow":{"3h":0.44},"sys":{"pod":"d"},"dt_txt":"2018-11-19 06:00:00"},{"dt":1542618000,"main":{"temp":272.375,"temp_min":272.375,"temp_max":272.375,"pressure":960.5,"sea_level":1031.67,"grnd_level":960.5,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":1.72,"deg":10.5},"snow":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2018-11-19 09:00:00"},{"dt":1542628800,"main":{"temp":272.558,"temp_min":272.558,"temp_max":272.558,"pressure":960.12,"sea_level":1030.97,"grnd_level":960.12,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":1.76,"deg":24.005},"snow":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2018-11-19 12:00:00"},{"dt":1542639600,"main":{"temp":272.05,"temp_min":272.05,"temp_max":272.05,"pressure":959.83,"sea_level":1030.97,"grnd_level":959.83,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":1.37,"deg":25.5027},"snow":{"3h":0.69},"sys":{"pod":"n"},"dt_txt":"2018-11-19 15:00:00"},{"dt":1542650400,"main":{"temp":271.801,"temp_min":271.801,"temp_max":271.801,"pressure":959.63,"sea_level":1030.94,"grnd_level":959.63,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":1.56,"deg":55.0019},"snow":{"3h":0.425},"sys":{"pod":"n"},"dt_txt":"2018-11-19 18:00:00"},{"dt":1542661200,"main":{"temp":271.311,"temp_min":271.311,"temp_max":271.311,"pressure":959.28,"sea_level":1030.84,"grnd_level":959.28,"humidity":92,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":68},"wind":{"speed":1.81,"deg":66.5002},"snow":{"3h":0.215},"sys":{"pod":"n"},"dt_txt":"2018-11-19 21:00:00"},{"dt":1542672000,"main":{"temp":270.238,"temp_min":270.238,"temp_max":270.238,"pressure":958.89,"sea_level":1030.6,"grnd_level":958.89,"humidity":81,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":80},"wind":{"speed":1.6,"deg":75.5065},"snow":{"3h":0.26},"sys":{"pod":"n"},"dt_txt":"2018-11-20 00:00:00"},{"dt":1542682800,"main":{"temp":270.141,"temp_min":270.141,"temp_max":270.141,"pressure":958.41,"sea_level":1030.1,"grnd_level":958.41,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":2.06,"deg":102.5},"snow":{"3h":0.255},"sys":{"pod":"n"},"dt_txt":"2018-11-20 03:00:00"},{"dt":1542693600,"main":{"temp":269.839,"temp_min":269.839,"temp_max":269.839,"pressure":958.47,"sea_level":1030.33,"grnd_level":958.47,"humidity":93,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":3.36,"deg":105.004},"snow":{"3h":0.515},"sys":{"pod":"d"},"dt_txt":"2018-11-20 06:00:00"},{"dt":1542704400,"main":{"temp":269.668,"temp_min":269.668,"temp_max":269.668,"pressure":958.86,"sea_level":1030.53,"grnd_level":958.86,"humidity":94,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":88},"wind":{"speed":4.21,"deg":106.501},"snow":{"3h":1.265},"sys":{"pod":"d"},"dt_txt":"2018-11-20 09:00:00"},{"dt":1542715200,"main":{"temp":269.454,"temp_min":269.454,"temp_max":269.454,"pressure":958.28,"sea_level":1029.63,"grnd_level":958.28,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":80},"wind":{"speed":4.01,"deg":107.503},"snow":{"3h":0.26},"sys":{"pod":"d"},"dt_txt":"2018-11-20 12:00:00"},{"dt":1542726000,"main":{"temp":268.931,"temp_min":268.931,"temp_max":268.931,"pressure":957.96,"sea_level":1029.39,"grnd_level":957.96,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":3.21,"deg":105},"snow":{"3h":0.515},"sys":{"pod":"n"},"dt_txt":"2018-11-20 15:00:00"},{"dt":1542736800,"main":{"temp":268.982,"temp_min":268.982,"temp_max":268.982,"pressure":956.88,"sea_level":1028.41,"grnd_level":956.88,"humidity":95,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":3.57,"deg":111.001},"snow":{"3h":0.79},"sys":{"pod":"n"},"dt_txt":"2018-11-20 18:00:00"},{"dt":1542747600,"main":{"temp":269.422,"temp_min":269.422,"temp_max":269.422,"pressure":955.53,"sea_level":1026.83,"grnd_level":955.53,"humidity":96,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":88},"wind":{"speed":3.81,"deg":114.003},"snow":{"3h":1.48},"sys":{"pod":"n"},"dt_txt":"2018-11-20 21:00:00"},{"dt":1542758400,"main":{"temp":270.185,"temp_min":270.185,"temp_max":270.185,"pressure":953.27,"sea_level":1024.21,"grnd_level":953.27,"humidity":96,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":4.81,"deg":104.002},"snow":{"3h":3.42},"sys":{"pod":"n"},"dt_txt":"2018-11-21 00:00:00"},{"dt":1542769200,"main":{"temp":270.617,"temp_min":270.617,"temp_max":270.617,"pressure":951,"sea_level":1021.74,"grnd_level":951,"humidity":96,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13n"}],"clouds":{"all":92},"wind":{"speed":5.04,"deg":105.501},"snow":{"3h":4.2},"sys":{"pod":"n"},"dt_txt":"2018-11-21 03:00:00"},{"dt":1542780000,"main":{"temp":270.672,"temp_min":270.672,"temp_max":270.672,"pressure":950.34,"sea_level":1021.06,"grnd_level":950.34,"humidity":95,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":3.64,"deg":104.004},"snow":{"3h":6.88},"sys":{"pod":"d"},"dt_txt":"2018-11-21 06:00:00"},{"dt":1542790800,"main":{"temp":270.869,"temp_min":270.869,"temp_max":270.869,"pressure":949.84,"sea_level":1020.55,"grnd_level":949.84,"humidity":97,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":3.18,"deg":105.006},"snow":{"3h":6.16},"sys":{"pod":"d"},"dt_txt":"2018-11-21 09:00:00"},{"dt":1542801600,"main":{"temp":271.064,"temp_min":271.064,"temp_max":271.064,"pressure":949.51,"sea_level":1020.22,"grnd_level":949.51,"humidity":98,"temp_kf":0},"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":{"all":92},"wind":{"speed":2.18,"deg":117.5},"snow":{"3h":3.64},"sys":{"pod":"d"},"dt_txt":"2018-11-21 12:00:00"}],"city":{"id":707470,"name":"Ivano-Frankivs’ka Oblast’","coord":{"lat":48.5,"lon":24.5},"country":"UA"}} ;  
    

console.log(json);
 
    var mas_buf = [];
    var count = 0;
     var buf = 0;
    
    for(var i = 0; i < json.list.length; i++){
    var date = new Date(json.list[i].dt_txt);
  
   if(i == 0){ buf  = date.getDate(); mas_buf[count] = buf; count++
    } else{ if(buf != date.getDate()) {buf = date.getDate(); mas_buf[count] = buf; count++};
   }
    }
    console.log(mas_buf);
    
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
    console.log(mas_day);
});
*/
