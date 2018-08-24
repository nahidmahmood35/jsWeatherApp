//alert('good day');

$(document).ready(function(){
    
    $("#todayDay").text('');
    $("#todayDate").text('');
    $("#todayNum").text('');
    $("#todayHumidity").text('');
    $("#todayWindspeed").text('');
    $("#todaySunrise").text('');
    $("#todaySunset").text('');
    $("#todayLocation").text('');
  //var city = "Dhaka";
 // var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
  //change city variable dynamically as required
 // $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json")
      //.success(function(data){
           // alert(data.query.results.channel.item.condition.temp);
              //  console.log(data);
               // $('#temp').html("Temperature in " + city + " is " + //data.query.results.channel.item.condition.temp + "°C");
  //});
    
    //-------------------
    
   // $('#forecastText').html('<div class="col-sm-3"><div class="forecast"><div class="forecast-header"><div class="day">Tuesday,</div><div class="day">19 Aug 2018</div></div><div class="forecast-content"><div class="degree">23<sup>o</sup>C</div><span>Max Temp</span><span>:</span><span id="">30</span><span>c</span></br><span>Min Temp</span><span>:</span><span id="">30</span><span>c</span></br><span>Type</span><span>:</span><span id="">Mostly Sunny</span></div></div></div>');
    
    //------------------
});




$(document).ready(function() {
       
    $('.js-example-basic-single').select2();
});
function GetWeather(){
    
    $("#forecastText").empty();
   //alert($("#sel1").val()); 
   // var city = '';
     var city = $("#sel1").val();
    //alert(city);
    var searchtext = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + ",Bangladesh') and u='c'"
  //var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json")
      .success(function(data){
      
      var windSpeed = data.query.results.channel.wind.speed;
      var todayDay = data.query.results.channel.item.forecast[0].day;
      var todayDate = data.query.results.channel.item.forecast[0].date;
      var todayNum = data.query.results.channel.item.condition.temp;
      var todayHumidity = data.query.results.channel.atmosphere.humidity;
      var todaySunrise = data.query.results.channel.astronomy.sunrise;
      var todaySunset = data.query.results.channel.astronomy.sunset;
      var todayLocation = data.query.results.channel.item.title;
      //alert(todayDay);
        //alert(JSON.stringify(data));
      $("#todayDay").text(todayDay + 'Day');
      $("#todayWindspeed").text(windSpeed);
      $("#todayDate").text(todayDate);
      $("#todayNum").text(todayNum);
      $("#todayHumidity").text(todayHumidity);
      $("#todaySunrise").text(todaySunrise);
      $("#todaySunset").text(todaySunset);
      $("#todayLocation").text(todayLocation);
      
      //$.each(data, function (key, item) {
                   // var rows = "<option value=" + item.name + ">" + item.name + "</option>";
                    //$('#txtGender').append(rows);
                //});
      
      var ForcastData = data.query.results.channel.item.forecast;
        
        //alert(JSON.stringify(ForcastData));    
      
      $.each(ForcastData, function (key, item) {
                         
          
          var test = '<div class="col-sm-3"><div class="forecast"><div class="forecast-header"><div class="day">'+item.day+',</div><div class="day">'+item.date+'</div></div><div class="forecast-content"><span>Max Temp</span><span>:</span><span id="">'+item.high+'</span><span>c</span></br><span>Min Temp</span><span>:</span><span id="">'+item.low+'</span><span>c</span></br><span>Type</span><span>:</span><span id="">'+item.text+'</span></div></div></div>';
          
          
          
                        //$('#forecastText').html(item.day);
                        
                    
                       
                    //$('#forecastText').append(test);
                
                    $('#forecastText').append(test);
          
                    //alert(item.day);
                    
                });
  });
}



















