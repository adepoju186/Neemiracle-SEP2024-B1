$(document).ready(function () {
    console.log("jQuery is loaded and ready!");
    $("#RightToLeft").on("click", function () {
        $("#slide").animate({
            marginLeft: "0",
        });
        $(".top").animate({
            marginLeft: "100%",
        });
    });
    $("#LeftToRight").on("click", function () {
        $("#slide").animate({
            marginLeft: "50%",
        });
        $(".top").animate({
            marginLeft: "0",
        });
    });
});