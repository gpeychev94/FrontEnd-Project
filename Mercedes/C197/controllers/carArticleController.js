$(document).ready(function(){
	var xhttp1,xhttp2, xhttp3;
  var effectsTime = 500;
  
  function ajax_change(url, page, _xhttp) {
    $( "#main" ).on('click', url, function() {
      $("button").removeClass("activeButton");
      $("#main").animate({opacity : 0.1}, function(){
      $(this).addClass("activeButton");
       _xhttp = new XMLHttpRequest();
    _xhttp.onreadystatechange = function() {
      if (_xhttp.readyState == 4 && _xhttp.status == 200) {
        $("#main").html(_xhttp.responseText);
      }
    };
    _xhttp.open("GET", page, true);
    _xhttp.send();
      }).animate({opacity : 1});
    });
  }

  ajax_change('#carReviewC197', "Mercedes/C197/wow.html", xhttp1);
  ajax_change('#carCharacteristicsC197', "Mercedes/C197/characteristic.html", xhttp2);
  ajax_change('#carTestDriveC197', "Mercedes/C197/testDrive.html", xhttp3);


});