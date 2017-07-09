/**
 * Created by Dreamer on 7/9/2017.
 */
$(document).ready(function () {
    $('#submitCity').click(function () {
        return getWeather();
    });
    
    function getWeather() {
     var city = $('#city').val();
     if(city !== ''){
         $.ajax({
           url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=17eba74f84031edcca493f45cbd6a582',
             type:"GET",
             dataType:"json",
             success:function (data) {
 var widget = showResults(data);
                 $('#showWeather').html(widget);
                 $('#city').val('');
             }
         })
     }else {
         $('#error').html("<div class='alert alert-danger'>City can not be found</div>")
     }
    }
    
    
    function showResults(data) {
        return "<p>Temperature: "+data.main.temp+" &deg;C</p> "+
                "<p>Min Temperature: "+data.main.temp_min+"&deg;C</p>"+
                "<p>Max Temperature: "+data.main.temp_max+"&deg;C</p>"+
            "<p>Pressure: "+data.main.pressure+" hpa</p>"+
            "<p>humidity: "+data.main.humidity+" %</p>"+
            "<p>Wind Speed: "+data.wind.speed+"</p>"+
            "<p>Sun Rise: "+data.sys.sunrise+"</p>" +
            "<p>Sun Set: "+data.sys.sunset+"</p>";
        
    }
});