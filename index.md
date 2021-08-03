<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./src/img/favicon-32x32.png" type="image/x-icon">
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700&family=Roboto:wght@100;500;700&display=swap"
        rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
        integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <!-- SCSS -->
    <link rel="stylesheet" href="./dist/css/app.css">
    <title>Maxcoach</title>
</head>

<body class="bg-hintofred">
    <div id="app">
        <!-- Header section -->
        <header class="d-flex align-items-center bg-white">
            <div class="container">
                <div class="row justify-content-between">
                    <img src="./src/img/dark-logo.png" alt="">
                    <div class="navbar">
                        <ul class="d-flex flex-row">
                            <li class="text-gunpowder" v-for="link in navbarLinks">{{ link }} <i
                                    class="fas fa-chevron-down"></i></li>
                            <i class="far fa-user-circle text-gunpowder"></i>
                        </ul>
                        <div class="searchbar position-relative">
                            <input class="rounded" type="text" placeholder="Search..." v-model="searchQuery">
                            <i class="text-royal-blue fas fa-search position-absolute"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- /Header section -->

        <!-- ombra -->
        <hr>
        <!-- /ombra -->

        <main>
            <!-- Jumbotron -->
            <div class="jumbo-container bg-white">
                <div class="container jumbotron bg-white">
                    <div class="row">
                        <div class="col-5 d-flex align-items-center">
                            <div class="text-container">
                                <h1 class="font-weight-bold text-gunpowder">Distant learning for further expansion</h1>
                                <p class="text-gunpowder">Learning is a life-long journey that in fact we never find the
                                    terminate stop. Stop
                                    searching, enjoy the process.</p>
                                <button class="rounded bg-mountain-meadow text-white font-weight-bold"><i
                                        class="fas fa-download"></i> Download free guide
                                </button>
                                <h6 class="text-gunpowder">Have questions? <span
                                        class="font-weight-bold text-mountain-meadow">Get Free Sample! <i
                                            class="fa fa-arrow-right" aria-hidden="true"></i> </span></h6>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="portrait-container">
                                <img src="./src/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
                                    class="portrait" alt="">
                                <img style="left: 0; bottom: 50%;" class="position-absolute"
                                    src="./src/img/maxcoach-shape-08.png" alt="">
                                <img style="left: 0; bottom: 25%;" class="position-absolute"
                                    src="./src/img/maxcoach-shape-08.png" alt="">
                                <img style="width: 25%; bottom: 0; right: 70px;" class="position-absolute"
                                    src="./src/img/maxcoach-shape-07.png" alt="">
                                <img style="top: 20%;" class="position-absolute" src="./src/img/maxcoach-shape-02.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="testimonials d-flex justify-content-around align-items-center">
                            <img v-for="logo in logos" class="testimonial-logo" :src="'./src/img/'+logo+'.png'" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Jumbotron -->

            <!-- Courses section -->
            <div class="courses bg-hintofred">
                <div class="container text-center">
                    <h6 id="section-title" class="text-uppercase text-shady-lady">Stimulated to learn?
                    </h6>
                    <h3 class="font-weight-bold text-gunpowder">Featured Online Courses</h3>
                    <div class="card-container">
                        <div class="row">
                            <div v-for="course in courses" class="col-6">
                                <div class="row justify-content-end ml-0">
                                    <img :src="'./src/img/'+course.imgpath" alt="">
                                    <div class="col-9">
                                        <div class="info-container text-left">
                                            <div v-if="course.price === 0" class="price text-mountain-meadow">
                                                <h5 class="font-weight-bold">Free</h5>
                                            </div>
                                            <div v-else class="price text-mountain-meadow">
                                                <h5 class="font-weight-bold">$ {{course.price}}.<span
                                                        style="font-size: 14px;">00</span></h5>
                                            </div>
                                            <div class="card-title">
                                                <h6 class="font-weight-bold text-gunpowder">{{course.title}}</h6>
                                            </div>
                                            <div class="stats">
                                                <span class="text-shady-lady font-weight-bold"><i
                                                        class="far fa-file-alt"></i> {{course.lessons}}
                                                    lessons</span><span class="text-shady-lady font-weight-bold"><i
                                                        class="far fa-user" style="margin: 0 10px;"></i>
                                                    {{course.students}} students</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="rounded bg-mountain-meadow text-white font-weight-bold">View all courses <i
                            class="fa fa-arrow-right" aria-hidden="true"></i> </button>
                </div>
            </div>
            <!-- /Courses section -->

            <!-- Features section -->
            <div class="features bg-white">
                <div class="title-container text-center">
                    <h6 class="text-uppercase text-shady-lady">Maxcoach available courses</h6>
                    <h3 class="font-weight-bold text-gunpowder">Access <span
                            class="font-weight-light text-mountain-meadow"> Smart Tutoring </span> Programs for
                        Benefits.
                    </h3>
                </div>
                <div class="container">
                    <div class="row">
                        <div v-for="feature in features" class="col-4">
                            <img :src="'./src/img/'+feature.imgpath" alt="">
                            <div class="info-container">
                                <h5 class="text-gunpowder font-weight-bold">{{feature.title}}</h5>
                                <p>{{feature.description}}</p>
                                <a href="">{{feature.linkdescription}} <i class="fa fa-arrow-right"
                                        aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- YouTube mockup -->
                        <div class="col-8">
                            <img style="z-index: 1;" class="position-relative"
                                src="./src/img/home-2-popup-video-poster.jpg" alt="">
                            <img style="z-index: 2;" class="position-absolute" src="./src/img/icon-youtube-play.png"
                                alt="">
                            <img id="right-decoration" src="./src/img/maxcoach-shape-07-150x150.png" alt="">
                            <img id="left-decoration" src="./src/img/maxcoach-shape-05.png" alt="">
                        </div>
                        <!-- /YouTube mockup -->
                        <div class="col-4">
                            <h6 class="font-weight-bold text-uppercase text-shady-lady">Get Started <span
                                    class="font-weight-bold text-gunpowder">Effortlessly</span></h6>
                            <h2 class="font-weight-bold text-gunpowder">Enjoy Our <span
                                    class="font-weight-normal text-mountain-meadow"> Companionship</span></h2>
                            <p>Sneek peek into what has in store for you on our online teaching and mentoring portal.
                                Seek for some hidden hints of early-bird rewards as well.</p>
                            <a href="">Download free guidebook <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Features section -->

            <!-- Carousel section -->
            <div class="carousel-top">

                <!-- titolo -->
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="title-container text-center">
                            <h6 class="text-uppercase text-edward font-weight-bold">Great words about Maxcoach</h6>
                            <h3 class="font-weight-bold text-gunpowder">Our <span
                                    class="font-weight-light text-mountain-meadow"> top learners' </span> Verbatim.
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- /titolo -->

                <!-- carousel main -->
                <div class="row even mb-5">
                    <div class="col-4" >
                        <div class="inactive-card rounded" v-show="!isLess">
                            <h6 class="font-weight-bold">{{prevcard.title}}</h6>
                            <p>{{prevcard.comment}}</p>
                            <div class="identify d-flex flex-row">
                                <img :src="'./src/img/'+prevcard.avatar" alt="">
                                <div class="text-container">
                                    <h6 class="text-uppercase font-weight-bold">{{prevcard.name}}</h6>
                                    <p>/ {{prevcard.jobtitle}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="active-card rounded bg-white">
                            <h6 class="font-weight-bold">{{currentcard.title}}</h6>
                            <p>{{currentcard.comment}}</p>
                            <div class="identify d-flex flex-row">
                                <img :src="'./src/img/'+currentcard.avatar" alt="">
                                <div class="text-container">
                                    <h6 class="text-uppercase font-weight-bold">{{currentcard.name}}</h6>
                                    <p>/ {{currentcard.jobtitle}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="inactive-card rounded" v-show="!isMore">
                            <h6 class="font-weight-bold">{{nextcard.title}}</h6>
                            <p>{{nextcard.comment}}</p>
                            <div class="identify d-flex flex-row">
                                <img :src="'./src/img/'+nextcard.avatar" alt="">
                                <div class="text-container">
                                    <h6 class="text-uppercase font-weight-bold">{{nextcard.name}}</h6>
                                    <p>/ {{nextcard.jobtitle}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- selectors -->
                <div class="d-flex carousel-counter justify-content-center mb-5">
                    <div @click="sliderSelector(index)" v-for="(carouselcard, index) in carouselCards"><i
                            :class="counter === index ? 'fas fa-circle' : 'far fa-circle'"></i></div>
                </div>
                <!-- /selectors -->

                <!-- /carousel main -->

                <div class="container">
                    <div class="claim text-center">
                        <h4 class="font-weight-bold text-gunpowder">Start today for getting <span
                                class="text-mountain-meadow font-weight-normal"> Online Certification</span></h4>
                        <h3 class="font-weight-bold text-gunpowder">You can be your own guiding star with our help!</h3>

                    </div>
                    <div class="row justify-content-between">
                        <img src="./src/img/maxcoach-shape-01.png" alt="">
                        <button class="rounded bg-mountain-meadow text-white font-weight-bold">Get started now</button>
                        <img src="./src/img/maxcoach-shape-02.png" alt="">
                    </div>
                </div>
            </div>
            <!-- /Carousel section -->

            <!-- Stats section -->
            <div class="stats bg-white">
                <div class="container">
                    <div class="row">
                        <div v-for="stat in stats" class="col-3 text-center">
                            <h6 class="stat-title font-weight-bold">{{stat.title}}</h6>
                            <h1 :data-target="stat.counter" class="font-weight-bold text-mountain-meadow statcounter">
                            </h1>
                            <h6 class="text-uppercase text-gunpowder font-weight-bold">{{stat.subject}}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Stats section -->

            <!-- Blog Posts section -->
            <div class="featured-blog-posts bg-hintofred">
                <div class="container">
                    <div class="row">
                        <!-- left section -->
                        <div class="col-4">
                            <h6 class="text-uppercase text-gunpowder">Enjoyable insights</h6>
                            <h4 class="font-weight-bold text-gunpowder">Most Viewed <span
                                    class="font-weight-normal text-mountain-meadow">Best Blogs</span></h4>
                            <ul>
                                <li class="font-weight-bold" v-for="link in blogLinks">
                                    <div class="text-container d-flex align-items-center">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i><a class="text-gunpowder"
                                            href="#">{{ link.title }}</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- /left section -->

                        <!-- featured blog posts -->
                        <div class="col-8">
                            <div class="row">
                                <div class="info-container bg-white" v-for="post in featuredPosts">
                                    <img :src="'./src/img/'+post.imglink+post.imgext" alt="">
                                    <h6 class="text-uppercase text-shady-lady font-weight-bold">{{post.kind}}</h6>
                                    <h6 class="text-gunpowder font-weight-bold">{{post.title}}
                                    </h6>
                                    <div class="stats">
                                        <span class="text-shady-lady font-weight-bold"><i class="far fa-calendar"></i>
                                            {{post.date}}</span><span class="text-shady-lady font-weight-bold"><i
                                                class="far fa-eye" style="margin: 0 10px;"></i>{{post.views}}
                                            views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /featured blog posts -->
                    </div>
                </div>
            </div>
            <!-- /Blog Posts section -->

            <!-- Subscribe section -->
            <div class="subscribe text-center bg-white">
                <div class="text-container">
                    <h1 class="font-weight-bold text-gunpowder">Subscribe <span
                            class="font-weight-normal text-mountain-meadow">Newsletter</span></h1>
                    <p>Enter your email address to register to our newsletter subscription delivered on a regular basis
                    </p>
                    <div class="subscribe-input d-flex flex-row">
                        <input type="email" id="email" name="email" required placeholder="Enter your email">
                        <button class="bg-mountain-meadow text-white font-weight-bold">Subscribe</button>
                    </div>
                </div>
                <div class="image-container">
                    <img src="./src/img/maxcoach-shape-07-100x100.png" alt="">
                    <img src="./src/img/maxcoach-shape-02.png" alt="">
                </div>
            </div>
            <!-- /Subscribe section -->

            <!-- footer section -->
            <div class="footer">
                <div class="container">
                    <div class="row pb-5">
                        <!-- address column -->
                        <div class="col-6 text-shady-lady">
                            <h4 class="text-gunpowder">Address</h4>
                            <div class="address">382 NE 191st # 87394 Miami, FL 33179-3899</div>
                            <div class="address">+1(305)547-9909 (9am - 5pm EST, Monday - Friday)</div>
                            <div class="address">support@maxcoach.com</div>
                            <div class="row">
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>
                        </div>
                        <!-- /address column -->

                        <!-- Explore column -->
                        <div class="col-3">
                            <h4>Explore</h4>
                            <div class="row pt-0">
                                <div v-for='link in exploreLinks' class="col-6" style="padding-top: 10px;">
                                    <a class="text-shady-lady" href="">{{link.title}}</a>
                                </div>
                            </div>
                        </div>
                        <!-- /Explore column -->

                        <!-- Information column -->
                        <div class="col-3" style="padding-left: 30px; padding-right: 0;">
                            <h4>Information</h4>
                            <div class="row pt-0">
                                <div v-for="link in infoLinks" class="col-12" style="padding-top: 10px;"><a
                                        class="text-shady-lady">{{link.title}}</a></div>
                            </div>
                        </div>
                        <!-- /Information column -->
                    </div>
                </div>
                <h6 class="text-center pb-5 text-shady-lady">&copy; 2020 Maxcoach, All Rights Reserved</h6>
            </div>
            <!-- /footer section -->
        </main>
    </div>
    <!-- VueJs -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <!-- myJs -->
    <script src="./dist/js/app.js"></script>
</body>

</html>
