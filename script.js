$(function() {
    $(".tricky").on({
        mouseover: function() {
            $(this).css({
                left: (Math.random() * 90) + "%",
                top: (Math.random() * 90) + "%"
            });
        }
    });

    $(".btn-wrap").hover(function() {
        $(this).toggleClass('active');
    });

    $('.tricky').on('touchstart', function() {
        $(this).css({
            left: (Math.random() * 90) + "%",
            top: (Math.random() * 90) + "%"
        });
    });
});
