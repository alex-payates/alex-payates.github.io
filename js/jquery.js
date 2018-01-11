$(document).ready(function() {
    
    //moves the active line on the nav bar
    $('.navbar > a').click(function() {
        $('.navbar > a').removeClass('active');
            $(this).addClass('active');
    });
    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
            
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){

            window.location.hash = hash;
            }); //animate function
            
        } //end if
    }); //end on click function
    
}); //ready function