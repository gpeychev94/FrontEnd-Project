function getHash()
{
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx != -1 ? url.substring(idx+1) : "";
    return hash;
}

function change(path){
        var xhttp1;
        $("#main").animate({opacity : 0.1}, function(){
        $(this).addClass("activeButton");
         xhttp1 = new XMLHttpRequest();
         xhttp1.onreadystatechange = function() {
            if (xhttp1.readyState == 4 && xhttp1.status == 200) {
              $("#main").html(xhttp1.responseText);
            }
        };
        xhttp1.open("GET", path, true);
        xhttp1.send();
        }).animate({opacity : 1});
}
function X5()
{
    if(getHash() == "BMWX5Review")
    {
        $('head').append('<script src="BMW/X5/controllers/carArticleController.js"></script>');
        change("BMW/X5/wow.html");
    }
    else if(getHash() == "BMWX5Characteristic")
    {
        $('head').append('<script src="BMW/X5/controllers/carArticleController.js"></script>');
        change("BMW/X5/characteristic.html");
    }
    else if(getHash() == "BMWX5TestDrive")
    {
        $('head').append('<script src="BMW/X5/controllers/carArticleController.js"></script>');
        change("BMW/X5/testDrive.html");
    }
}
function Q7()
{
    if(getHash() == "AudiQ7Review")
    {
        $('head').append('<script src="Audi/Q7/controllers/carArticleController.js"></script>');
        change("Audi/Q7/wow.html");
    }
    else if(getHash() == "AudiQ7Characteristic")
    {
        $('head').append('<script src="Audi/Q7/controllers/carArticleController.js"></script>');
        change("Audi/Q7/characteristic.html");
    }
    else if(getHash() == "AudiQ7TestDrive")
    {
        $('head').append('<script src="Audi/Q7/controllers/carArticleController.js"></script>');
        change("Audi/Q7/testDrive.html");
    }
}

function menus()
{
    if(getHash() == "AudiJeeps")
    {
        change("Audi/AudiModels.html");
    }
    else  if(getHash() == "BMWJeeps")
    {
        change("BMW/BMWModelsJeeps.html");
    }
};

$(document).ready(function(){
    var xhttp1;
    var effectsTime = 500;
    menus();
    X5();
    Q7();
    $( "#main" ).on('click', '#AudiJeeps', function() {
        change("Audi/AudiModels.html");
    });
    $( "#main" ).on('click', '#BMWJeeps', function() {
        change("BMW/BMWModelsJeeps.html");
    });
      $( "#main" ).on('click', '#X5', function() {
        $('head').append('<script src="BMW/X5/controllers/carArticleController.js"></script>');
        change("BMW/X5/wow.html");
    });
      $( "#main" ).on('click', '#Q7', function() {
        $('head').append('<script src="Audi/Q7/controllers/carArticleController.js"></script>');
        change("Audi/Q7/wow.html");
    });
});