const app = new Vue ({

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
            ,            {
                price: 0,
                title: "Customer-centric Info-Tech Strategies",
                lessons: 24,
                students: 769,
                imgpath: "stock-full-hd-02-480x298.jpg"
            }
            ,            {
                price: 19.00,
                title: "Open Programming Courses for Everyone: Python",
                lessons: 17,
                students: 62,
                imgpath: "stock-full-hd-03-480x298.jpg"
            }
            ,            {
                price: 26.00,
                title: "Academic Listening and Note-taking",
                lessons: 14,
                students: 67,
                imgpath: "stock-full-hd-04-480x298.jpg"
            }
            ,            {
                price: 39.00,
                title: "Master JQuery in a Short Period of Time",
                lessons: 6,
                students: 51,
                imgpath: "stock-full-hd-05-480x298.jpg"
            }
            ,            {
                price: 59.00,
                title: "Introduction to Javascript for Beginners",
                lessons: 14,
                students: 76,
                imgpath: "stock-full-hd-06-480x298.jpg"
            }
            ,
        ]
    }
    ,

    methods: {

    }
    ,
})