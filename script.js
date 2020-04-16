// Global variables
var navHidden = true;
var sections = [];
var experience = [
    {
        heading: "IT Intern",
        subheading: "Johnson & Johnson",
        info: "Intern within IT R&D and worked on two Chef cookbooks. The first cookbook which contained Git submodules, automated the authorization of users on a cluster’s execute nodes (AWS EC2 instances) and deployed this cookbook as a Microsoft CycleCloud project. The second cookbook generated a Docker image with Chef Client installed on it within a VPC and utilized a base image retrieved from a private Docker registry.",
        date: "May 2018 - August 2018",
        location: "Raritan, New Jersey",
        image: "images/j&j.png"
    },
    {
        heading: "Web/UI Video Software Development Intern",
        subheading: "Lenel Systems International",
        info: "Worked in a team on web video tile for security cameras. Application is built in Typescript and consumes a private video streaming API to display live and recorded video in forward and reverse.",
        date: "September 2017 - December 2017",
        location: "Pittsford, New York",
        image: "images/lenel.png"
    },
    {
        heading: "Development Intern",
        subheading: "MapAnything",
        info: "Worked on indoor mapping application for Dreamforce (Salesforce expo). Application was created using HTML, CSS, JavaScript. Retrieved data from Salesforce using REST API.",
        date: "June 2017 - August 2017",
        location: "Atlanta, Georgia",
        image: "images/mapanything.png"
    }

];
var education = [
    {
        heading: "Rochester Institute of Technology",
        subheading: "Bachelor of Science in Web and Mobile Computing",
        info: "GPA: 3.93<a target=\"_blank\" href=\"https://meritpages.com/William-Redmond/3115530\">Dean's List</a><a target=\"_blank\" href=\"https://www.rit.edu/academicaffairs/outstanding-undergraduate-scholars/2019-2020-outstanding-undergraduate-scholars\">Outstanding Scholar Award</a>",
        date: "September 2015 - December 2019",
        location: "Rochester, New York",
        image: "images/rit.png"
    },
    {
        heading: "Cardinal Spellman High School",
        subheading: "High School Diploma",
        info: "",
        date: "September 2011 - May 2015",
        location: "Brockton, Massachusetts",
        image: "images/spellman.jpg"
    }
];
var skills = [
    {
        heading: "Front-End",
        skills:[
            {
                name: "HTML/CSS",
                value: 100
            },
            {
                name: "JavaScript",
                value: 100
            },
            {
                name: "jQuery",
                value: 90
            },
            {
                name: "TypeScript",
                value: 70
            },
            {
                name: "LESS",
                value: 60
            },
            {
                name: "React",
                value: 55
            },
            {
                name: "AngularJS",
                value: 35
            }
            
        ]
    },
    {
        heading: "Back-End",
        skills:[
            {
                name: "PHP",
                value: 100
            },
            {
                name: "Java",
                value: 90
            },
            {
                name: "NodeJS",
                value: 70
            },
            {
                name: "Python",
                value: 60
            },
            {
                name: "C#",
                value: 60
            },
            {
                name: "SalesForce (Apex, SOQL, SOSL)",
                value: 50
            },
            {
                name: "Ruby",
                value: 40
            },
            {
                name: "C",
                value: 30
            }
        ]
    }
];
var personalPictures = [
    {
        url: "images/scituate.jpg",
        header: "",
        label: ""
    },
    {
        url: "images/paintball1.jpg",
        header: "",
        label: ""
    },
    {
        url: "images/parents.jpg",
        header: "",
        label: ""
    },
    
];
var projects = [
    {
        heading: "BattleFlood",
        subheading: "Turn Based 2 Player Game",
        info: `
        I built this application as project for one of my upper level courses. The front-end is built in JavaScript/HTML/Less and the back-end is built in PHP. The game is one on one where each player takes turns selecting a color and takes control of the adjacent blocks same colors. All players start in the main lobby and move to a separate lobby when they start a match. I have also built from scratch both an account and chat system. I have also made this application mobile accessible.
        <a target='_blank' href='http://ec2-54-85-190-233.compute-1.amazonaws.com/battleflood/client/login.php'>Link to application</a><a target='_blank' href='https://github.com/willredmo/battleflood'>View Code</a>",
        `,
        date: "",
        location: "",
        image: "images/battleflood.png"
    },
    {
        heading: "Cocktail Project",
        subheading: "Application For New Finding Cocktails",
        info: `This application is another project for one of my elective courses: Beverage Fermentations and Distillations. I built the application solely in JavaScript/HTML/Less and retrieved the data from a free API called "CocktailDB". The user can search for random cocktails to make or use the multiple types of filters to find the cocktail they desire. This application is also mobile accessible.
        <a target='_blank' href='http://ec2-54-85-190-233.compute-1.amazonaws.com/battleflood/client/login.php'>Link to application</a><a target='_blank' href='https://github.com/willredmo/cocktailProject'>View Code</a>",
        `,
        date: "",
        location: "",
        image: "images/cocktail.png"
    }
]

$(window).on("load", function() {
    initViewportHeight();
    handleResize();
    handleMobileNav();
    handleSmoothScroll();
    handleActiveLink();
    generateResumeItems();
    generateSkillItems();
    handleValidateForm();
    generatePersonalCarousel();
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

        // Skills height resize
        resizeSkillsHeight();
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
        if (e.target.className != "nav-link") {
            return; 
        }

        var offset = $($(this).attr("href")).offset().top + $("body").get(0).scrollTop;
        if (window.matchMedia("(max-width: 990px)").matches) {
            offset -= 56;
            $(".nav").removeClass("showNav");
            navHidden = true;
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

    // Generate Education
    for (var i = 0; i < education.length; i++) {
        $("#education").append(generateItem(education[i])); 
    }

    // Generate Projects
    for (var i = 0; i < projects.length; i++) {
        $("#projects").append(generateItem(projects[i])); 
    }
}

function generateSkillItems() {
    for (var i = 0; i < skills.length; i++) {
        $("#skills").append(generateCard(skills[i]));
    }
    
    // fix card height
    setTimeout(() => {
        resizeSkillsHeight();
    }, 50);
} 

function resizeSkillsHeight() {
    $(".flip-card").each(function() {
        if ($(this).parent().attr("id") != "templates") {
            var currentHeight = this.offsetHeight;
            var contentHeight;
            if (isMobile()) {
                contentHeight = $(this).find(".flip-card-back .content")[0].offsetHeight + $(this).find(".flip-card-back h3")[0].offsetHeight;
            } else {
                contentHeight = $(this).find(".flip-card-back .content")[0].offsetHeight;
            }

            if (contentHeight != currentHeight) {
                $(this).height(contentHeight+"px");
            }

            // console.log("___________________________________________");
            // console.log("Initial: "+currentHeight);
            // console.log("Content: "+contentHeight);
        }
    });
}

function generateItem(data) {
    var html = $("#templates .item").clone();
    $(html).find(".content h3").html(data.heading);
    $(html).find(".content h4").html(data.subheading);
    $(html).find(".content p").html(data.info);
    $(html).find(".date").html(data.date);
    $(html).find(".location").html(data.location);
    $(html).find(".img").css("background-image", "url("+data.image+")");
    return html;
}

function generateCard(data) {
    var html = $("#templates .flip-card").clone();

    $(html).find(".flip-card-front h3, .flip-card-back h3").html(data.heading);

    for (var i = 0; i < data.skills.length; i++) {
        $(html).find(".flip-card-back .content").append(generateSkill(data.skills[i]));
    }

    var flipped = false;
    $(html).click(function() {
        if (isMobile()) {
            // Do nothing
        } else {
            if (flipped) {
                $(html).find(".flip-card-inner").removeClass("flipped");
            } else {
                $(html).find(".flip-card-inner").addClass("flipped");
            }
            flipped = !flipped;
        }
    });
    return html;
}

function generateSkill(data) {
    var html = $("#templates .skill").clone();
    $(html).find("h4").html(data.name);
    $(html).find(".progress-bar").attr("aria-valuenow", data.value).css("width", data.value+"%");
    return html;
}

function handleValidateForm() {
    $("#contact button").click(function() {
        console.log("Validate form");
        $("#contact form").submit();
    });
}

function isMobile() {
    return window.innerWidth < 1000;
}

function generatePersonalCarousel() {
    var carouselDiv = $("#templates .carousel").clone();
    $(carouselDiv).attr("id", "personalCarousel");
    $(carouselDiv).find(".carousel-control-prev, .carousel-control-next").attr("href", "#personalCarousel");
    personalPictures.forEach(picture => {
        console.log(picture);
        // Item
        var carouselItem = $("#templates .carousel-item").clone();
        $(carouselItem).find(".img").css("background-image", "url('"+picture.url+"')");
        $(carouselItem).find("h5").text(picture.header);
        $(carouselItem).find("p").text(picture.label);

        // Indicator
        var carouselIndicator = document.createElement("li");
        $(carouselIndicator).attr({
            "data-target": "#personalCarousel",
            "data-slide-to": personalPictures.indexOf(picture)
        });

        // Make first picture active
        if (personalPictures.indexOf(picture) == 0) {
            $(carouselIndicator).addClass("active");
            $(carouselItem).addClass("active");
        } 

        $(carouselDiv).find(".carousel-inner").append(carouselItem);
        $(carouselDiv).find(".carousel-indicators").append(carouselIndicator);
    });
    
    $("#personal").append(carouselDiv);
    $("#personalCarousel").carousel();
}

