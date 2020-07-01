// Global variables
var navHidden = true;
var sections = [];
var experience = [
    {  
        heading: "Back End Developer",
        subheading: "LynksIn",
        skills: [
            "NodeJS", 
            "TypeScript", 
            "AWS", 
            "Lambda", 
            "Serverless", 
            "MongoDB", 
            "Mongoose", 
            "Firebase", 
            "Sendbird", 
            "Git",
            "CodeCommit", 
            "CloudWatch"
        ],
        info: [
            "Took over an existing code base of a social application for golfers",
            "Back-end built in NodeJS for IOS, Android, Web apps",
            "Deployed on AWS Lambda using the Serverless framework",
            "Retrieves data from a MongoDB database using Mongoose",
            "Added endpoint for user account creation from Wordpress",
            "Integration with Sendbird for private messaging within IOS and Android apps"
        ],
        date: "January - April 2020",
        location: "Remote",
        image: "images/lynksIn.png"
    },
    {
        heading: "IT Intern",
        subheading: "Johnson & Johnson, IT R&D",
        skills: [
            "AWS",
            "EC2 Cluster",
            "Chef",
            "Docker",
            "Bash Shell",
            "Shell Scripting",
            "Git"
        ],
        info: [
            "Created two Chef cookbooks that maintained a cluster of AWS EC2 instances",
            "Wrote a cookbook that contained Git submodules, automated the authorization of users on a cluster’s execute nodes (AWS EC2 instances), and deployed this cookbook as a Microsoft CycleCloud project",
            "Wrote another cookbook that generated a Docker image with a Chef Client installed on it within a VPC and utilized a base image retrieved from a private Docker registry"
        ],
        date: "May - August 2018",
        location: "Raritan, New Jersey",
        image: "images/j&j.png"
    },
    {
        heading: "Web/UI Video Software Development Intern",
        subheading: "Lenel Systems International, Web Video",
        skills: [
            "TypeScript",
            "Agile Development",
            "Git"
        ],
        info: [
            "Created web video tile for security cameras to replace a legacy application",
            "Wrote TypeScript code to receive video data from a streaming API developed by the back-end team",
            "Implemented reverse function for video player and a buffer that managed loading video data"
        ],
        date: "September - December 2017",
        location: "Pittsford, New York",
        image: "images/lenel.png"
    },
    {
        heading: "Development Intern",
        subheading: "MapAnything",
        skills: [
            "JavaScript",
            "jQuery",
            "SVG.js",
            "HTML",
            "CSS",
            "Salesforce (Apex, Lightning,Visualforce, SOQL, SOSL)",
            "Git"
        ],
        info: [
            "Worked on an indoor mapping application for Dreamforce (Salesforce expo)",
            "Developed an interactive map using HTML, CSS, and JavaScript to visualize conference activities",
            "Stored and retrieved data and images using a Salesforce REST API"
        ],
        date: "June - August 2017",
        location: "Atlanta, Georgia",
        image: "images/mapanything.png"
    }
];
var education = [
    {
        heading: "Rochester Institute of Technology",
        subheading: "Bachelor of Science in Web and Mobile Computing, <i>summa cum laude<i/>",
        info: [
            "GPA: 3.93",
            "<a target=\"_blank\" href=\"https://meritpages.com/William-Redmond/3115530\">Dean's List</a> - Fall 2015 - Fall 2019",
            "<a target=\"_blank\" href=\"https://www.rit.edu/academicaffairs/outstanding-undergraduate-scholars/2019-2020-outstanding-undergraduate-scholars\">Outstanding Scholar Award</a> - Top 1% of undergraduate students that are able to maintain a high standard of academic excellence while also giving back to their community through civic or volunteer work, conducting research, or being engaged in co-op or work in their field of study.",
            "<a target=\"_blank\" href=\"https://www.parchment.com/u/award/6a5ac37512a6887dfc48ff20a26fc7d5\">Diploma</a>",
            "President of RIT Paintball Team"
        ],
        date: "September 2015 - December 2019",
        location: "Rochester, New York",
        image: "images/rit.png"
    },
    // {
    //     heading: "Cardinal Spellman High School",
    //     subheading: "High School Diploma",
    //     info: "",
    //     date: "September 2011 - May 2015",
    //     location: "Brockton, Massachusetts",
    //     image: "images/spellman.jpg"
    // }
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
        url: "images/paintball.jpg",
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
        heading: "Cocktail Project",
        subheading: "Application For New Finding Cocktails",
        skills: [
            "React",
            "Functional Components",
            "JavaScript",
            "Material UI",
            "React-window",
            "SASS",
            "Mobile Responsive",
            "Nodejs",
            "Express",
            "Mongodb",
            "Mongoose"
        ],
        info: [
            "Based on a simple application I created for one of my elective courses, Beverage Fermentations and Distillations",
            "Application is built on a MERN stack (Mongodb, Express, React, Nodejs) and deployed onto AWS Elastic Beanstalk",
            "Designed filters to allow users to find cocktails that match their criteria",
            "Adjusted for both large and small screens",
            "Front-end uses the Material-UI React Framework to render many of its components",
            "<a target='_blank' href='http://cocktailapp-env.eba-kri7kcpa.us-east-1.elasticbeanstalk.com/'>Use Application</a>",
            "<a target='_blank' href='https://github.com/willredmo/react-cocktail'>View Code</a>"
        ],
        date: "",
        location: "",
        image: "images/cocktail.png"
    },
    {
        heading: "BattleFlood",
        subheading: "Turn Based 2 Player Game",
        skills: [
            "JavaScript",
            "jQuery",
            "HTML",
            "LESS",
            "PHP",
            "MySQL",
            "Mobile Responsive"
        ],
        info: [
            "Built this application as a project for one of my upper level courses",
            "The front-end is built in JavaScript/HTML/Less and the back-end is built in PHP/MySQL",
            "Created game logic in the backend that was able to identify adjacent blocks of the same color",
            "Implemented account, lobby, and chat systems into the game",
            "Playable with both large and small screens",
            "<a target='_blank' href='http://ec2-54-85-190-233.compute-1.amazonaws.com/battleflood/client/login.php'>Use Application</a>",
            "<a target='_blank' href='https://github.com/willredmo/battleflood'>View Code</a>"
        ],
        date: "",
        location: "",
        image: "images/battleflood.png"
    }
    
]

$(window).on("load", function() {
    initViewportHeight();
    
    // Generate content
    generateResumeItems();
    // generateSkillItems();
    generatePersonalCarousel();

    // Add event listeners
    handleResize();
    handleMobileNav();
    handleSmoothScroll();
    handleValidateForm();
    handleActiveLink();
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

        let w = window.innerWidth;
        console.log("Width: " + w);

        var offset = $($(this).attr("href")).offset().top + $("body").get(0).scrollTop;
        if (window.matchMedia("(max-width: 990px)").matches) {
            offset -= 56;
            $(".nav").removeClass("showNav");
            navHidden = true;
            console.log("Small smooth scroll");
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
            heightFromTop: $(link.hash).offset().top + $("body").get(0).scrollTop,
            height: $(link.hash).height()
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
            if (fromTop >= section.heightFromTop) {
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
        }
    });
}

function generateItem(data) {
    var html = $("#templates .item").clone();
    $(html).find(".content h3").html(data.heading);
    $(html).find(".content h4").html(data.subheading);

    if (data.hasOwnProperty("skills")) {
        var skillsHtml = "";
        for (var i = 0; i < data.skills.length; i++) {
            skillsHtml += "<span class=\"badge badge-pill badge-primary\">"+data.skills[i]+"</span>";
        }
        $(html).find(".content .skills").html(skillsHtml);
    }
    
    var infoHtml = "";
    if (Array.isArray(data.info)) {
        infoHtml = "<ul>";
        var customBullet = "<span class='material-icons'>arrow_right</span>";
        // Generate Education
        for (var i = 0; i < data.info.length; i++) {
            infoHtml += "<li>"+customBullet+data.info[i]+"</li>";
        }
        infoHtml += "</ul>";
    } else {
        infoHtml = data.info
    }
    $(html).find(".content .info").html(infoHtml);

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
    return new Promise(resolve => {
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
    });
}

