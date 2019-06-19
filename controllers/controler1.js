function getHash()
{
    var url = window.location.href;
    var idx = url.indexOf("#");
    var hash = idx != -1 ? url.substring(idx+1) : "";
    return hash;
}

function change(path){
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

function PorschePanamera()
{
    if(getHash() == "PorschePanameraReview")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/PanameraTurboS/wow.html");
    }
    else if(getHash() == "PorschePanameraCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/PanameraTurboS/characteristic.html");
    }
    else if(getHash() == "PorschePanameraTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/PanameraTurboS/testDrive.html");
    }

}
function PorscheCayman()
{
    if(getHash() == "PorscheCaymanReview")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/Cayman/wow.html");
    }
    if(getHash() == "PorscheCaymanCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/Cayman/characteristic.html");

    }
    if(getHash() == "PorscheCaymanTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Porsche/Cayman/testDrive.html");
    }

}
function LamborghiniAventador()
{
    if(getHash() == "LamborghiniAventadorReview")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/aventador/wow.html");
    }
    else if(getHash() == "LamborghiniAventadorCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/aventador/characteristic.html");
    }
    else if(getHash() == "LamborghiniAventadorTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/aventador/testDrive.html");
    }
    
}
function LamborghiniGallardo()
{
    if(getHash() == "LamborghiniGallardoReview")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/gallardo/wow.html");
    }
    else if(getHash() == "LamborghiniGallardoCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/gallardo/characteristic.html");
    }
    else if(getHash() == "LamborghiniGallardoTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Lamborghini/gallardo/testDrive.html");
    }
    
}
function MercedesC197()
{
    if(getHash() == "MercedesC197Review")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/C197/wow.html");

    }
    else if(getHash() == "MercedesC197Characteristic")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/C197/characteristic.html");
    }
    else if(getHash() == "MercedesC197TestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/C197/testDrive.html");
    }
    
}
function MercedesC217()
{
    if(getHash() == "MercedesC217Review")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/SClass/wow.html")

    }
    else if(getHash() == "MercedesC217Characteristic")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/SClass/characteristic.html");
    }
    else if(getHash() == "MercedesC217TestDrive")
    {
        var xhttp1;
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("Mercedes/SClass/testDrive.html");
    }
    
}
function BMW335i()
{
    if(getHash() == "BMW335iReview")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("BMW/335i/wow.html");
    }
    else if(getHash() == "BMW335iCharacteristic")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("BMW/335i/characteristic.html");
    }
    else if(getHash() == "BMW335iTestDrive")
    {
        var xhttp1;
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        $("button").removeClass("activeButton");
        change("BMW/335i/testDrive.html");
    }
    
}
function menus()
{
    if(getHash() == "BMW")
    {
        var xhttp1;
        change("BMW/BMWModels.html");
    }
    else if(getHash() == "Mercedes")
    {
        var xhttp1;
        change("Mercedes/MercedesModels.html");
    }
    else if(getHash() == "Lamborghini")
    {
        var xhttp1;
        change("Lamborghini/LamborghiniModels.html");
    }
    else if(getHash() == "Porsche")
    {
        var xhttp1;
        change("Porsche/PorscheModels.html");
    }
    
    
}

$(document).ready(function(){
    var xhttp1;
    var effectsTime = 500;
    PorscheCayman();
    PorschePanamera();
    LamborghiniAventador();
    LamborghiniGallardo();
    MercedesC197();
    MercedesC217();
    BMW335i();
    menus();
    $( "#main" ).on('click', '#Mercedes', function() {
        change("Mercedes/mercedesModels.html");
    });
    $( "#main" ).on('click', '#Lamborghini', function() {
        change("Lamborghini/lamborghiniModels.html");
    });
    $( "#main" ).on('click', '#BMW', function() {
        change("BMW/BMWModels.html");
    });
     $( "#main" ).on('click', '#Porsche', function() {
        change("Porsche/PorscheModels.html");
    });
    $( "#main" ).on('click', '#C197', function() {
        $('head').append('<script src="Mercedes/C197/controllers/carArticleController.js"></script>');
        change("Mercedes/C197/wow.html");
    });

    $( "#main" ).on('click', '#Aventador', function() {
        $('head').append('<script src="Lamborghini/aventador/controllers/carArticleController.js"></script>');
        change("Lamborghini/aventador/wow.html");
    });
    $( "#main" ).on('click', '#Gallardo', function() {
        $('head').append('<script src="Lamborghini/gallardo/controllers/carArticleController.js"></script>');
        change("Lamborghini/gallardo/wow.html");
    });
    $( "#main" ).on('click', '#C217', function() {
        $('head').append('<script src="Mercedes/SClass/controllers/carArticleController.js"></script>');
        change("Mercedes/SClass/wow.html");
    });
    $( "#main" ).on('click', '#Panamera', function() {
        $('head').append('<script src="Porsche/PanameraTurboS/controllers/carArticleController.js"></script>');
        change("Porsche/PanameraTurboS/wow.html");
    });
	$( "#main" ).on('click', '#Cayman', function() {
        $('head').append('<script src="Porsche/Cayman/controllers/carArticleController.js"></script>');
        change("Porsche/Cayman/wow.html");
    });
    $( "#main" ).on('click', '#335i', function() {
        $('head').append('<script src="BMW/335i/controllers/carArticleController.js"></script>');
        change("BMW/335i/wow.html");
    });
});

