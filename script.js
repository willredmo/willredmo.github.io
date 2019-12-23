// Global variables
var navHidden = true;

$(window).on("load", function() {
    initViewportHeight();
    handleMobileNav();
    handleSmoothScroll();
});


function initViewportHeight() {
    // Credit: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

function handleMobileNav() {
    var hiddenHeight = 56;
    var shownHeight = 300;

    $("#navButton").click(function() {
        if (navHidden) {
            $(".nav").css("height", shownHeight+"px");
        } else {
            $(".nav").css("height", hiddenHeight+"px");
        }
        navHidden = !navHidden;
    });
}

function handleSmoothScroll() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        var offset = $($(this).attr('href')).offset().top + $("main").get(0).scrollTop;
        if (window.matchMedia("(max-width: 768px)").matches) {
            offset -= 56;
        }


        // http://gsgd.co.uk/sandbox/jquery/easing/
        $('main').animate({
            scrollTop: offset,
        }, 1000,'easeInOutCirc');
    });
}   
