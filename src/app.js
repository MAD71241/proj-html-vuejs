const app = new Vue({

    el: "#app",

    data: {
        searchQuery: "",
        navbarLinks: [
            "Home",
            "Pages",
            "Courses",
            "Features",
            "Blog",
            "Shop"
        ]
        ,
        logos: [
            "client-logo-01", "client-logo-02", "client-logo-03", "client-logo-04", "client-logo-05", "client-logo-06",
        ]
        ,
        courses: [
            {
                price: 40.00,
                title: "Learning to Write as a Professional Author",
                lessons: 20,
                students: 50,
                imgpath: "stock-full-hd-01-480x298.jpg"
            }
            , {
                price: 0,
                title: "Customer-centric Info-Tech Strategies",
                lessons: 24,
                students: 769,
                imgpath: "stock-full-hd-02-480x298.jpg"
            }
            , {
                price: 19.00,
                title: "Open Programming Courses for Everyone: Python",
                lessons: 17,
                students: 62,
                imgpath: "stock-full-hd-03-480x298.jpg"
            }
            , {
                price: 26.00,
                title: "Academic Listening and Note-taking",
                lessons: 14,
                students: 67,
                imgpath: "stock-full-hd-04-480x298.jpg"
            }
            , {
                price: 39.00,
                title: "Master JQuery in a Short Period of Time",
                lessons: 6,
                students: 51,
                imgpath: "stock-full-hd-05-480x298.jpg"
            }
            , {
                price: 59.00,
                title: "Introduction to Javascript for Beginners",
                lessons: 14,
                students: 76,
                imgpath: "stock-full-hd-06-480x298.jpg"
            }
            ,
        ]
        ,
        features: [
            {
                title: "Customize Preferences",
                description: "Learners are given the right to arrange and customize their study schedule and timetable based on preferencies.",
                imgpath: "home-2-image-box-01.png",
                linkdescription: "Start here"
            }
            , {
                title: "Cloud Storage",
                description: "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
                imgpath: "home-2-image-box-02.png",
                linkdescription: "Get Free Quote"
            }
            , {
                title: "Multimedia Channels",
                description: "We provide study materials with various formats; video, audio, slides, doc, prints, books and applications.",
                imgpath: "home-2-image-box-03.png",
                linkdescription: "Start here"
            }
            ,
        ]
        ,
        stats: [
            {
                title: "Succesfully trained",
                counter: 1790,
                subject: "Enrolled Learners"
            }
            , {
                title: "Proudly Received",
                counter: 19,
                subject: "Countrywide awards"
            }
            , {
                title: "Firmly Established",
                counter: 24,
                subject: "Local branches"
            }
            , {
                title: "Getting Featured On",
                counter: 1090,
                subject: "Blog posts"
            }
            ,
        ],
    }
    ,

    methods: {
    }
    ,
    mounted () {
        allCounters = document.querySelectorAll(".statcounter")
        allCounters.forEach(counter => {
            counter.innerText = '0'
            updateCounter = () => {
                const target = +counter.getAttribute("data-target")
            }
            updateCounter()
        });
    }
})