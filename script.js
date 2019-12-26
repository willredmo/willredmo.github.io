// Global variables
var navHidden = true;
var sections = [];
var experience = [
    {
        heading: "IT Intern",
        subheading: "Johnson & Johnson",
        info: "Intern within IT R&D and worked on two Chef cookbooks. The first cookbook which contained Git submodules, automated the authorization of users on a cluster’s execute nodes (AWS EC2 instances) and deployed this cookbook as a Microsoft CycleCloud project. The second cookbook generated a Docker image with Chef Client installed on it within a VPC and utilized a base image retrieved from a private Docker registry.",
        date: "May 2018 - August 2018",
        location: "Raritan, New Jersey"
    },
    {
        heading: "Web/UI Video Software Development Intern",
        subheading: "Lenel Systems International",
        info: "Worked in a team on web video tile for security cameras. Application is built in Typescript and consumes a private video streaming API to display live and recorded video in forward and reverse.",
        date: "September 2017 - December 2017",
        location: "Pittsford, New York"
    },
    {
        heading: "Development Intern",
        subheading: "MapAnything",
        info: "Worked on indoor mapping application for Dreamforce (Salesforce expo). Application was created using HTML, CSS, JavaScript. Retrieved data from Salesforce using REST API.",
        date: "June 2017 - August 2017",
        location: "Atlanta, Georgia"
    }

];
var education = [];

$(window).on("load", function() {
    initViewportHeight();
    handleResize();
    handleMobileNav();
    handleSmoothScroll();
    handleActiveLink();
    generateResumeItems();
});


function initViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function handleResize() {
    // Fix values on resize
    $(window).resize(function() {
        // Viewport height
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Section sizes
        sections = [];
        $(".nav a").each(function(index, link) {
            sections.push({
                name: link.hash,
                value: $(link.hash).offset().top + $("body").get(0).scrollTop
            });
        });

        // Hide nav if large screen
        if (this.innerWidth > 1000) {
            navHidden = true;
            $(".nav").removeClass("showNav");
        }
    });
}

function handleMobileNav() {
    $("#navButton").click(function() {
        if (navHidden) {
            $(".nav").addClass("showNav");
        } else {
            $(".nav").removeClass("showNav");
        }
        navHidden = !navHidden;
    });
}

function handleSmoothScroll() {
    $('a[href*="#"]').on("click", function(e) {
        e.preventDefault();

        var offset = $($(this).attr("href")).offset().top + $("body").get(0).scrollTop;
        if (window.matchMedia("(max-width: 990px)").matches) {
            offset -= 56;
        }

        $("html, body").stop(true).animate({
            scrollTop: offset,
        }, 1000,"easeInOutCirc");
    });
}   

function handleActiveLink() {
    $(".nav a").each(function(index, link) {
        sections.push({
            name: link.hash,
            value: $(link.hash).offset().top + $("body").get(0).scrollTop
        });
    });

    // Bind to scroll
    $(window).scroll(function() {
        var fromTop = $(this).scrollTop() + 1;
        if (window.matchMedia("(max-width: 990px)").matches) {
            fromTop += 56;
        }
        
        var activeSection;
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (fromTop >= section.value) {
                activeSection = section;
            } else {
                break;
            }
        }

        $(".nav a").not("a[href='"+activeSection.name+"']").removeClass("active");
        $(".nav a[href='"+activeSection.name+"']").addClass("active");
    });
}


function generateResumeItems() {
    // Generate Experience
    for (var i = 0; i < experience.length; i++) {
        $("#experience").append(generateItem(experience[i])); 
    }
}

function generateItem(data) {
    var html = $("#templates .item").clone();
    $(html).find(".content h3").html(data.heading);
    $(html).find(".content h4").html(data.subheading);
    $(html).find(".content p").html(data.info);
    $(html).find(".date").html(data.date);
    $(html).find(".location").html(data.location);
    return html;
}