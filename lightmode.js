$(".mode").on("click", function() {
    if ($(this).hasClass("dark")) {
        $("#mode").attr("href", "light.css")
    }
    else if ($(this).hasClass("light")) {
        $("#mode").attr("href", "style.css")
    }
});