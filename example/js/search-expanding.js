$(document).ready(function() {

    $('#search-expanding').click(function () {
        if ( $(this).is(".expanded") ) {
            $(this).removeClass('expanded');
            $('#search-input').animate({width: 0}, function(){
                $('#search-input').hide();
                $('#icon-search').show();
            });
        }
        else {
            $(this).addClass('expanded');
            $('#icon-search').hide();
            $('#search-input').show().animate({width: 300});
            $("#search-input input").focus();
        }
    })

    $("#search-input input").blur(function () {
        $('#search-expanding').click();
    });

});
