$(document).ready(function() {

    // get absolute toc container
    var toc = $("#toc");
    var section = $(".paraTitle");

    var content = "<p>Table of Contents</p>";

    section.each(function(index) {
        var title = "<div class='tocContent'><p><a href='#' data-section-index='" + index + "'>" + $(this).text() + "</a></p></div>";
        content += title;
    });

    toc.append(content);

    toc.find("a").on("click", function(event) {
        event.preventDefault();

        var targetIndex = $(this).data("section-index");

        var targetSection = section.eq(targetIndex);
        $("html, body").animate({
            scrollTop: targetSection.offset().top - 95
        }, 500);
    });

});
