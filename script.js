$(function () {
    $("#button__color").click(function() {
        $(this).toggleClass("active-color");
        $("#button__background").removeClass("active-background");
    })
    $("#button__background").click(function() {
        $(this).toggleClass("active-background");
        $("#button__color").removeClass("active-color");
    })
    $("#color").slider({
        range: "min",
        min: 0,
        max: 16532,
        slide: function (event, ui) {         
            let hex = "#" + ui.value.toString(16);
            if ($("#button__color").hasClass("active-color")) {              
                $("#text").css("color", hex);
            }   
            if ($("#button__background").hasClass("active-background")) {
                $("#background").css("background-color", hex);
            }
        }
    });
});

