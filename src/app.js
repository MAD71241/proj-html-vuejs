/* componenti slider inutilizzate */
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
    components: { VueperSlides, VueperSlide },

}
/* /componenti slider inutilizzate */

const app = new Vue({

    el: "#app",
    components: { VueperSlides, VueperSlide },
    data: {
        isLess: false,
        isMore: false,
        counter: 1,
        currentcard: 1,
        prevcard: 0,
        nextcard: 2,
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
        cleancard:
        {
            title: "Qui ci andrebbe un V-Show",
            comment: "Non ho abbastanza tempo per implementare una soluzione migliore",
            name: "Michele Deliso",
            jobtitle: "Wannabe Dev"
        }
        ,
        blogLinks: [
            {
                title: "Become a Better Blogger: Content Planning",
                link: ""
            }
            , {
                title: "Promoting Your Online Business on Pinterest",
                link: ""
            }
            , {
                title: "Gamification and Game-Based Learning",
                link: ""
            }
            , {
                title: "Designing an Online Course from Expert's Perspective",
                link: ""
            }
            , {
                title: "Why Online Courses Are The Future of Education",
                link: ""
            }
            ,
        ]
        ,
        featuredPosts: [
            {
                kind: "artist",
                imglink: "blog-01-480x352",
                imgext: ".jpeg",
                title: "Brush Strokes Energize Trees in Paintings",
                date: "May 15, 2020",
                views: 688
            }
            , {
                kind: "artist",
                imglink: "blog-02-480x352",
                imgext: ".jpg",
                title: "Pocket-Sized Notebooks Hold Miniature Paintings",
                date: "May 15, 2020",
                views: 603
            }
            ,
        ]
        ,
        carouselCards: [
            {
                title: "It's a choice of quality for people with special needs",
                comment: "I'm a very strict person so i require everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me.",
                name: "Florence Theves",
                jobtitle: "Multimedia Admin",
                avatar: "testimonial-avata-01.jpg"
            }
            , {
                title: "High level of efficiency and scientific teaching methods",
                comment: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
                name: "Mina Hollace",
                jobtitle: "Freelance",
                avatar: "testimonial-avata-02.jpg"
            }
            , {
                title: "Professional team of specialists and passionate mentors at reach",
                comment: "I need to get a certification for english proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                name: "Madley Pondor",
                jobtitle: "IT Specialist",
                avatar: "testimonial-avata-03.jpg"
            }
            , {
                title: "lorem ipsum title",
                comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eligendi earum vel maxime eos suscipit!",
                name: "Lorem Name",
                jobtitle: "Lorem Title",
                avatar: "testimonial-avata-04.jpg"
            }
            ,
        ],

        exploreLinks: [
            {
                title: "Start here",
                link: "",
            }
            , {
                title: "Success story",
                link: "",
            }
            , {
                title: "Blog",
                link: "",
            }
            , {
                title: "Courses",
                link: "",
            }
            , {
                title: "About us",
                link: "",
            }
            , {
                title: "Contact us",
                link: "",
            }
            ,

        ],
        infoLinks: [
            {
                title: "Membership",
                link: "",
            }
            , {
                title: "Purchase guide",
                link: "",
            }
            , {
                title: "Privacy policy",
                link: "",
            }
            , {
                title: "Terms of service",
                link: "",
            }
        ],

    }
    ,

    methods: {
        sliderSelector(index) {
            this.counter = index;
            const reach = this.carouselCards.length - 1
              if (this.isMore === true && index !== reach) {
                this.isMore = false;
            } else if (this.isLess === true && index !== 0) {
                this.isLess = false;
            }
            this.currentcard = this.carouselCards[this.counter]
            this.prevcard = this.carouselCards[(this.counter - 1)]
            this.nextcard = this.carouselCards[(this.counter + 1)]
            if (index === reach) {
                this.prevcard = this.carouselCards[(this.counter - 1)]
                this.nextcard = this.carouselCards[this.counter]
                this.isMore = true;
            } else if (index === 0) {
                this.nextcard = this.carouselCards[1]
                this.prevcard = this.carouselCards[0]
                this.isLess = true;
            }
        }
        ,
    }
    ,
    mounted() {
        const allCounters = document.querySelectorAll(".statcounter")

        allCounters.forEach(counter => {
            counter.innerText = 0
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target")
                const base = +counter.innerText
                const incremental = 1;
                if (base < target) {
                    counter.innerText = Math.ceil(base + incremental)
                    setTimeout(updateCounter, 2)
                }
            }
            updateCounter()
        });

        const autoCarousel = (index) => {
            const reach = this.carouselCards.length - 1
            if (this.isMore === true && index !== reach) {
                this.isMore = false;
            } else if (this.isLess === true && index !== 0) {
                this.isLess = false;
            }
            this.currentcard = this.carouselCards[this.counter]
            this.prevcard = this.carouselCards[(this.counter - 1)]
            this.nextcard = this.carouselCards[(this.counter + 1)]
            if (index === reach) {
                this.prevcard = this.carouselCards[(this.counter - 1)]
                this.nextcard = this.carouselCards[this.counter]
                this.isMore = true;
            } else if (index === 0) {
                this.nextcard = this.carouselCards[1]
                this.prevcard = this.carouselCards[0]
                this.isLess = true;
            }
        }
        autoCarousel(this.counter)
    }
})