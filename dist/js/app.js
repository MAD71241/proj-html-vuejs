/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueperslides/dist/vueperslides.css */ "./node_modules/vueperslides/dist/vueperslides.css");
/* componenti slider inutilizzate */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__.VueperSlides,
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__.VueperSlide
  }
});
/* /componenti slider inutilizzate */

var app = new Vue({
  el: "#app",
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__.VueperSlides,
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__.VueperSlide
  },
  data: {
    isLess: false,
    isMore: false,
    counter: 1,
    currentcard: 1,
    prevcard: 0,
    nextcard: 2,
    searchQuery: "",
    navbarLinks: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    logos: ["client-logo-01", "client-logo-02", "client-logo-03", "client-logo-04", "client-logo-05", "client-logo-06"],
    courses: [{
      price: 40.00,
      title: "Learning to Write as a Professional Author",
      lessons: 20,
      students: 50,
      imgpath: "stock-full-hd-01-480x298.jpg"
    }, {
      price: 0,
      title: "Customer-centric Info-Tech Strategies",
      lessons: 24,
      students: 769,
      imgpath: "stock-full-hd-02-480x298.jpg"
    }, {
      price: 19.00,
      title: "Open Programming Courses for Everyone: Python",
      lessons: 17,
      students: 62,
      imgpath: "stock-full-hd-03-480x298.jpg"
    }, {
      price: 26.00,
      title: "Academic Listening and Note-taking",
      lessons: 14,
      students: 67,
      imgpath: "stock-full-hd-04-480x298.jpg"
    }, {
      price: 39.00,
      title: "Master JQuery in a Short Period of Time",
      lessons: 6,
      students: 51,
      imgpath: "stock-full-hd-05-480x298.jpg"
    }, {
      price: 59.00,
      title: "Introduction to Javascript for Beginners",
      lessons: 14,
      students: 76,
      imgpath: "stock-full-hd-06-480x298.jpg"
    }],
    features: [{
      title: "Customize Preferences",
      description: "Learners are given the right to arrange and customize their study schedule and timetable based on preferencies.",
      imgpath: "home-2-image-box-01.png",
      linkdescription: "Start here"
    }, {
      title: "Cloud Storage",
      description: "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
      imgpath: "home-2-image-box-02.png",
      linkdescription: "Get Free Quote"
    }, {
      title: "Multimedia Channels",
      description: "We provide study materials with various formats; video, audio, slides, doc, prints, books and applications.",
      imgpath: "home-2-image-box-03.png",
      linkdescription: "Start here"
    }],
    stats: [{
      title: "Succesfully trained",
      counter: 1790,
      subject: "Enrolled Learners"
    }, {
      title: "Proudly Received",
      counter: 19,
      subject: "Countrywide awards"
    }, {
      title: "Firmly Established",
      counter: 24,
      subject: "Local branches"
    }, {
      title: "Getting Featured On",
      counter: 1090,
      subject: "Blog posts"
    }],
    cleancard: {
      title: "Qui ci andrebbe un V-Show",
      comment: "Non ho abbastanza tempo per implementare una soluzione migliore",
      name: "Michele Deliso",
      jobtitle: "Wannabe Dev"
    },
    blogLinks: [{
      title: "Become a Better Blogger: Content Planning",
      link: ""
    }, {
      title: "Promoting Your Online Business on Pinterest",
      link: ""
    }, {
      title: "Gamification and Game-Based Learning",
      link: ""
    }, {
      title: "Designing an Online Course from Expert's Perspective",
      link: ""
    }, {
      title: "Why Online Courses Are The Future of Education",
      link: ""
    }],
    featuredPosts: [{
      kind: "artist",
      imglink: "blog-01-480x352",
      imgext: ".jpeg",
      title: "Brush Strokes Energize Trees in Paintings",
      date: "May 15, 2020",
      views: 688
    }, {
      kind: "artist",
      imglink: "blog-02-480x352",
      imgext: ".jpg",
      title: "Pocket-Sized Notebooks Hold Miniature Paintings",
      date: "May 15, 2020",
      views: 603
    }],
    carouselCards: [{
      title: "prova0",
      comment: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
      name: "Mina Hollace",
      jobtitle: "Freelance"
    }, {
      title: "prova1",
      comment: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
      name: "Mina Hollace",
      jobtitle: "Freelance"
    }, {
      title: "prova2",
      comment: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
      name: "Mina Hollace",
      jobtitle: "Freelance"
    }, {
      title: "prova3",
      comment: "I am free to learn at my own pace, follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
      name: "Mina Hollace",
      jobtitle: "Freelance"
    }],
    exploreLinks: [{
      title: "Start here",
      link: ""
    }, {
      title: "Success story",
      link: ""
    }, {
      title: "Blog",
      link: ""
    }, {
      title: "Courses",
      link: ""
    }, {
      title: "About us",
      link: ""
    }, {
      title: "Contact us",
      link: ""
    }],
    infoLinks: [{
      title: "Membership",
      link: ""
    }, {
      title: "Purchase guide",
      link: ""
    }, {
      title: "Privacy policy",
      link: ""
    }, {
      title: "Terms of service",
      link: ""
    }]
  },
  methods: {
    sliderSelector: function sliderSelector(index) {
      this.counter = index;

      if (this.isMore === true && index !== 3) {
        this.isMore = false;
      } else if (this.isLess === true && index !== 0) {
        this.isLess = false;
      }

      this.currentcard = this.carouselCards[this.counter];
      this.prevcard = this.carouselCards[this.counter - 1];
      this.nextcard = this.carouselCards[this.counter + 1];

      if (index === 3) {
        this.prevcard = this.carouselCards[this.counter - 1];
        this.nextcard = this.carouselCards[this.counter];
        this.isMore = true;
      } else if (index === 0) {
        this.nextcard = this.carouselCards[1];
        this.prevcard = this.carouselCards[0];
        this.isLess = true;
      }
    }
  },
  mounted: function mounted() {
    var allCounters = document.querySelectorAll(".statcounter");
    allCounters.forEach(function (counter) {
      counter.innerText = 0;

      var updateCounter = function updateCounter() {
        var target = +counter.getAttribute("data-target");
        var base = +counter.innerText;
        var incremental = 1;

        if (base < target) {
          counter.innerText = Math.ceil(base + incremental);
          setTimeout(updateCounter, 2);
        }
      };

      updateCounter();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/vueperslides/dist/vueperslides.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/vueperslides/dist/vueperslides.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vueperslide{white-space:normal;background-size:cover;flex-shrink:0;display:block;width:100%;position:relative}.vueperslide--clone-1{position:absolute;top:0;bottom:0;right:100%}.vueperslides--rtl .vueperslide--clone-1{right:auto;left:100%}.vueperslide[href]{-webkit-user-drag:none}.vueperslide__image{background-size:cover}.vueperslide__image,.vueperslide__loader{position:absolute;top:0;left:0;right:0;bottom:0}.vueperslide__loader{display:flex;flex-direction:column;align-items:center;justify-content:center}.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){height:100%;margin:auto}.vueperslides--fade .vueperslide{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;transition:opacity ease-in-out;transition-duration:inherit}.vueperslides--fade .vueperslide--active,.vueperslides--fade .vueperslide--visible{z-index:1;opacity:1}.vueperslides--slide-image-inside .vueperslide{overflow:hidden}.vueperslides--3d .vueperslide{position:absolute;z-index:-1;height:100%}.vueperslides--3d .vueperslide--active,.vueperslides--3d .vueperslide--next-slide,.vueperslides--3d .vueperslide--previous-slide{z-index:0}.vueperslides--3d .vueperslide--active{z-index:1}.vueperslides--3d .vueperslide[face=front]{transform:rotateY(90deg) translateX(-50%) rotateY(-90deg)}.vueperslides--3d .vueperslide[face=right]{transform:rotateY(90deg) translateX(50%);transform-origin:100% 0}.vueperslides--3d .vueperslide[face=back]{transform:rotateY(270deg) translateX(-50%) rotateY(-90deg)}.vueperslides--3d .vueperslide[face=left]{transform:rotateY(270deg) translateX(-50%);transform-origin:0 0}.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after,.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:before{content:\"\";position:absolute;bottom:100%;left:-1em;right:-1em;height:2em;box-shadow:0 0 20px rgba(0,0,0,.25);z-index:2}.vueperslides:not(.no-shadow):not(.vueperslides--3d) .vueperslides__parallax-wrapper:after{top:100%;bottom:auto}.vueperslides__arrows{color:#fff}.vueperslides__arrows--outside{color:currentColor}.vueperslides__arrow{top:50%;background-color:transparent;border:none;opacity:.7}.vueperslides--rtl .vueperslides__arrow--next,.vueperslides__arrow--prev{right:auto;left:.5em}.vueperslides--rtl .vueperslides__arrow--prev,.vueperslides__arrow--next{left:auto;right:.5em}.vueperslides__arrow:hover{opacity:1}.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--next,.vueperslides__arrows--outside .vueperslides__arrow--prev{right:auto;left:-3.5em}.vueperslides--rtl .vueperslides__arrows--outside .vueperslides__arrow--prev,.vueperslides__arrows--outside .vueperslides__arrow--next{left:auto;right:-3.5em}.vueperslides__paused{top:.7em;right:.7em;opacity:0;text-shadow:0 0 3px rgba(0,0,0,.4);z-index:1}.vueperslides:hover .vueperslides__paused{opacity:1}.vueperslides__bullets:not(.vueperslides__bullets--outside){color:#fff}.vueperslides__bullet{margin:1.5em .6em;padding:0;border:none;background:none}.vueperslides__bullet .default{width:12px;height:12px;border-radius:12px;border:1px solid currentColor;background-color:transparent;box-shadow:0 0 1px rgba(0,0,0,.5),0 0 3px rgba(0,0,0,.3);transition:.4s ease-in-out;box-sizing:border-box}.vueperslides__bullet .default span{display:none}.vueperslides__bullet--active .default{border-width:6px}.vueperslide,.vueperslide__image{background-position:50%}.vueperslide__video{outline:none}.vueperslide--no-pointer-events:before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0}.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){display:flex;flex:1 1 auto;flex-direction:column;align-items:center;justify-content:center;text-align:center}.vueperslide--has-image-inside .vueperslide__content-wrapper,.vueperslide--has-video .vueperslide__content-wrapper,.vueperslide__content-wrapper.parallax-fixed-content{position:absolute;z-index:2;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;justify-content:center;align-items:center;pointer-events:none}.vueperslides{position:relative}.vueperslides--fixed-height .vueperslide,.vueperslides--fixed-height .vueperslides__inner,.vueperslides--fixed-height .vueperslides__parallax-wrapper{height:inherit}.vueperslides--fixed-height .vueperslides__parallax-wrapper{padding-bottom:0!important}.vueperslides--fixed-height.vueperslides--bullets-outside{margin-bottom:4em}.vueperslides__inner{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vueperslides__parallax-wrapper{position:relative;overflow:hidden}.vueperslides--3d .vueperslides__parallax-wrapper{overflow:visible}.vueperslides__track{position:absolute;top:0;height:100%;left:0;right:0;overflow:hidden;z-index:1}.vueperslides--parallax .vueperslides__track{height:200%;transform:translateY(0)}.vueperslides--touchable .vueperslides__track{cursor:ew-resize;cursor:-webkit-grab;cursor:grab}.vueperslides--touchable .vueperslides__track--dragging,.vueperslides--touchable .vueperslides__track--mousedown{cursor:-webkit-grabbing;cursor:grabbing}.vueperslides--3d .vueperslides__track{overflow:visible;perspective:100em}.vueperslides__track-inner{white-space:nowrap;transition:transform .5s ease-in-out;height:100%;display:flex}.vueperslides--no-animation .vueperslides__track-inner{transition-duration:0s!important}.vueperslides--fade .vueperslides__track-inner{white-space:normal;transition:none}.vueperslides--3d .vueperslides__track-inner{transform-style:preserve-3d}.vueperslides__track--mousedown .vueperslides__track-inner{transition:transform .25s ease-in-out!important}.vueperslides__track--dragging .vueperslides__track-inner{transition:none}.vueperslides__arrow{position:absolute;font-size:inherit;color:inherit;text-align:center;transform:translateY(-50%);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;z-index:2;line-height:1}.vueperslides__arrow,.vueperslides__arrow svg{transition:.3s ease-in-out}.vueperslides__arrow svg{vertical-align:middle;stroke:currentColor;fill:none;width:3.5em;padding:1em;stroke-width:1;box-sizing:border-box}.vueperslides__arrow svg:hover{stroke-width:1.3}.vueperslides__paused{position:absolute;transition:.3s ease-in-out}.vueperslides__bullets{display:flex;justify-content:center;position:absolute;bottom:0;left:0;right:0}.vueperslides__bullets--outside{position:relative}.vueperslides__bullet,.vueperslides__bullets button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;z-index:2;display:flex;justify-content:center;align-items:center;color:inherit}.vueperslides__bullet::-moz-focus-inner,.vueperslides__bullets button::-moz-focus-inner{border:0}.vueperslides__fractions{position:absolute;top:.8em;left:.5em;z-index:2;padding:.2em 1em;border:1px solid hsla(0,0%,100%,.5);border-radius:2em;background:hsla(0,0%,100%,.2);color:#fff}.vueperslides__progress{position:absolute;top:0;left:0;right:0;z-index:2;height:6px;color:rgba(0,0,0,.7)}.vueperslides__progress>*{position:absolute;top:0;bottom:0;left:0;background:currentColor;transition:.3s ease-in-out}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vueperslides/dist/vueperslides.css":
/*!*********************************************************!*\
  !*** ./node_modules/vueperslides/dist/vueperslides.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./vueperslides.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/vueperslides/dist/vueperslides.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vueperslides/dist/vueperslides.common.js":
/*!***************************************************************!*\
  !*** ./node_modules/vueperslides/dist/vueperslides.common.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

var wellKnownSymbol = __nested_webpack_require_3663__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __nested_webpack_require_3943__) {

var aFunction = __nested_webpack_require_3943__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __nested_webpack_require_4619__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __nested_webpack_require_4619__("fc6a");
var $getOwnPropertyNames = __nested_webpack_require_4619__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __nested_webpack_require_5447__) {

var DESCRIPTORS = __nested_webpack_require_5447__("83ab");
var propertyIsEnumerableModule = __nested_webpack_require_5447__("d1e7");
var createPropertyDescriptor = __nested_webpack_require_5447__("5c6c");
var toIndexedObject = __nested_webpack_require_5447__("fc6a");
var toPrimitive = __nested_webpack_require_5447__("c04e");
var has = __nested_webpack_require_5447__("5135");
var IE8_DOM_DEFINE = __nested_webpack_require_5447__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __nested_webpack_require_6493__) {

var $ = __nested_webpack_require_6493__("23e7");
var $values = __nested_webpack_require_6493__("6f53").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "0b32":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __nested_webpack_require_6960__) {

var toObject = __nested_webpack_require_6960__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __nested_webpack_require_8390__) {

var DESCRIPTORS = __nested_webpack_require_8390__("83ab");
var fails = __nested_webpack_require_8390__("d039");
var createElement = __nested_webpack_require_8390__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __nested_webpack_require_8903__) {

var classof = __nested_webpack_require_8903__("c6b6");
var regexpExec = __nested_webpack_require_8903__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __nested_webpack_require_9584__) {

var global = __nested_webpack_require_9584__("da84");
var DOMIterables = __nested_webpack_require_9584__("fdbc");
var forEach = __nested_webpack_require_9584__("17c2");
var createNonEnumerableProperty = __nested_webpack_require_9584__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __nested_webpack_require_10308__) {

"use strict";

var $forEach = __nested_webpack_require_10308__("b727").forEach;
var arrayMethodIsStrict = __nested_webpack_require_10308__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __nested_webpack_require_10924__) {

var getBuiltIn = __nested_webpack_require_10924__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __nested_webpack_require_11318__) {

var wellKnownSymbol = __nested_webpack_require_11318__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1c94":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_12378__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_12378__("4192");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_12378__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslide_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __nested_webpack_require_14321__) {

var fails = __nested_webpack_require_14321__("d039");
var wellKnownSymbol = __nested_webpack_require_14321__("b622");
var V8_VERSION = __nested_webpack_require_14321__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __nested_webpack_require_15048__) {

var toInteger = __nested_webpack_require_15048__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __nested_webpack_require_15564__) {

var global = __nested_webpack_require_15564__("da84");
var getOwnPropertyDescriptor = __nested_webpack_require_15564__("06cf").f;
var createNonEnumerableProperty = __nested_webpack_require_15564__("9112");
var redefine = __nested_webpack_require_15564__("6eeb");
var setGlobal = __nested_webpack_require_15564__("ce4e");
var copyConstructorProperties = __nested_webpack_require_15564__("e893");
var isForced = __nested_webpack_require_15564__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __nested_webpack_require_18064__) {

var internalObjectKeys = __nested_webpack_require_18064__("ca84");
var enumBugKeys = __nested_webpack_require_18064__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __nested_webpack_require_18601__) {

"use strict";

var $ = __nested_webpack_require_18601__("23e7");
var notARegExp = __nested_webpack_require_18601__("5a34");
var requireObjectCoercible = __nested_webpack_require_18601__("1d80");
var correctIsRegExpLogic = __nested_webpack_require_18601__("ab13");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __nested_webpack_require_19293__) {

var anObject = __nested_webpack_require_19293__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __nested_webpack_require_19601__) {

var global = __nested_webpack_require_19601__("da84");
var userAgent = __nested_webpack_require_19601__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __nested_webpack_require_20196__) {

var getBuiltIn = __nested_webpack_require_20196__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __nested_webpack_require_20388__) {

var classof = __nested_webpack_require_20388__("f5df");
var Iterators = __nested_webpack_require_20388__("3f8c");
var wellKnownSymbol = __nested_webpack_require_20388__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __nested_webpack_require_20791__) {

var DESCRIPTORS = __nested_webpack_require_20791__("83ab");
var definePropertyModule = __nested_webpack_require_20791__("9bf2");
var anObject = __nested_webpack_require_20791__("825a");
var objectKeys = __nested_webpack_require_20791__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __nested_webpack_require_21540__) {

var isObject = __nested_webpack_require_21540__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __nested_webpack_require_21826__) {

"use strict";

var charAt = __nested_webpack_require_21826__("6547").charAt;
var InternalStateModule = __nested_webpack_require_21826__("69f3");
var defineIterator = __nested_webpack_require_21826__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4192":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "428f":
/***/ (function(module, exports, __nested_webpack_require_23120__) {

var global = __nested_webpack_require_23120__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __nested_webpack_require_23272__) {

var fails = __nested_webpack_require_23272__("d039");
var classof = __nested_webpack_require_23272__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __nested_webpack_require_23857__) {

var wellKnownSymbol = __nested_webpack_require_23857__("b622");
var create = __nested_webpack_require_23857__("7c73");
var definePropertyModule = __nested_webpack_require_23857__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __nested_webpack_require_24564__) {

var isObject = __nested_webpack_require_24564__("861d");
var classof = __nested_webpack_require_24564__("c6b6");
var wellKnownSymbol = __nested_webpack_require_24564__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __nested_webpack_require_25056__) {

var IS_NODE = __nested_webpack_require_25056__("605d");
var V8_VERSION = __nested_webpack_require_25056__("2d00");
var fails = __nested_webpack_require_25056__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __nested_webpack_require_25747__) {

var toIndexedObject = __nested_webpack_require_25747__("fc6a");
var toLength = __nested_webpack_require_25747__("50c4");
var toAbsoluteIndex = __nested_webpack_require_25747__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __nested_webpack_require_27092__) {

"use strict";

var $ = __nested_webpack_require_27092__("23e7");
var $filter = __nested_webpack_require_27092__("b727").filter;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_27092__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __nested_webpack_require_27755__) {

"use strict";

var bind = __nested_webpack_require_27755__("0366");
var toObject = __nested_webpack_require_27755__("7b0b");
var callWithSafeIterationClosing = __nested_webpack_require_27755__("9bdd");
var isArrayIteratorMethod = __nested_webpack_require_27755__("e95a");
var toLength = __nested_webpack_require_27755__("50c4");
var createProperty = __nested_webpack_require_27755__("8418");
var getIteratorMethod = __nested_webpack_require_27755__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __nested_webpack_require_29568__) {

var toInteger = __nested_webpack_require_29568__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __nested_webpack_require_29942__) {

var toObject = __nested_webpack_require_29942__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __nested_webpack_require_30208__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_30208__("d784");
var anObject = __nested_webpack_require_30208__("825a");
var toLength = __nested_webpack_require_30208__("50c4");
var toInteger = __nested_webpack_require_30208__("a691");
var requireObjectCoercible = __nested_webpack_require_30208__("1d80");
var advanceStringIndex = __nested_webpack_require_30208__("8aa5");
var getSubstitution = __nested_webpack_require_30208__("0cb2");
var regExpExec = __nested_webpack_require_30208__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __nested_webpack_require_34228__) {

var IS_PURE = __nested_webpack_require_34228__("c430");
var store = __nested_webpack_require_34228__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.11.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __nested_webpack_require_34651__) {

var getBuiltIn = __nested_webpack_require_34651__("d066");
var getOwnPropertyNamesModule = __nested_webpack_require_34651__("241c");
var getOwnPropertySymbolsModule = __nested_webpack_require_34651__("7418");
var anObject = __nested_webpack_require_34651__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __nested_webpack_require_35568__) {

var requireObjectCoercible = __nested_webpack_require_35568__("1d80");
var whitespaces = __nested_webpack_require_35568__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __nested_webpack_require_36681__) {

var isRegExp = __nested_webpack_require_36681__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __nested_webpack_require_37189__) {

var classof = __nested_webpack_require_37189__("c6b6");
var global = __nested_webpack_require_37189__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __nested_webpack_require_37414__) {

var toInteger = __nested_webpack_require_37414__("a691");
var requireObjectCoercible = __nested_webpack_require_37414__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __nested_webpack_require_38613__) {

var isObject = __nested_webpack_require_38613__("861d");
var isArray = __nested_webpack_require_38613__("e8b5");
var wellKnownSymbol = __nested_webpack_require_38613__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "682b":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_39398__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslides_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39398__("fe3f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslides_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_39398__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vueperslides_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __nested_webpack_require_41060__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_41060__("7f9a");
var global = __nested_webpack_require_41060__("da84");
var isObject = __nested_webpack_require_41060__("861d");
var createNonEnumerableProperty = __nested_webpack_require_41060__("9112");
var objectHas = __nested_webpack_require_41060__("5135");
var shared = __nested_webpack_require_41060__("c6cd");
var sharedKey = __nested_webpack_require_41060__("f772");
var hiddenKeys = __nested_webpack_require_41060__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __nested_webpack_require_42976__) {

var global = __nested_webpack_require_42976__("da84");
var createNonEnumerableProperty = __nested_webpack_require_42976__("9112");
var has = __nested_webpack_require_42976__("5135");
var setGlobal = __nested_webpack_require_42976__("ce4e");
var inspectSource = __nested_webpack_require_42976__("8925");
var InternalStateModule = __nested_webpack_require_42976__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __nested_webpack_require_44590__) {

var DESCRIPTORS = __nested_webpack_require_44590__("83ab");
var objectKeys = __nested_webpack_require_44590__("df75");
var toIndexedObject = __nested_webpack_require_44590__("fc6a");
var propertyIsEnumerable = __nested_webpack_require_44590__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __nested_webpack_require_45590__) {

var isObject = __nested_webpack_require_45590__("861d");
var setPrototypeOf = __nested_webpack_require_45590__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __nested_webpack_require_46517__) {

var path = __nested_webpack_require_46517__("428f");
var has = __nested_webpack_require_46517__("5135");
var wrappedWellKnownSymbolModule = __nested_webpack_require_46517__("e538");
var defineProperty = __nested_webpack_require_46517__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __nested_webpack_require_47237__) {

var requireObjectCoercible = __nested_webpack_require_47237__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __nested_webpack_require_47547__) {

var anObject = __nested_webpack_require_47547__("825a");
var defineProperties = __nested_webpack_require_47547__("37e8");
var enumBugKeys = __nested_webpack_require_47547__("7839");
var hiddenKeys = __nested_webpack_require_47547__("d012");
var html = __nested_webpack_require_47547__("1be4");
var documentCreateElement = __nested_webpack_require_47547__("cc12");
var sharedKey = __nested_webpack_require_47547__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __nested_webpack_require_50443__) {

"use strict";

var $ = __nested_webpack_require_50443__("23e7");
var $find = __nested_webpack_require_50443__("b727").find;
var addToUnscopables = __nested_webpack_require_50443__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __nested_webpack_require_51203__) {

"use strict";

var $ = __nested_webpack_require_51203__("23e7");
var createIteratorConstructor = __nested_webpack_require_51203__("9ed3");
var getPrototypeOf = __nested_webpack_require_51203__("e163");
var setPrototypeOf = __nested_webpack_require_51203__("d2bb");
var setToStringTag = __nested_webpack_require_51203__("d44e");
var createNonEnumerableProperty = __nested_webpack_require_51203__("9112");
var redefine = __nested_webpack_require_51203__("6eeb");
var wellKnownSymbol = __nested_webpack_require_51203__("b622");
var IS_PURE = __nested_webpack_require_51203__("c430");
var Iterators = __nested_webpack_require_51203__("3f8c");
var IteratorsCore = __nested_webpack_require_51203__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __nested_webpack_require_55182__) {

var global = __nested_webpack_require_55182__("da84");
var inspectSource = __nested_webpack_require_55182__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __nested_webpack_require_55483__) {

"use strict";

var toObject = __nested_webpack_require_55483__("7b0b");
var toAbsoluteIndex = __nested_webpack_require_55483__("23cb");
var toLength = __nested_webpack_require_55483__("50c4");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __nested_webpack_require_56280__) {

var isObject = __nested_webpack_require_56280__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __nested_webpack_require_56538__) {

var fails = __nested_webpack_require_56538__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __nested_webpack_require_56928__) {

"use strict";

var toPrimitive = __nested_webpack_require_56928__("c04e");
var definePropertyModule = __nested_webpack_require_56928__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_56928__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __nested_webpack_require_57427__) {

var requireObjectCoercible = __nested_webpack_require_57427__("1d80");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __nested_webpack_require_61386__) {

var store = __nested_webpack_require_61386__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __nested_webpack_require_61799__) {

"use strict";

var charAt = __nested_webpack_require_61799__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __nested_webpack_require_62391__) {

var DESCRIPTORS = __nested_webpack_require_62391__("83ab");
var definePropertyModule = __nested_webpack_require_62391__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_62391__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __nested_webpack_require_62863__) {

"use strict";

var regexpFlags = __nested_webpack_require_62863__("ad6d");
var stickyHelpers = __nested_webpack_require_62863__("9f7f");
var shared = __nested_webpack_require_62863__("5692");

var nativeExec = RegExp.prototype.exec;
var nativeReplace = shared('native-string-replace', String.prototype.replace);

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __nested_webpack_require_65763__) {

var fails = __nested_webpack_require_65763__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9911":
/***/ (function(module, exports, __nested_webpack_require_66418__) {

"use strict";

var $ = __nested_webpack_require_66418__("23e7");
var createHTML = __nested_webpack_require_66418__("857a");
var forcedStringHTMLMethod = __nested_webpack_require_66418__("af03");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __nested_webpack_require_66910__) {

"use strict";

var $ = __nested_webpack_require_66910__("23e7");
var fails = __nested_webpack_require_66910__("d039");
var isArray = __nested_webpack_require_66910__("e8b5");
var isObject = __nested_webpack_require_66910__("861d");
var toObject = __nested_webpack_require_66910__("7b0b");
var toLength = __nested_webpack_require_66910__("50c4");
var createProperty = __nested_webpack_require_66910__("8418");
var arraySpeciesCreate = __nested_webpack_require_66910__("65f0");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_66910__("1dde");
var wellKnownSymbol = __nested_webpack_require_66910__("b622");
var V8_VERSION = __nested_webpack_require_66910__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __nested_webpack_require_69308__) {

var anObject = __nested_webpack_require_69308__("825a");
var iteratorClose = __nested_webpack_require_69308__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __nested_webpack_require_69802__) {

var DESCRIPTORS = __nested_webpack_require_69802__("83ab");
var IE8_DOM_DEFINE = __nested_webpack_require_69802__("0cfb");
var anObject = __nested_webpack_require_69802__("825a");
var toPrimitive = __nested_webpack_require_69802__("c04e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __nested_webpack_require_70699__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_70699__("ae93").IteratorPrototype;
var create = __nested_webpack_require_70699__("7c73");
var createPropertyDescriptor = __nested_webpack_require_70699__("5c6c");
var setToStringTag = __nested_webpack_require_70699__("d44e");
var Iterators = __nested_webpack_require_70699__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __nested_webpack_require_71466__) {

"use strict";


var fails = __nested_webpack_require_71466__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __nested_webpack_require_72164__) {

"use strict";

var $ = __nested_webpack_require_72164__("23e7");
var toAbsoluteIndex = __nested_webpack_require_72164__("23cb");
var toInteger = __nested_webpack_require_72164__("a691");
var toLength = __nested_webpack_require_72164__("50c4");
var toObject = __nested_webpack_require_72164__("7b0b");
var arraySpeciesCreate = __nested_webpack_require_72164__("65f0");
var createProperty = __nested_webpack_require_72164__("8418");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_72164__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __nested_webpack_require_74794__) {

"use strict";

var $ = __nested_webpack_require_74794__("23e7");
var global = __nested_webpack_require_74794__("da84");
var getBuiltIn = __nested_webpack_require_74794__("d066");
var IS_PURE = __nested_webpack_require_74794__("c430");
var DESCRIPTORS = __nested_webpack_require_74794__("83ab");
var NATIVE_SYMBOL = __nested_webpack_require_74794__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_74794__("fdbf");
var fails = __nested_webpack_require_74794__("d039");
var has = __nested_webpack_require_74794__("5135");
var isArray = __nested_webpack_require_74794__("e8b5");
var isObject = __nested_webpack_require_74794__("861d");
var anObject = __nested_webpack_require_74794__("825a");
var toObject = __nested_webpack_require_74794__("7b0b");
var toIndexedObject = __nested_webpack_require_74794__("fc6a");
var toPrimitive = __nested_webpack_require_74794__("c04e");
var createPropertyDescriptor = __nested_webpack_require_74794__("5c6c");
var nativeObjectCreate = __nested_webpack_require_74794__("7c73");
var objectKeys = __nested_webpack_require_74794__("df75");
var getOwnPropertyNamesModule = __nested_webpack_require_74794__("241c");
var getOwnPropertyNamesExternal = __nested_webpack_require_74794__("057f");
var getOwnPropertySymbolsModule = __nested_webpack_require_74794__("7418");
var getOwnPropertyDescriptorModule = __nested_webpack_require_74794__("06cf");
var definePropertyModule = __nested_webpack_require_74794__("9bf2");
var propertyIsEnumerableModule = __nested_webpack_require_74794__("d1e7");
var createNonEnumerableProperty = __nested_webpack_require_74794__("9112");
var redefine = __nested_webpack_require_74794__("6eeb");
var shared = __nested_webpack_require_74794__("5692");
var sharedKey = __nested_webpack_require_74794__("f772");
var hiddenKeys = __nested_webpack_require_74794__("d012");
var uid = __nested_webpack_require_74794__("90e3");
var wellKnownSymbol = __nested_webpack_require_74794__("b622");
var wrappedWellKnownSymbolModule = __nested_webpack_require_74794__("e538");
var defineWellKnownSymbol = __nested_webpack_require_74794__("746f");
var setToStringTag = __nested_webpack_require_74794__("d44e");
var InternalStateModule = __nested_webpack_require_74794__("69f3");
var $forEach = __nested_webpack_require_74794__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __nested_webpack_require_87488__) {

var $ = __nested_webpack_require_87488__("23e7");
var from = __nested_webpack_require_87488__("4df4");
var checkCorrectnessOfIteration = __nested_webpack_require_87488__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __nested_webpack_require_88039__) {

"use strict";

var fails = __nested_webpack_require_88039__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __nested_webpack_require_88779__) {

"use strict";

var DESCRIPTORS = __nested_webpack_require_88779__("83ab");
var global = __nested_webpack_require_88779__("da84");
var isForced = __nested_webpack_require_88779__("94ca");
var redefine = __nested_webpack_require_88779__("6eeb");
var has = __nested_webpack_require_88779__("5135");
var classof = __nested_webpack_require_88779__("c6b6");
var inheritIfRequired = __nested_webpack_require_88779__("7156");
var toPrimitive = __nested_webpack_require_88779__("c04e");
var fails = __nested_webpack_require_88779__("d039");
var create = __nested_webpack_require_88779__("7c73");
var getOwnPropertyNames = __nested_webpack_require_88779__("241c").f;
var getOwnPropertyDescriptor = __nested_webpack_require_88779__("06cf").f;
var defineProperty = __nested_webpack_require_88779__("9bf2").f;
var trim = __nested_webpack_require_88779__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __nested_webpack_require_92271__) {

var wellKnownSymbol = __nested_webpack_require_92271__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __nested_webpack_require_92707__) {

"use strict";

var $ = __nested_webpack_require_92707__("23e7");
var exec = __nested_webpack_require_92707__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __nested_webpack_require_93055__) {

"use strict";

var anObject = __nested_webpack_require_93055__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __nested_webpack_require_93619__) {

"use strict";

var fails = __nested_webpack_require_93619__("d039");
var getPrototypeOf = __nested_webpack_require_93619__("e163");
var createNonEnumerableProperty = __nested_webpack_require_93619__("9112");
var has = __nested_webpack_require_93619__("5135");
var wellKnownSymbol = __nested_webpack_require_93619__("b622");
var IS_PURE = __nested_webpack_require_93619__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __nested_webpack_require_95296__) {

var fails = __nested_webpack_require_95296__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __nested_webpack_require_95700__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_95700__("00ee");
var classof = __nested_webpack_require_95700__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __nested_webpack_require_96134__) {

var DESCRIPTORS = __nested_webpack_require_96134__("83ab");
var defineProperty = __nested_webpack_require_96134__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __nested_webpack_require_96864__) {

var global = __nested_webpack_require_96864__("da84");
var shared = __nested_webpack_require_96864__("5692");
var has = __nested_webpack_require_96864__("5135");
var uid = __nested_webpack_require_96864__("90e3");
var NATIVE_SYMBOL = __nested_webpack_require_96864__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_96864__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __nested_webpack_require_97764__) {

var $ = __nested_webpack_require_97764__("23e7");
var toObject = __nested_webpack_require_97764__("7b0b");
var nativeKeys = __nested_webpack_require_97764__("df75");
var fails = __nested_webpack_require_97764__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __nested_webpack_require_98291__) {

var bind = __nested_webpack_require_98291__("0366");
var IndexedObject = __nested_webpack_require_98291__("44ad");
var toObject = __nested_webpack_require_98291__("7b0b");
var toLength = __nested_webpack_require_98291__("50c4");
var arraySpeciesCreate = __nested_webpack_require_98291__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __nested_webpack_require_101111__) {

var isObject = __nested_webpack_require_101111__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __nested_webpack_require_102217__) {

var global = __nested_webpack_require_102217__("da84");
var setGlobal = __nested_webpack_require_102217__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __nested_webpack_require_102502__) {

"use strict";

var $ = __nested_webpack_require_102502__("23e7");
var $findIndex = __nested_webpack_require_102502__("b727").findIndex;
var addToUnscopables = __nested_webpack_require_102502__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __nested_webpack_require_103861__) {

var has = __nested_webpack_require_103861__("5135");
var toIndexedObject = __nested_webpack_require_103861__("fc6a");
var indexOf = __nested_webpack_require_103861__("4d64").indexOf;
var hiddenKeys = __nested_webpack_require_103861__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __nested_webpack_require_104494__) {

"use strict";

var $ = __nested_webpack_require_104494__("23e7");
var $includes = __nested_webpack_require_104494__("4d64").includes;
var addToUnscopables = __nested_webpack_require_104494__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __nested_webpack_require_105109__) {

var $ = __nested_webpack_require_105109__("23e7");
var fill = __nested_webpack_require_105109__("81d5");
var addToUnscopables = __nested_webpack_require_105109__("44d2");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __nested_webpack_require_105553__) {

var global = __nested_webpack_require_105553__("da84");
var isObject = __nested_webpack_require_105553__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __nested_webpack_require_105968__) {

var global = __nested_webpack_require_105968__("da84");
var createNonEnumerableProperty = __nested_webpack_require_105968__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __nested_webpack_require_106581__) {

var path = __nested_webpack_require_106581__("428f");
var global = __nested_webpack_require_106581__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __nested_webpack_require_107822__) {

var defineWellKnownSymbol = __nested_webpack_require_107822__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __nested_webpack_require_108086__) {

/* eslint-disable no-proto -- safe */
var anObject = __nested_webpack_require_108086__("825a");
var aPossiblePrototype = __nested_webpack_require_108086__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __nested_webpack_require_109149__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_109149__("00ee");
var redefine = __nested_webpack_require_109149__("6eeb");
var toString = __nested_webpack_require_109149__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __nested_webpack_require_109577__) {

var defineProperty = __nested_webpack_require_109577__("9bf2").f;
var has = __nested_webpack_require_109577__("5135");
var wellKnownSymbol = __nested_webpack_require_109577__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __nested_webpack_require_110053__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_110053__("ac1f");
var redefine = __nested_webpack_require_110053__("6eeb");
var fails = __nested_webpack_require_110053__("d039");
var wellKnownSymbol = __nested_webpack_require_110053__("b622");
var createNonEnumerableProperty = __nested_webpack_require_110053__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === RegExp.prototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __nested_webpack_require_114876__) {

"use strict";

var $ = __nested_webpack_require_114876__("23e7");
var $map = __nested_webpack_require_114876__("b727").map;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_114876__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __nested_webpack_require_115515__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_115515__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __nested_webpack_require_116305__) {

var $ = __nested_webpack_require_116305__("23e7");
var DESCRIPTORS = __nested_webpack_require_116305__("83ab");
var ownKeys = __nested_webpack_require_116305__("56ef");
var toIndexedObject = __nested_webpack_require_116305__("fc6a");
var getOwnPropertyDescriptorModule = __nested_webpack_require_116305__("06cf");
var createProperty = __nested_webpack_require_116305__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __nested_webpack_require_117337__) {

var global = __nested_webpack_require_117337__("da84");
var DOMIterables = __nested_webpack_require_117337__("fdbc");
var ArrayIteratorMethods = __nested_webpack_require_117337__("e260");
var createNonEnumerableProperty = __nested_webpack_require_117337__("9112");
var wellKnownSymbol = __nested_webpack_require_117337__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __nested_webpack_require_118920__) {

var internalObjectKeys = __nested_webpack_require_118920__("ca84");
var enumBugKeys = __nested_webpack_require_118920__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __nested_webpack_require_119327__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __nested_webpack_require_119327__("23e7");
var DESCRIPTORS = __nested_webpack_require_119327__("83ab");
var global = __nested_webpack_require_119327__("da84");
var has = __nested_webpack_require_119327__("5135");
var isObject = __nested_webpack_require_119327__("861d");
var defineProperty = __nested_webpack_require_119327__("9bf2").f;
var copyConstructorProperties = __nested_webpack_require_119327__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __nested_webpack_require_121471__) {

var has = __nested_webpack_require_121471__("5135");
var toObject = __nested_webpack_require_121471__("7b0b");
var sharedKey = __nested_webpack_require_121471__("f772");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_121471__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __nested_webpack_require_122291__) {

var fails = __nested_webpack_require_122291__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __nested_webpack_require_122663__) {

"use strict";

var toIndexedObject = __nested_webpack_require_122663__("fc6a");
var addToUnscopables = __nested_webpack_require_122663__("44d2");
var Iterators = __nested_webpack_require_122663__("3f8c");
var InternalStateModule = __nested_webpack_require_122663__("69f3");
var defineIterator = __nested_webpack_require_122663__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __nested_webpack_require_124843__) {

var $ = __nested_webpack_require_124843__("23e7");
var fails = __nested_webpack_require_124843__("d039");
var toIndexedObject = __nested_webpack_require_124843__("fc6a");
var nativeGetOwnPropertyDescriptor = __nested_webpack_require_124843__("06cf").f;
var DESCRIPTORS = __nested_webpack_require_124843__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __nested_webpack_require_125640__) {

var wellKnownSymbol = __nested_webpack_require_125640__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __nested_webpack_require_125805__) {

var has = __nested_webpack_require_125805__("5135");
var ownKeys = __nested_webpack_require_125805__("56ef");
var getOwnPropertyDescriptorModule = __nested_webpack_require_125805__("06cf");
var definePropertyModule = __nested_webpack_require_125805__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __nested_webpack_require_126450__) {

var classof = __nested_webpack_require_126450__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __nested_webpack_require_126801__) {

var wellKnownSymbol = __nested_webpack_require_126801__("b622");
var Iterators = __nested_webpack_require_126801__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __nested_webpack_require_127226__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_127226__("00ee");
var classofRaw = __nested_webpack_require_127226__("c6b6");
var wellKnownSymbol = __nested_webpack_require_127226__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __nested_webpack_require_128279__) {

var shared = __nested_webpack_require_128279__("5692");
var uid = __nested_webpack_require_128279__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_128568__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_128568__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_128568__.d(__webpack_exports__, "VueperSlides", function() { return /* reexport */ vueperslides; });
__nested_webpack_require_128568__.d(__webpack_exports__, "VueperSlide", function() { return /* reexport */ vueperslide; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_128568__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_128568__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c50c791-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vueperslides/vueperslides.vue?vue&type=template&id=5e48d81b&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vueperslides",staticClass:"vueperslides",class:_vm.vueperslidesClasses,style:(_vm.vueperslidesStyles),attrs:{"aria-label":"Slideshow"}},[(_vm.slidesCount && _vm.conf.slideContentOutside === 'top')?_c('div',{staticClass:"vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",class:_vm.conf.slideContentOutsideClass},[(_vm.currentSlide.contentSlot)?_c('vnodes',{attrs:{"vnodes":_vm.currentSlide.contentSlot}}):[(_vm.currentSlide.title)?_c('div',{staticClass:"vueperslide__title",domProps:{"innerHTML":_vm._s(_vm.currentSlide.title)}}):_vm._e(),(_vm.currentSlide.content)?_c('div',{staticClass:"vueperslide__content",domProps:{"innerHTML":_vm._s(_vm.currentSlide.content)}}):_vm._e()]],2):_vm._e(),_c('div',{staticClass:"vueperslides__inner"},[_c('div',{staticClass:"vueperslides__parallax-wrapper",style:(("padding-bottom: " + (_vm.conf.slideRatio * 100) + "%")),attrs:{"aria-live":"polite"}},[_c('div',{ref:"track",staticClass:"vueperslides__track",class:{ 'vueperslides__track--dragging': _vm.touch.dragging, 'vueperslides__track--mousedown': _vm.mouseDown },style:(_vm.trackStyles)},[_c('div',{staticClass:"vueperslides__track-inner",style:(_vm.trackInnerStyles)},[_vm._t("default"),(_vm.isReady && _vm.conf.infinite && _vm.canSlide && _vm.lastSlide)?_c('vueper-slide',{staticClass:"vueperslide--clone vueperslide--clone-1",style:(_vm.lastSlide.style),attrs:{"clone":"","title":_vm.lastSlide.title,"content":_vm.lastSlide.content,"image":_vm.lastSlide.image,"link":_vm.lastSlide.link,"lazyloaded":_vm.lastSlide.loaded,"aria-hidden":"true"}},[(_vm.lastSlide.contentSlot)?_c('template',{slot:"content"},[_c('vnodes',{attrs:{"vnodes":_vm.lastSlide.contentSlot}})],1):_vm._e(),(_vm.conf.lazy && !_vm.lastSlide.loaded)?_c('template',{slot:"loader"},[_c('vnodes',{attrs:{"vnodes":_vm.lastSlide.loaderSlot}})],1):_vm._e()],2):_vm._e(),(_vm.isReady && _vm.conf.infinite && _vm.canSlide && _vm.firstSlide)?_c('vueper-slide',{staticClass:"vueperslide--clone vueperslide--clone-2",style:(_vm.firstSlide.style),attrs:{"clone":"","title":_vm.firstSlide.title,"content":_vm.firstSlide.content,"image":_vm.firstSlide.image,"link":_vm.firstSlide.link,"lazyloaded":_vm.firstSlide.loaded,"aria-hidden":"true"}},[(_vm.firstSlide.contentSlot)?_c('template',{slot:"content"},[_c('vnodes',{attrs:{"vnodes":_vm.firstSlide.contentSlot}})],1):_vm._e(),(_vm.conf.lazy && !_vm.firstSlide.loaded)?_c('template',{slot:"loader"},[_c('vnodes',{attrs:{"vnodes":_vm.firstSlide.loaderSlot}})],1):_vm._e()],2):_vm._e()],2)])]),((_vm.conf.pauseOnHover || _vm.conf.pauseOnTouch) && _vm.$slots.pause)?_c('div',{staticClass:"vueperslides__paused"},[_vm._t("pause")],2):_vm._e(),(_vm.conf.progress)?_c('div',{staticClass:"vueperslides__progress"},[_vm._t("progress",[_c('div',{style:(("width: " + ((_vm.slides.current + 1) * 100 / _vm.slidesCount) + "%"))})],{"current":_vm.slides.current + 1,"total":_vm.slidesCount})],2):_vm._e(),(_vm.conf.fractions)?_c('div',{staticClass:"vueperslides__fractions"},[_vm._t("fraction",[_vm._v(_vm._s(((_vm.slides.current + 1) + " / " + _vm.slidesCount)))],{"current":_vm.slides.current + 1,"total":_vm.slidesCount})],2):_vm._e(),(_vm.conf.arrows && _vm.canSlide && !_vm.disable)?_c('div',{staticClass:"vueperslides__arrows",class:{ 'vueperslides__arrows--outside': _vm.conf.arrowsOutside }},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.arrowPrevDisabled),expression:"!arrowPrevDisabled"}],staticClass:"vueperslides__arrow vueperslides__arrow--prev",attrs:{"type":"button","aria-label":"Previous"},on:{"click":function($event){return _vm.previous()},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.conf.rtl ? _vm.next() : _vm.previous()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.conf.rtl ? _vm.previous() : _vm.next()}]}},[_vm._t(("arrow-" + (_vm.conf.rtl ? 'right' : 'left')),[_c('svg',{attrs:{"viewBox":"0 0 9 18"}},[_c('path',{attrs:{"stroke-linecap":"round","d":_vm.conf.rtl ? 'm1 1 l7 8 -7 8' : 'm8 1 l-7 8 7 8'}})])])],2),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.arrowNextDisabled),expression:"!arrowNextDisabled"}],staticClass:"vueperslides__arrow vueperslides__arrow--next",attrs:{"type":"button","aria-label":"Next"},on:{"click":function($event){return _vm.next()},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.conf.rtl ? _vm.next() : _vm.previous()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.conf.rtl ? _vm.previous() : _vm.next()}]}},[_vm._t(("arrow-" + (_vm.conf.rtl ? 'left' : 'right')),[_c('svg',{attrs:{"viewBox":"0 0 9 18"}},[_c('path',{attrs:{"stroke-linecap":"round","d":_vm.conf.rtl ? 'm8 1 l-7 8 7 8' : 'm1 1 l7 8 -7 8'}})])])],2)]):_vm._e(),(_vm.conf.bullets && _vm.canSlide && !_vm.disable && !_vm.conf.bulletsOutside)?_c('div',{ref:"bullets",staticClass:"vueperslides__bullets",attrs:{"role":"tablist","aria-label":"Slideshow navigation"}},[_vm._t("bullets",_vm._l((_vm.bulletIndexes),function(slideIndex,i){return _c('button',{key:i,staticClass:"vueperslides__bullet",class:{ 'vueperslides__bullet--active': _vm.slides.current === slideIndex },attrs:{"type":"button","role":"tab","aria-label":("Slide " + (i + 1))},on:{"click":function($event){return _vm.goToSlide(slideIndex)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.conf.rtl ? _vm.next() : _vm.previous()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.conf.rtl ? _vm.previous() : _vm.next()}]}},[_vm._t("bullet",[_c('div',{staticClass:"default"},[_c('span',[_vm._v(_vm._s(i + 1))])])],{"active":_vm.slides.current === slideIndex,"slideIndex":slideIndex,"index":i + 1})],2)}),{"currentSlide":_vm.slides.current,"bulletIndexes":_vm.bulletIndexes,"goToSlide":_vm.goToSlide,"previous":_vm.previous,"next":_vm.next})],2):_vm._e()]),(_vm.conf.bullets && _vm.canSlide && !_vm.disable && _vm.conf.bulletsOutside)?_c('div',{ref:"bullets",staticClass:"vueperslides__bullets vueperslides__bullets--outside",attrs:{"role":"tablist","aria-label":"Slideshow navigation"}},[_vm._t("bullets",_vm._l((_vm.bulletIndexes),function(slideIndex,i){return _c('button',{key:i,staticClass:"vueperslides__bullet",class:{ 'vueperslides__bullet--active': _vm.slides.current === slideIndex },attrs:{"type":"button","role":"tab","aria-label":("Slide " + (i + 1))},on:{"click":function($event){return _vm.goToSlide(slideIndex)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.conf.rtl ? _vm.next() : _vm.previous()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.conf.rtl ? _vm.previous() : _vm.next()}]}},[_vm._t("bullet",[_c('div',{staticClass:"default"},[_c('span',[_vm._v(_vm._s(i + 1))])])],{"active":_vm.slides.current === slideIndex,"slideIndex":slideIndex,"index":i + 1})],2)}),{"currentSlide":_vm.slides.current,"bulletIndexes":_vm.bulletIndexes,"goToSlide":_vm.goToSlide,"previous":_vm.previous,"next":_vm.next})],2):_vm._e(),(_vm.slidesCount && _vm.conf.slideContentOutside === 'bottom')?_c('div',{staticClass:"vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",class:_vm.conf.slideContentOutsideClass},[(_vm.currentSlide.contentSlot)?_c('vnodes',{attrs:{"vnodes":_vm.currentSlide.contentSlot}}):[(_vm.currentSlide.title)?_c('div',{staticClass:"vueperslide__title",domProps:{"innerHTML":_vm._s(_vm.currentSlide.title)}}):_vm._e(),(_vm.currentSlide.content)?_c('div',{staticClass:"vueperslide__content",domProps:{"innerHTML":_vm._s(_vm.currentSlide.content)}}):_vm._e()]],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vueperslides/vueperslides.vue?vue&type=template&id=5e48d81b&lang=pug&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __nested_webpack_require_128568__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __nested_webpack_require_128568__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __nested_webpack_require_128568__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __nested_webpack_require_128568__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __nested_webpack_require_128568__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __nested_webpack_require_128568__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __nested_webpack_require_128568__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js







function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __nested_webpack_require_128568__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __nested_webpack_require_128568__("b0c0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js






function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __nested_webpack_require_128568__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __nested_webpack_require_128568__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __nested_webpack_require_128568__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __nested_webpack_require_128568__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __nested_webpack_require_128568__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __nested_webpack_require_128568__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __nested_webpack_require_128568__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __nested_webpack_require_128568__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __nested_webpack_require_128568__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __nested_webpack_require_128568__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __nested_webpack_require_128568__("9911");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __nested_webpack_require_128568__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __nested_webpack_require_128568__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __nested_webpack_require_128568__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __nested_webpack_require_128568__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __nested_webpack_require_128568__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __nested_webpack_require_128568__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4c50c791-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vueperslides/vueperslide.vue?vue&type=template&id=048e73ef&lang=pug&
var vueperslidevue_type_template_id_048e73ef_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.link ? 'a' : 'div',{tag:"component",staticClass:"vueperslide",class:_vm.slideClasses,style:(_vm.slideStyles),attrs:{"href":_vm.link && !_vm.justDragged ? _vm.link : false,"target":_vm.link && _vm.openInNew ? (typeof _vm.openInNew === 'boolean' ? '_blank' : _vm.openInNew) : '_self',"face":_vm.slideFace3d,"aria-hidden":_vm.slides.activeId === _vm._uid || _vm.isSlideVisible ? 'false' : 'true'},on:{"mouseenter":function($event){return _vm.$emit('mouse-enter', { slideIndex: _vm.slideIndex, title: _vm.title, content: _vm.content, image: _vm.image, link: _vm.link }, _vm.$el)},"mouseleave":function($event){return _vm.$emit('mouse-leave')}}},[(_vm.videoObj)?[(_vm.videoObj.webm || _vm.videoObj.mp4)?_c('video',_vm._b({staticClass:"vueperslide__video",attrs:{"width":"100%","height":"100%"}},'video',_vm.videoObj.props || {},false),[(_vm.videoObj.webm)?_c('source',{attrs:{"src":_vm.videoObj.webm,"type":"video/webm"}}):_vm._e(),(_vm.videoObj.mp4)?_c('source',{attrs:{"src":_vm.videoObj.mp4,"type":"video/mp4"}}):_vm._e(),(_vm.videoObj.ogv)?_c('source',{attrs:{"src":_vm.videoObj.ogv,"type":"video/ogg"}}):_vm._e(),(_vm.videoObj.avi)?_c('source',{attrs:{"src":_vm.videoObj.avi,"type":"video/avi"}}):_vm._e(),_vm._v(_vm._s(_vm.videoObj.alt || "Sorry, your browser doesn't support embedded videos."))]):(_vm.videoObj.url)?_c('iframe',_vm._b({staticClass:"vueperslide__video",attrs:{"src":_vm.videoObj.url,"type":"text/html","frameborder":"0","width":"100%","height":"100%"}},'iframe',_vm.videoObj.props || {},false)):_vm._e()]:_vm._e(),(_vm.imageSrc && _vm.conf.slideImageInside)?_c('div',{staticClass:"vueperslide__image",style:(_vm.imageStyles)}):_vm._e(),(_vm.conf.slideContentOutside)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}]},[_vm._t("content",[_c('div',{staticClass:"vueperslide__content-wrapper"},[(_vm.title)?_c('div',{staticClass:"vueperslide__title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),(_vm.content)?_c('div',{staticClass:"vueperslide__content",domProps:{"innerHTML":_vm._s(_vm.content)}}):_vm._e()])])],2):_vm._t("content",[_c('div',{staticClass:"vueperslide__content-wrapper"},[(_vm.title)?_c('div',{staticClass:"vueperslide__title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),(_vm.content)?_c('div',{staticClass:"vueperslide__content",domProps:{"innerHTML":_vm._s(_vm.content)}}):_vm._e()])]),(_vm.conf.lazy && !_vm.loaded)?_c('div',{staticClass:"vueperslide__loader"},[_vm._t("loader")],2):_vm._e()],2)}
var vueperslidevue_type_template_id_048e73ef_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vueperslides/vueperslide.vue?vue&type=template&id=048e73ef&lang=pug&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js






function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __nested_webpack_require_128568__("07ac");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vueperslides/vueperslide.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var vueperslidevue_type_script_lang_js_ = ({
  inject: ['slides', 'touch', 'updateSlide', 'addClone', 'addSlide', 'removeSlide'],
  props: {
    clone: {
      type: Boolean
    },
    image: {
      type: String,
      default: ''
    },
    video: {
      type: [String, Object],
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0
    },
    lazyloaded: {
      type: Boolean
    },
    openInNew: {
      type: [Boolean, String]
    }
  },
  emits: ['mouse-enter', 'mouse-leave'],
  data: function data() {
    return {
      // For lazy loading.
      imageSrc: '',
      loading: false,
      loaded: false
    };
  },
  computed: {
    conf: function conf() {
      return this.$parent.conf;
    },
    slideClasses: function slideClasses() {
      return {
        'vueperslide--active': this.slides.activeId === this._uid,
        'vueperslide--previous-slide': this.isPreviousSlide,
        'vueperslide--next-slide': this.isNextSlide,
        'vueperslide--visible': this.isSlideVisible,
        'vueperslide--loading': this.conf.lazy && !this.loaded,
        'vueperslide--has-video': this.videoObj,
        'vueperslide--has-image-inside': this.conf.slideImageInside,
        'vueperslide--no-pointer-events': this.videoObj && this.videoObj.pointerEvents === false
      };
    },
    slideStyles: function slideStyles() {
      var _this$conf = this.conf,
          visibleSlides = _this$conf.visibleSlides,
          fade = _this$conf.fade,
          slideImageInside = _this$conf.slideImageInside,
          gap = _this$conf.gap,
          gapPx = _this$conf.gapPx;
      return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, !slideImageInside && this.imageSrc && {
        backgroundImage: "url(\"".concat(this.imageSrc, "\")")
      }), visibleSlides > 1 && {
        width: (100 - (gap ? gap * (visibleSlides - 1) : 0)) / visibleSlides + '%'
      }), visibleSlides > 1 && fade && _defineProperty({}, this.conf.rtl ? 'right' : 'left', this.slideIndex % visibleSlides / visibleSlides * 100 + '%')), gap && _defineProperty({}, this.conf.rtl ? 'marginLeft' : 'marginRight', gap + (gapPx ? 'px' : '%')));
    },
    videoObj: function videoObj() {
      if (!this.video) return null;
      var video = {
        url: '',
        alt: '',
        props: {
          controls: true
        }
      };
      if (_typeof(this.video) === 'object') video = Object.assign(video, this.video);else if (typeof this.video === 'string') video.url = this.video;
      return video;
    },
    youtubeVideo: function youtubeVideo() {
      return /youtube\.|youtu\.be/.test(this.videoObj.url);
    },
    imageStyles: function imageStyles() {
      return _objectSpread2({}, this.conf.slideImageInside && this.imageSrc && {
        backgroundImage: "url(\"".concat(this.imageSrc, "\")")
      });
    },
    slideFace3d: function slideFace3d() {
      if (!this.conf['3d']) return false;
      var faces = ['front', 'right', 'back', 'left'];
      var prevSlideIndex = (this.slides.current - 1 + this.slidesCount) % this.slidesCount;
      var nextSlideIndex = (this.slides.current + 1) % this.slidesCount;
      var face = 'front';
      if (this.slideIndex === prevSlideIndex) face = faces[(4 + this.slides.current - 1) % 4];else if (this.slideIndex === nextSlideIndex) face = faces[(this.slides.current + 1) % 4];
      face = faces[this.slideIndex % 4];
      if (this.conf.rtl && face === 'left') face = 'right';else if (this.conf.rtl && face === 'right') face = 'left';
      return face;
    },
    isPreviousSlide: function isPreviousSlide() {
      if (!this.conf['3d']) return false;
      var prevSlideIndex = (this.slides.current - 1 + this.slidesCount) % this.slidesCount;
      return this._uid === this.slides.list[prevSlideIndex].id;
    },
    isNextSlide: function isNextSlide() {
      if (!this.conf['3d']) return false;
      var nextSlideIndex = (this.slides.current + 1) % this.slidesCount;
      return this._uid === this.slides.list[nextSlideIndex].id;
    },
    isSlideVisible: function isSlideVisible() {
      return this.slideIndex >= this.slides.firstVisible && this.slideIndex < this.slides.firstVisible + this.conf.visibleSlides;
    },
    slidesList: function slidesList() {
      return this.slides.list.map(function (slide) {
        return slide.id;
      });
    },
    slidesCount: function slidesCount() {
      return this.slidesList.length;
    },
    slideIndex: function slideIndex() {
      return this.slidesList.indexOf(this._uid);
    },
    justDragged: function justDragged() {
      return this.touch.justDragged;
    },
    shouldSkipUpdate: function shouldSkipUpdate() {
      return this.clone || !this.conf.infinite || !this.conf.slideContentOutside && !this.conf.alwaysRefreshClones;
    }
  },
  methods: {
    updateThisSlide: function updateThisSlide(props) {
      // Injected method.
      this.updateSlide(this._uid, props);
    },
    // Only for lazy loading, this method is called from the Vueperslides component.
    loadImage: function loadImage() {
      var _this = this;

      // Don't try to reload image if already loaded.
      if (this.loading || this.loaded) return;
      this.loading = true;
      return new Promise(function (resolve, reject) {
        var img = document.createElement('img');

        img.onload = function () {
          _this.imageSrc = _this.image;
          _this.loading = false;
          _this.loaded = true;

          _this.$nextTick(function () {
            resolve({
              image: _this.imageSrc,
              style: ((_this.$el.attributes || {}).style || {}).value
            });
          });
        };

        img.onerror = (_this.loading = false) || reject; // Always call reject.

        img.src = _this.image;
      });
    },
    playVideo: function playVideo() {
      if (!this.videoObj) return;

      if (this.videoObj.url) {
        this.$el.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } else this.$el.querySelector('video').play();
    },
    pauseVideo: function pauseVideo() {
      if (!this.videoObj) return;

      if (this.videoObj.url) {
        this.$el.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else this.$el.querySelector('video').pause();
    }
  },
  created: function created() {
    this.imageSrc = this.conf.lazy ? '' : this.image;
    if (this.clone) return this.addClone();
    this.addSlide({
      id: this._uid,
      image: this.imageSrc,
      video: this.videoObj && _objectSpread2(_objectSpread2({}, this.videoObj), {}, {
        play: this.playVideo,
        pause: this.pauseVideo
      }),
      title: this.title,
      content: this.content,
      contentSlot: this.$slots.content,
      loaderSlot: this.$slots.loader,
      // For lazy loading.
      link: this.link,
      style: '',
      // For lazy loading: pass the function to Vueperslides, it will call it before slide
      // and on slide drag for each visible slide.
      loadImage: this.loadImage,
      duration: this.duration // Allow overriding the global autoplay slide duration.

    });
  },
  mounted: function mounted() {
    if (this.clone) return;
    this.updateThisSlide({
      contentSlot: this.$slots.content,
      loaderSlot: this.$slots.loader,
      // For lazy loading.
      style: ((this.$el.attributes || {}).style || {}).value
    });
  },
  beforeUpdate: function beforeUpdate() {
    if (this.shouldSkipUpdate || !Object.values(this.$slots).length) return;
    this.updateThisSlide({
      contentSlot: this.$slots.content,
      loaderSlot: this.$slots.loader,
      // For lazy loading.
      style: ((this.$el.attributes || {}).style || {}).value
    });
  },
  destroyed: function destroyed() {
    // When removing a slide programmatically, remove it from the list of slides.
    if (!this.clone) this.removeSlide(this._uid);
  },
  watch: {
    image: function image() {
      // If the image of the slide is changed on the fly, notify VueperSlides to update the clones.
      // If lazy loading, unset the image until this slide is requested.
      this.imageSrc = this.conf.lazy && !this.isSlideVisible ? '' : this.image;

      if (!this.clone) {
        this.updateThisSlide(_objectSpread2({
          image: this.imageSrc
        }, !this.conf.slideImageInside && {
          style: this.slideStyles
        }));
      }
    },
    title: function title() {
      if (!this.clone) this.updateThisSlide({
        title: this.title
      });
    },
    content: function content() {
      if (!this.clone) this.updateThisSlide({
        content: this.content
      });
    },
    link: function link() {
      if (!this.clone) this.updateThisSlide({
        link: this.link
      });
    },
    lazyloaded: function lazyloaded() {
      if (this.clone) this.loaded = this.lazyloaded;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vueperslides/vueperslide.vue?vue&type=script&lang=js&
 /* harmony default export */ var vueperslides_vueperslidevue_type_script_lang_js_ = (vueperslidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vueperslides/vueperslide.vue?vue&type=style&index=0&lang=scss&
var vueperslidevue_type_style_index_0_lang_scss_ = __nested_webpack_require_128568__("1c94");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vueperslides/vueperslide.vue






/* normalize component */

var component = normalizeComponent(
  vueperslides_vueperslidevue_type_script_lang_js_,
  vueperslidevue_type_template_id_048e73ef_lang_pug_render,
  vueperslidevue_type_template_id_048e73ef_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vueperslide = (component.exports);
// EXTERNAL MODULE: ./src/components/vueperslides/styles.scss
var styles = __nested_webpack_require_128568__("0b32");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vueperslides/vueperslides.vue?vue&type=script&lang=js&















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var vueperslidesvue_type_script_lang_js_ = ({
  name: 'vueper-slides',
  components: {
    VueperSlide: vueperslide,
    vnodes: {
      functional: true,
      render: function render(h, ctx) {
        return ctx.props.vnodes;
      }
    }
  },
  provide: function provide() {
    return {
      // By design in Vue, provided variables are not reactive unless they are in an object.
      // Objects.
      conf: this.conf,
      slides: this.slides,
      touch: this.touch,
      // Methods.
      updateSlide: this.updateSlide,
      addClone: this.addClone,
      addSlide: this.addSlide,
      removeSlide: this.removeSlide
    };
  },
  props: {
    alwaysRefreshClones: {
      type: Boolean,
      default: false
    },
    arrows: {
      type: Boolean,
      default: true
    },
    arrowsOutside: {
      type: Boolean,
      default: null
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    bullets: {
      type: Boolean,
      default: true
    },
    bulletsOutside: {
      type: Boolean,
      default: null
    },
    disable: {
      type: Boolean,
      default: false
    },
    // Ability to disable arrows on slideshow edges. Only if not infinite mode.
    disableArrowsOnEdges: {
      type: [Boolean, String],
      default: false
    },
    // By default when touch is enabled you have to drag from a slide side and pass 50% of
    // slideshow width to change slide. This setting changes this behavior to a horizontal
    // pixel amount from anywhere on slideshow.
    draggingDistance: {
      type: Number,
      default: null
    },
    duration: {
      type: [Number, String],
      default: 4000
    },
    // Autoplay slide duration.
    infinite: {
      type: Boolean,
      default: true
    },
    fade: {
      type: Boolean,
      default: false
    },
    fixedHeight: {
      type: [Boolean, String],
      default: false
    },
    fractions: {
      type: Boolean,
      default: false
    },
    gap: {
      type: Number,
      default: 0
    },
    initSlide: {
      type: Number,
      default: 1
    },
    lazy: {
      type: Boolean,
      default: false
    },
    lazyLoadOnDrag: {
      type: Boolean,
      default: false
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    pauseOnTouch: {
      type: Boolean,
      default: true
    },
    parallax: {
      type: [Boolean, Number],
      default: false
    },
    pageScrollingElement: {
      type: String,
      default: ''
    },
    parallaxFixedContent: {
      type: Boolean,
      default: false
    },
    // This one is not modifiable through breakpoints: event handlers are added/removed.
    preventYScroll: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    slideContentOutside: {
      type: [Boolean, String],
      default: false
    },
    slideContentOutsideClass: {
      type: String,
      default: ''
    },
    slideImageInside: {
      type: Boolean,
      default: false
    },
    slideMultiple: {
      type: [Boolean, Number],
      default: false
    },
    slideRatio: {
      type: Number,
      default: 1 / 3
    },
    touchable: {
      type: Boolean,
      default: true
    },
    transitionSpeed: {
      type: [Number, String],
      default: 600
    },
    visibleSlides: {
      type: Number,
      default: 1
    },
    '3d': {
      type: Boolean,
      default: false
    }
  },
  emits: ['ready', 'next', 'previous', 'autoplay-pause', 'autoplay-resume', 'before-slide', 'slide', 'image-loaded', 'image-failed'],
  data: function data() {
    return {
      isReady: false,
      isPaused: false,
      // When autoplay is true, whether the slideshow in a playing or paused state.
      container: null,
      slides: {
        list: [],
        activeId: null,
        current: 0,
        // Index of current slide.
        // Don't loose the focused slide when changing breakpoint & slideMultiple > 1.
        focus: 0,
        firstVisible: 0 // The first visible slide on the left. Useful when visibleSlides > 1.

      },
      mouseDown: false,
      mouseOver: false,
      touch: {
        enabled: true,
        dragging: false,
        // When lazy & lazyLoadOnDrag are true, try to lazy load the next visible slides
        // and set a flag that it already triggered to not keep trying in the same drag.
        lazyloadTriggered: false,
        justDragged: false,
        dragStartX: 0,
        dragNowX: 0,
        dragAmount: 0
      },
      transition: {
        currentTranslation: 0,
        speed: 0,
        animated: false
      },
      autoplayTimer: null,
      nextSlideIsClone: false,
      breakpointsData: {
        list: [],
        current: null
      },
      parallaxData: {
        translation: 0,
        slideshowOffsetTop: null,
        isVisible: false
      }
    };
  },
  computed: {
    // this.conf needs to be reactive so user can change a Vueper Slides option and everything gets updated.
    conf: function conf() {
      // Read config from the props then check if breakpoints are defined.
      // If so override the config with the breakpoint ones.
      var conf = _objectSpread2(_objectSpread2({}, this.$props), this.$props.breakpoints && this.$props.breakpoints[this.breakpointsData.current] || {}); // Overrides: once config from breakpoints is imported, we can use the `conf` object
      // and be sure all the options are up to date.
      // ------------------------------- //


      conf.slideMultiple = conf.slideMultiple ? conf.visibleSlides : 1;
      conf.gap = this.gap && parseInt(this.gap) || 0; // conf.gapPx = this.gap && this.gap.toString().includes('px')

      if (conf.visibleSlides > 1) conf['3d'] = false;

      if (conf.fade || conf.disableArrowsOnEdges || conf.visibleSlides > 1 || conf['3d']) {
        conf.infinite = false;
      } // Place arrows & bullets outside by default if visibleSlides > 1.


      if (conf.visibleSlides > 1 && conf.arrowsOutside === null) conf.arrowsOutside = true;
      if (conf.visibleSlides > 1 && conf.bulletsOutside === null) conf.bulletsOutside = true;
      if (this.touch.enabled !== conf.touchable) this.toggleTouchableOption(conf.touchable);

      if (conf.parallax && conf.parallaxFixedContent) {
        conf.slideContentOutside = 'top';
        conf.slideContentOutsideClass = 'parallax-fixed-content';
      } // ------------------------------- //


      return conf;
    },
    slidesCount: function slidesCount() {
      return this.slides.list.length;
    },
    // The total number of gaps to subtract for current track translation.
    // i.e. all the gaps on the left of the current slide.
    gapsCount: function gapsCount() {
      var _this$conf = this.conf,
          fade = _this$conf.fade,
          threeD = _this$conf['3d'],
          slideMultiple = _this$conf.slideMultiple,
          gap = _this$conf.gap;
      if (!gap || fade || threeD) return 0;
      if (this.multipleSlides1by1 && this.slides.current < this.preferredPosition) return 0; // nextSlideIsClone can only be 0 or 1 with infinite option.

      if (!this.slides.current && this.nextSlideIsClone) return this.slidesCount;
      if (this.nextSlideIsClone === 0) return -1;
      var gapsCount = this.slides.current / slideMultiple - this.preferredPosition;

      if (this.multipleSlides1by1 && this.slidePosAfterPreferred > 0) {
        gapsCount -= this.slidePosAfterPreferred;
      }

      return gapsCount;
    },
    // The number of slides remaining on the right of the current slide.
    slidesAfterCurrent: function slidesAfterCurrent() {
      return this.slidesCount - (this.slides.current + 1);
    },
    // When visibleSlides > 1, the preferred position is the most center slide amongst the visible ones.
    // If visibleSlides is an odd number the preferred position can never be at the center,
    // so take the closest on the left side.
    preferredPosition: function preferredPosition() {
      return this.multipleSlides1by1 ? Math.ceil(this.conf.visibleSlides / 2) - 1 : 0;
    },
    slidePosAfterPreferred: function slidePosAfterPreferred() {
      return this.conf.visibleSlides - this.preferredPosition - this.slidesAfterCurrent - 1;
    },
    multipleSlides1by1: function multipleSlides1by1() {
      return this.conf.visibleSlides > 1 && this.conf.slideMultiple === 1;
    },
    touchEnabled: {
      get: function get() {
        return this.slidesCount > 1 && this.touch.enabled;
      },
      set: function set(value) {
        this.touch.enabled = value;
      }
    },
    canSlide: function canSlide() {
      return this.slidesCount / this.conf.visibleSlides > 1;
    },
    firstSlide: function firstSlide() {
      var slide = this.slidesCount ? this.slides.list[0] : {};

      if (slide.style && typeof slide.style === 'string') {
        slide.style = slide.style.replace(/width: ?\d+.*?;?/, '');
      }

      return slide;
    },
    lastSlide: function lastSlide() {
      var slide = this.slidesCount ? this.slides.list[this.slidesCount - 1] : {};

      if (slide.style && typeof slide.style === 'string') {
        slide.style = slide.style.replace(/width: ?\d+.*?;?/, '');
      }

      return slide;
    },
    currentSlide: function currentSlide() {
      var currentSlide = this.slidesCount && this.slides.list[this.slides.current] || {};

      if (this.slides.current < this.slidesCount && currentSlide.id !== this.slides.activeId) {
        this.goToSlide(this.slides.current, {
          animation: false,
          autoPlaying: true
        });
      }

      return currentSlide;
    },
    vueperslidesClasses: function vueperslidesClasses() {
      return {
        'vueperslides--ready': this.isReady,
        'vueperslides--rtl': this.conf.rtl,
        'vueperslides--fade': this.conf.fade,
        'vueperslides--parallax': this.conf.parallax,
        'vueperslides--slide-image-inside': this.conf.slideImageInside,
        'vueperslides--touchable': this.touchEnabled && !this.disable,
        'vueperslides--fixed-height': this.conf.fixedHeight,
        'vueperslides--3d': this.conf['3d'],
        'vueperslides--slide-multiple': this.conf.slideMultiple > 1,
        'vueperslides--bullets-outside': this.conf.bulletsOutside,
        'vueperslides--animated': this.transition.animated,
        // While transitioning.
        'vueperslides--no-animation': !this.isReady
      };
    },
    vueperslidesStyles: function vueperslidesStyles() {
      return /^-?\d/.test(this.conf.fixedHeight) ? "height: ".concat(this.conf.fixedHeight) : null;
    },
    trackStyles: function trackStyles() {
      var styles = {};

      if (this.conf.parallax) {
        styles.transform = "translate3d(0, ".concat(this.parallaxData.translation, "%, 0)"); // Increase browser optimizations by allocating more machine resource.
        // ! \\ To be used wisely so deactivate when not needed.

        styles.willChange = this.parallaxData.isVisible ? 'transform' : 'auto';
      }

      return styles;
    },
    trackInnerStyles: function trackInnerStyles() {
      var styles = {};
      var _this$conf2 = this.conf,
          fade = _this$conf2.fade,
          threeD = _this$conf2['3d']; // Always override default transition (in CSS) if any transition.speed. But when
      // this.transition.animated is false, the class `no-animation` is added forcing
      // transition-duration 0ms in CSS.

      styles.transitionDuration = "".concat(this.transition.speed, "ms");

      if (threeD) {
        var rotation = this.transition.currentTranslation * 90 / 100; // Following calculation is equivalent to:
        // 'translateZ(slideshowWidth / 2) rotateY(' + rotation + 'deg)'
        // but does not require a fixed width.

        styles.transform = "rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(".concat(rotation, "deg)");
      } else if (!fade) {
        styles.transform = "translate3d(".concat(this.transition.currentTranslation, "%, 0, 0)"); // Increase browser optimizations by allocating more machine resource.
        // ! \\ To be used wisely so deactivate when not needed.

        styles.willChange = this.touch.dragging || this.transition.animated ? 'transform' : 'auto';
      }

      return styles;
    },
    bulletIndexes: function bulletIndexes() {
      var _this = this;

      return Array(Math.ceil(this.slidesCount / this.conf.slideMultiple)).fill().map(function (v, i) {
        return i * _this.conf.slideMultiple;
      });
    },
    arrowPrevDisabled: function arrowPrevDisabled() {
      return !this.slides.current && this.conf.disableArrowsOnEdges;
    },
    arrowNextDisabled: function arrowNextDisabled() {
      var _this$conf3 = this.conf,
          disableArrowsOnEdges = _this$conf3.disableArrowsOnEdges,
          visibleSlides = _this$conf3.visibleSlides,
          slideMultiple = _this$conf3.slideMultiple;
      var lastSlide = this.slides.current + (slideMultiple > 1 && visibleSlides > 1 ? visibleSlides - 1 : 0);
      return lastSlide === this.slidesCount - 1 && disableArrowsOnEdges;
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.container = this.$refs.vueperslides;
      this.touchEnabled = this.conf.touchable; // Store speed in extra variable because transition.speed can be set to 0,
      // then after slide change we need to reapply original speed.

      this.transition.speed = this.conf.transitionSpeed;

      if (Object.keys(this.breakpoints).length) {
        this.setBreakpointsList();
        this.setBreakpointConfig(this.getCurrentBreakpoint());
      }

      var options = {
        animation: false,
        autoPlaying: this.conf.autoplay
      };
      this.goToSlide(this.conf.initSlide - 1, options);
      this.bindEvents(); // Give it a tick to be mounted in the DOM.

      this.$nextTick(function () {
        _this2.isReady = true;

        _this2.emit('ready');
      });
    },
    // Emit a named event outside the component with 2 possible parameters:
    // current slide info & next slide info.
    emit: function emit(name) {
      var includeCurrentSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var includeNextSlide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var args = null;

      if (includeCurrentSlide || typeof includeNextSlide === 'number') {
        args = {};

        if (includeCurrentSlide && this.slides.activeId && this.slidesCount) {
          args.currentSlide = this.getSlideData(this.slides.current);
        }

        if (typeof includeNextSlide === 'number' && this.slidesCount) {
          var _this$getSlideInRange = this.getSlideInRange(includeNextSlide),
              nextSlideIndex = _this$getSlideInRange.nextSlide;

          args.nextSlide = this.getSlideData(nextSlideIndex);
        }
      }

      this.$emit.apply(this, _toConsumableArray(args ? [name, args] : [name]));
    },
    getSlideData: function getSlideData(index) {
      var slide = this.slides.list[index];
      var data = {};

      if (slide) {
        data = {
          index: index,
          title: slide.title,
          content: slide.content,
          contentSlot: slide.contentSlot,
          image: slide.image,
          link: slide.link
        };
      }

      return data;
    },
    setBreakpointsList: function setBreakpointsList() {
      this.breakpointsData.list = [99999].concat(_toConsumableArray(Object.keys(this.breakpoints))).map(function (bp) {
        return parseInt(bp);
      }).sort(function (a, b) {
        return parseInt(b) - parseInt(a);
      });
    },
    getCurrentBreakpoint: function getCurrentBreakpoint() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var breakpoints = [windowWidth].concat(_toConsumableArray(this.breakpointsData.list)).sort(function (a, b) {
        return parseInt(b) - parseInt(a);
      });
      return this.breakpointsData.list[breakpoints.indexOf(windowWidth) - 1];
    },
    hasBreakpointChanged: function hasBreakpointChanged(breakpoint) {
      return this.breakpointsData.current !== parseInt(breakpoint);
    },
    setBreakpointConfig: function setBreakpointConfig(breakpoint) {
      var bp = this.breakpoints && this.breakpoints[breakpoint] || {};
      var slideMultipleChanged = bp.slideMultiple && bp.slideMultiple !== this.conf.slideMultiple;
      var visibleSlidesChanged = bp.visibleSlides && bp.visibleSlides !== this.conf.visibleSlides; // this.conf gets updated by itself when this.breakpointsData.current changes.

      this.breakpointsData.current = breakpoint;
      this.slides.current = this.getFirstVisibleSlide(this.slides.focus);

      if (slideMultipleChanged || visibleSlidesChanged) {
        this.goToSlide(this.slides.current, {
          breakpointChange: true
        });
      } else this.updateTrackTranslation();
    },
    bindEvents: function bindEvents() {
      var _this3 = this;

      var hasTouch = ('ontouchstart' in window); // Allow mouse or touch dragging slides.

      if (this.touchEnabled) this.toggleTouchableOption(true); // Pause autoplay on mouseover or touch.

      if (this.conf.autoplay) {
        if (this.conf.pauseOnHover && !hasTouch) {
          this.container.addEventListener('mouseenter', this.onMouseEnter);
          this.container.addEventListener('mouseleave', this.onMouseLeave);
        } else if (this.conf.pauseOnTouch && hasTouch) {
          document.addEventListener('touchstart', function (e) {
            _this3[_this3.$el.contains(e.target) ? 'onSlideshowTouch' : 'onOustideTouch']();
          });
        }
      } // Breakpoints or parallax need a resize event.


      if (this.breakpointsData.list.length || this.conf.parallax) {
        window.addEventListener('resize', this.onResize);
      } // Parallax slideshow.


      if (this.conf.parallax) {
        // First render the onload translation.
        this.refreshParallax(); // Then add event listener.
        // The scrolling DOM element may be a different element than the HTML document.

        if (this.pageScrollingElement) {
          // Store the found DOM element in variable for fast access in onScroll().
          this.parallaxData.scrollingEl = document.querySelector(this.pageScrollingElement);
          this.parallaxData.scrollingEl.addEventListener('scroll', this.onScroll);
        } else document.addEventListener('scroll', this.onScroll);
      }
    },
    // Recursively sum all the offsetTop values from current element up the tree until body.
    // By doing so a padding or margin on a parent won't cause a wrong calculation.
    getSlideshowOffsetTop: function getSlideshowOffsetTop() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.parallaxData.slideshowOffsetTop === null || force) {
        var el = this.container;
        var top = el.offsetTop;

        while (el = el.offsetParent) {
          top += el.offsetTop;
        }

        this.parallaxData.slideshowOffsetTop = top;
      }

      return this.parallaxData.slideshowOffsetTop;
    },
    onScroll: function onScroll() {
      var scrollingEl = this.parallaxData.scrollingEl;
      var doc = document.documentElement;
      var scrollTop = 0;
      if (scrollingEl) scrollTop = scrollingEl.scrollTop;else scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var windowHeight = window.innerHeight || doc.clientHeight || document.body.clientHeight;
      var slideshowHeight = this.container.clientHeight;
      var slideshowTopOffset = this.getSlideshowOffsetTop(); // The distance between the bottom line of the current vueperslides slideshow and top of window.
      // Negative value means the slideshow is totally above the current window box.

      var vsBottom2WinTop = slideshowTopOffset + slideshowHeight - scrollTop; // The distance between the top line of the current vueperslides slideshow and bottom of window.
      // Negative value means the slideshow is totally bellow the current window box.

      var vsTop2winBottom = windowHeight + scrollTop - slideshowTopOffset;
      this.parallaxData.isVisible = vsBottom2WinTop > 0 && vsTop2winBottom > 0; // Only apply translation when slideshow is visible.

      if (this.parallaxData.isVisible) {
        var heightToCoverWithTranslation = windowHeight + slideshowHeight;
        var percentage = vsBottom2WinTop * 100 / heightToCoverWithTranslation;
        var translatePercentage = this.conf.parallax === -1 ? 100 - percentage : percentage;
        this.parallaxData.translation = -translatePercentage / 2;
      }
    },
    onResize: function onResize() {
      if (this.breakpointsData.list.length) {
        var breakpoint = this.getCurrentBreakpoint();
        if (this.hasBreakpointChanged(breakpoint)) this.setBreakpointConfig(breakpoint);
      } // Only refresh parallaxData.slideshowOffsetTop value on resize for better performance.


      if (this.conf.parallax) this.getSlideshowOffsetTop(true);
    },
    // Not on touch device.
    onMouseEnter: function onMouseEnter() {
      this.mouseOver = true;
      if (this.conf.pauseOnHover && this.conf.autoplay) this.isPaused = true;
    },
    // Not on touch device.
    onMouseLeave: function onMouseLeave() {
      this.mouseOver = false;
      if (this.conf.pauseOnHover && this.conf.autoplay) this.isPaused = false;
    },
    // Both on desktop and touch device.
    onMouseDown: function onMouseDown(e) {
      if (!this.touchEnabled || this.disable) return;
      if (!e.touches && this.preventYScroll) e.preventDefault();
      this.mouseDown = true; // Store drag start in var for distance calculation in onMouseUp().

      this.touch.dragStartX = this.getCurrentMouseX(e);
      if (!this.conf.draggingDistance) this.updateTrackTranslation(this.touch.dragStartX);
    },
    // Both on desktop and touch device.
    onMouseMove: function onMouseMove(e) {
      if (this.mouseDown || this.touch.dragging) {
        if (this.conf.autoplay) this.isPaused = true; // Pause any autoplay while dragging.

        if (this.preventYScroll) e.preventDefault();
        this.mouseDown = false;
        this.touch.dragging = true; // Store current drag position in var for distance calculation in onMouseUp().

        this.touch.dragNowX = this.getCurrentMouseX(e);

        if (this.conf.draggingDistance) {
          this.touch.dragAmount = this.touch.dragNowX - this.touch.dragStartX;
          var dragAmountPercentage = this.touch.dragAmount / this.container.clientWidth;
          this.updateTrackTranslation();
          this.transition.currentTranslation += 100 * dragAmountPercentage;
        } else this.updateTrackTranslation(this.touch.dragNowX);
      }
    },
    // Both on desktop and touch device.
    // Note: on touch device, the e.target is the same target as the one you start dragging.
    onMouseUp: function onMouseUp(e) {
      var _this4 = this;

      this.mouseDown = false; // If no mouse move there is nothing to do so don't go further.

      if (!this.touch.dragging) return this.cancelSlideChange();else if (this.conf.autoplay) {
        // Since the autoplay is always paused while dragging, resume autoplay if:
        // - not touch device and not hover slideshow
        // - touch device and pauseOnTouch is set to false.
        var hasTouch = ('ontouchstart' in window);
        if (!hasTouch && !this.mouseOver) this.isPaused = false; // On touch device if pauseOnTouch is false, resume the autoplay on release of a slide dragging.
        else if (!this.conf.pauseOnTouch) this.isPaused = false;
      }
      this.touch.dragging = false;
      var dragAmount = this.conf.draggingDistance ? -this.touch.dragAmount : 0;
      var dragPercentageStart = (this.touch.dragStartX - this.container.offsetLeft) / this.container.clientWidth;
      var dragPercentageNow = (this.touch.dragNowX - this.container.offsetLeft) / this.container.clientWidth;
      var dragPercentage = ((dragPercentageStart < 0.5 ? 0 : 1) - dragPercentageNow) * 100;
      var forwards = (dragAmount || dragPercentage) > 0;
      if (this.conf.rtl) forwards = !forwards;
      var reasonsToCancelSliding = [// Dragging distance conf is set & drag amount is lesser than dragging distance conf.
      Math.abs(dragAmount) < this.conf.draggingDistance, // Dragging distance conf is not set & dragging is lesser than 50%.
      !this.conf.draggingDistance && Math.abs(dragPercentage) < 50, // arrowNext is disabled and dragging beyond last slide.
      this.arrowPrevDisabled && !this.slides.current && !forwards, // arrowPrev is disabled and dragging beyond first slide.
      this.arrowNextDisabled && this.slides.current === this.slidesCount - 1 && forwards];
      if (reasonsToCancelSliding.includes(true)) this.cancelSlideChange();else {
        var targetSlide = this.slides.current + this.conf.slideMultiple * (forwards ? 1 : -1);
        this.emit(forwards ? 'next' : 'previous');
        this.goToSlide(targetSlide);
      }
      this.touch.dragStartX = null;
      this.touch.dragNowX = null;
      this.touch.dragAmount = null; // Can be called from a click event.
      // As click event triggers after mouseup, we need a persistent variable until
      // click event triggers.

      this.touch.justDragged = true;
      setTimeout(function () {
        return _this4.touch.justDragged = false;
      }, 50);
      this.touch.lazyloadTriggered = false; // Reinit for the next drag.
    },
    onSlideshowTouch: function onSlideshowTouch() {
      this.isPaused = true;
    },
    onOustideTouch: function onOustideTouch() {
      this.isPaused = false;
    },
    // Check if dragging just happened - also for external use.
    justDragged: function justDragged() {
      return this.touch.justDragged;
    },
    // Dragging did not pass conditions to change slide, snap back to current slide.
    cancelSlideChange: function cancelSlideChange() {
      if (!this.conf.fade) this.updateTrackTranslation();
    },
    getCurrentMouseX: function getCurrentMouseX(e) {
      return 'ontouchstart' in window ? e.touches[0].clientX : e.clientX;
    },

    /**
     * The slides track translation of most cases, in other cases this can still be used as a base calc.
     */
    getBasicTranslation: function getBasicTranslation() {
      return this.slides.current / this.conf.visibleSlides;
    },

    /**
     * Update the current translation of the slides track - for sliding slideshows.
     * The resulting translation will be set in percentage and negative value.
     *
     * @param {null | float} currentMouseX whether the slide track is being dragged and if so
     *                                     the value of the current drag.
     */
    updateTrackTranslation: function updateTrackTranslation() {
      var currentMouseX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var translation = this.getBasicTranslation();
      var _this$conf4 = this.conf,
          infinite = _this$conf4.infinite,
          visibleSlides = _this$conf4.visibleSlides,
          slideMultiple = _this$conf4.slideMultiple,
          gap = _this$conf4.gap,
          threeD = _this$conf4['3d'],
          lazy = _this$conf4.lazy,
          lazyLoadOnDrag = _this$conf4.lazyLoadOnDrag; // nextSlideIsClone can be 0 or 1 or false.

      if (infinite && this.nextSlideIsClone !== false) {
        translation = (this.nextSlideIsClone ? this.slidesCount : -1) / visibleSlides;
      } // Add all the gaps to the translation except if current slide is first.


      if (gap) {
        translation += this.gapsCount / (visibleSlides / slideMultiple) * gap / 100;
      } // If dragging.


      if (infinite && this.nextSlideIsClone !== false) {} else if (this.touch.dragStartX && currentMouseX) {
        var dragPercentage = 0;
        var dragPercentageStart = (this.touch.dragStartX - this.container.offsetLeft) / this.container.clientWidth;
        var dragPercentageNow = (currentMouseX - this.container.offsetLeft) / this.container.clientWidth;

        if (threeD) {
          // Prevent dragging more than 1 face away from front face,
          // So that we don't need to update faces on drag.
          var range = Math.round(dragPercentageStart) ? [0, 2] : [-1, 1];
          dragPercentageNow = Math.min(Math.max(dragPercentageNow, range[0]), range[1]);
        }

        dragPercentage = (dragPercentageStart < 0.5 ? 0 : 1) - dragPercentageNow;
        translation += dragPercentage * (this.conf.rtl ? -1 : 1);

        if (lazy && lazyLoadOnDrag && !this.touch.lazyloadTriggered) {
          this.touch.lazyloadTriggered = true;
          var nextSlideGuess = this.slides.current + (dragPercentage > 0 ? 1 : -1) * visibleSlides; // If out of range and infinite, load the correct clone original, that will update the clone.

          if (infinite && nextSlideGuess === -1) nextSlideGuess = this.slidesCount - 1;else if (infinite && nextSlideGuess === this.slidesCount) nextSlideGuess = 0; // Load the next visible slides images.

          for (var i = 0; i < visibleSlides; i++) {
            var slide = this.slides.list[nextSlideGuess + i];
            if (slide && !slide.loaded) this.loadSlide(slide, nextSlideGuess + i);
          }
        }
      } // Special behavior if multiple visible slides and sliding 1 by 1:
      // The translation is modified as user slides just to look nicer.


      if (this.multipleSlides1by1 && !infinite) {
        // The preferred position is the most center slide amongst the visible ones,
        // if `visibleSlides` is an odd number the preferred position can never be at the center,
        // so take the closest on the left side.
        var preferredPositionIsPassed = this.slidePosAfterPreferred > 0; // Subtract the first slides without translation, until we reach the preferred position.

        var subtractFromTranslation = Math.min(this.preferredPosition, this.slides.current); // From next position after the preferred position.

        if (preferredPositionIsPassed) subtractFromTranslation += this.slidePosAfterPreferred;
        translation -= subtractFromTranslation / visibleSlides;
      }

      this.transition.currentTranslation = -translation * 100 * (this.conf.rtl ? -1 : 1);
    },
    pauseAutoplay: function pauseAutoplay() {
      this.isPaused = true;
      clearTimeout(this.autoplayTimer);
      this.autoplayTimer = 0;
      this.emit('autoplay-pause');
    },
    resumeAutoplay: function resumeAutoplay() {
      this.isPaused = false;
      this.doAutoplay();
      this.emit('autoplay-resume');
    },
    doAutoplay: function doAutoplay() {
      var _this5 = this;

      this.autoplayTimer = setTimeout(function () {
        _this5.goToSlide(_this5.slides.current + _this5.conf.slideMultiple, {
          autoPlaying: true
        });
      }, this.currentSlide.duration || this.conf.duration);
    },
    previous: function previous() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (emit) this.emit('previous');
      this.goToSlide(this.slides.current - this.conf.slideMultiple);
    },
    next: function next() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (emit) this.emit('next');
      this.goToSlide(this.slides.current + this.conf.slideMultiple);
    },
    refreshParallax: function refreshParallax() {
      var _this6 = this;

      setTimeout(function () {
        _this6.onResize();

        _this6.onScroll();
      }, 100);
    },

    /**
     * When visibleSlides > 1, get the first visible slide from given index.
     * The first visible slide may be before the given index (on the left).
     *
     * @param {number} index the slide index where to get the next visible one from.
     * @return {number} the first visible slide index.
     */
    getFirstVisibleSlide: function getFirstVisibleSlide(index) {
      var _this$conf5 = this.conf,
          slideMultiple = _this$conf5.slideMultiple,
          visibleSlides = _this$conf5.visibleSlides;
      var firstVisible = this.slides.current;

      if (visibleSlides > 1 && slideMultiple === visibleSlides) {
        firstVisible = Math.floor(index / visibleSlides) * visibleSlides;
      } else if (this.multipleSlides1by1) {
        firstVisible = index - Math.min(index, this.preferredPosition) - Math.max(this.slidePosAfterPreferred, 0);
      }

      return firstVisible;
    },
    getSlideInRange: function getSlideInRange(index, autoPlaying) {
      var clone = false; // If infinite enabled, going out of range takes the first slide from the other end.

      if (this.conf.infinite && index === -1) clone = 0;else if (this.conf.infinite && index === this.slidesCount) clone = 1; // Generic case:
      // If going beyond slides count, take the modulo as next slide index.
      // E.g. If we want to access slide 9 and there are only 6 slides, go to slide 3.
      // (index + this.slidesCount) to also handle negative index.

      var newIndex = (index + this.slidesCount) % this.slidesCount;

      if (this.conf.slideMultiple > 1) {
        var lastSlideItems = this.slidesCount % this.conf.slideMultiple || this.conf.slideMultiple;
        var missingItems = this.conf.slideMultiple - lastSlideItems;
        newIndex += index < 0 ? missingItems : 0;
        newIndex = this.getFirstVisibleSlide(newIndex);
      } // Disable sliding if already on edge with disableArrowsOnEdges.


      if (this.conf.disableArrowsOnEdges && (index < 0 || index > this.slidesCount - 1) && !autoPlaying) {
        newIndex = this.slides.current;
      }

      return {
        nextSlide: newIndex,
        clone: clone
      };
    },
    // animation = slide transition will be animated.
    // autoPlaying = going to the next slide from autoplay - no user intervention.
    // jumping = after reaching a clone, the callback jumps back to original slide with no animation.
    goToSlide: function goToSlide(index) {
      var _this7 = this;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$animation = _ref.animation,
          animation = _ref$animation === void 0 ? true : _ref$animation,
          _ref$autoPlaying = _ref.autoPlaying,
          autoPlaying = _ref$autoPlaying === void 0 ? false : _ref$autoPlaying,
          _ref$jumping = _ref.jumping,
          jumping = _ref$jumping === void 0 ? false : _ref$jumping,
          _ref$breakpointChange = _ref.breakpointChange,
          breakpointChange = _ref$breakpointChange === void 0 ? false : _ref$breakpointChange,
          _ref$emit = _ref.emit,
          emit = _ref$emit === void 0 ? true : _ref$emit;

      if (!this.slidesCount || this.disable) return; // When autoplay is on and user slides via kbd arrows but not mouse hovering, reset the timer.

      if (this.conf.autoplay && !autoPlaying && !this.isPaused) {
        this.isPaused = true;
        this.$nextTick(function () {
          return _this7.isPaused = false;
        });
      }

      this.transition.animated = animation;
      setTimeout(function () {
        return _this7.transition.animated = false;
      }, this.transitionSpeed); // Get the next slide index and whether it's a clone.

      var _this$getSlideInRange2 = this.getSlideInRange(index, autoPlaying),
          nextSlide = _this$getSlideInRange2.nextSlide,
          nextSlideIsClone = _this$getSlideInRange2.clone;

      this.nextSlideIsClone = nextSlideIsClone; // If the slide is not found don't go further.

      if (!this.slides.list[nextSlide]) return;

      if (this.conf.lazy) {
        // Load each of the next visible slide images.
        for (var i = 0; i < this.conf.visibleSlides; i++) {
          var slide = this.slides.list[nextSlide + i];
          if (slide && !slide.loaded) this.loadSlide(slide, nextSlide + i);
        }
      } // Emit event. First use of `goToSlide` is while init, so should not propagate an event.


      if (this.isReady && !jumping && emit) this.emit('before-slide', true, nextSlide); // First pause all the videos.
      // this.slides.list.forEach(slide => slide.video && slide.video.pause())

      var nextSlideObj = this.slides.list[nextSlide];

      if (this.isReady && nextSlideObj.video) {
        var currSlideObj = this.slides.list[this.slides.current];
        if (currSlideObj.video) currSlideObj.video.pause();
        nextSlideObj.video.play();
      } // Infinite sliding with cloned slides:
      // When reaching last slide and going next the cloned slide of the first slide
      // shows up, when the animation ends the real change to the first slide is done
      // immediately with no animation.
      // Same principle when going beyond first slide.


      if (nextSlideIsClone !== false) {
        // Gives clone id (0 or 1) or false.
        setTimeout(function () {
          // inside the callback, also check if it is not too late to apply next slide
          // (user may have slid fast multiple times) if so cancel callback.
          var passedCloneBackward = index === -1 && _this7.slides.current !== _this7.slidesCount - 1;
          var passedCloneForward = index === _this7.slidesCount && _this7.slides.current !== 0;
          var tooLateToSetTimeout = passedCloneBackward || passedCloneForward;

          if (!tooLateToSetTimeout) {
            _this7.transition.speed = 0;

            _this7.goToSlide(nextSlideIsClone ? 0 : _this7.slidesCount - 1, {
              animation: false,
              jumping: true
            });

            setTimeout(function () {
              return _this7.transition.speed = _this7.conf.transitionSpeed;
            }, 50);
          }
        }, this.transition.speed - 50);
      }

      this.slides.current = nextSlide;
      this.slides.firstVisible = this.getFirstVisibleSlide(nextSlide); // Don't change the focus slide if calling goToSlide from breakpoint change.
      // The focused slide is to keep track which slide to snap to when switching
      // between 2 breakpoints that have multiple visible slides.

      if (!breakpointChange) this.slides.focus = nextSlide; // Only apply sliding transition when the slideshow animation type is `slide`.

      if (!this.conf.fade) this.updateTrackTranslation();
      this.slides.activeId = this.slides.list[this.slides.current].id;
      if (this.conf.autoplay && autoPlaying && !this.isPaused) this.doAutoplay();

      if (this.slidesCount) {
        // First use of goToSlide is while init, so should not propagate an event.
        if (this.$slots.default[this.slides.current] && this.isReady && !jumping && emit) {
          this.emit('slide');
        } // Focus the current bullet for accessibility.
        // First get the ref on bullets list then try to find buttons.
        // As this is customizable through a slot there might not be any.


        if (this.isReady && this.conf.bullets && !autoPlaying && !jumping && this.$refs.bullets) {
          var bulletButtons = this.$refs.bullets.children;
          var activeBulletButton = bulletButtons && bulletButtons[this.slides.current / this.conf.slideMultiple];

          if (activeBulletButton && activeBulletButton.nodeName.toLowerCase() === 'button') {
            // Prevent auto-scrolling to a slideshow that is not in viewport on bullet focus.
            var scrollingDomEl = document.documentElement;
            if (this.pageScrollingElement) scrollingDomEl = document.querySelector(this.pageScrollingElement);
            var scrollTop = scrollingDomEl.scrollTop;
            activeBulletButton.focus({
              preventScroll: true
            }); // Safari can't `preventScroll`, hence the scrollTop.

            scrollingDomEl.scrollTop = scrollTop;
          }
        }
      }
    },
    addSlide: function addSlide(newSlide) {
      this.slides.list.push(newSlide); // If the slideshow was initialized with no slides and with autoplay, resume the autoplay
      // when the first slide is added.

      if (this.isReady && this.slidesCount === 1 && this.conf.autoplay && this.isPaused) {
        this.isPaused = false;
      }

      return this.slidesCount;
    },
    addClone: function addClone() {
      // On adding clone, recalculate the current track translation.
      // (case when starting in infinite mode with no slide until later loaded).
      this.updateTrackTranslation();
      return this.slidesCount;
    },
    updateSlide: function updateSlide(slideId, newProps) {
      var slide = this.slides.list.find(function (slide) {
        return slide.id === slideId;
      });
      if (slide) slide = Object.assign(slide, newProps);
    },
    removeSlide: function removeSlide(slideId) {
      var index = this.slides.list.findIndex(function (slide) {
        return slide.id === slideId;
      });

      if (index > -1) {
        this.slides.list.splice(index, 1); // Remove the slide.
        // If the slide to remove is the current slide, slide to the previous slide,
        // unless it was the only one.

        if (this.slidesCount && slideId === this.slides.activeId) {
          this.goToSlide(index - 1, {
            autoPlaying: true
          });
        }
      } // This can only happen if removing and adding slides very fast - like hot reloading.


      if (this.slides.current >= this.slidesCount) this.goToSlide(0, {
        autoPlaying: true
      });
    },
    // Lazy loading a slide image.
    loadSlide: function loadSlide(slide, index) {
      var _this8 = this;

      slide.loadImage().then(function (response) {
        var image = response.image,
            style = response.style;
        slide.loaded = true;
        slide.image = image;
        slide.style = style;

        _this8.$emit('image-loaded', _this8.getSlideData(index));
      }, function () {
        slide.loaded = false;

        _this8.$emit('image-failed', _this8.getSlideData(index));
      });
    },
    toggleTouchableOption: function toggleTouchableOption(isTouchable) {
      var track = this.$refs.track;
      if (!track) return;
      this.touchEnabled = isTouchable;
      var hasTouch = ('ontouchstart' in window); // Touch enabled slideshow.

      if (isTouchable) {
        this.$refs.track.addEventListener(hasTouch ? 'touchstart' : 'mousedown', this.onMouseDown, {
          passive: !this.preventYScroll
        });
        document.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
          passive: !this.preventYScroll
        });
        document.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp, {
          passive: true
        });
      } else this.removeEventListeners();
    },
    removeEventListeners: function removeEventListeners() {
      var hasTouch = ('ontouchstart' in window);
      this.$refs.track.removeEventListener(hasTouch ? 'touchstart' : 'mousedown', this.onMouseDown, {
        passive: !this.preventYScroll
      });
      document.removeEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
        passive: !this.preventYScroll
      });
      document.removeEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp, {
        passive: true
      });
    }
  },
  watch: {
    isPaused: function isPaused(bool) {
      this[bool ? 'pauseAutoplay' : 'resumeAutoplay']();
    }
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    var _this9 = this;

    this.removeEventListeners();

    if (this.pageScrollingElement) {
      document.querySelector(this.pageScrollingElement).removeEventListener('scroll', this.onScroll);
    } else document.removeEventListener('scroll', this.onScroll);

    document.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('touchstart', function (e) {
      _this9[_this9.$el.contains(e.target) ? 'onSlideshowTouch' : 'onOustideTouch']();
    });
    this.container.removeEventListener('mouseenter', this.onMouseEnter);
    this.container.removeEventListener('mouseleave', this.onMouseLeave);
  }
});
// CONCATENATED MODULE: ./src/components/vueperslides/vueperslides.vue?vue&type=script&lang=js&
 /* harmony default export */ var vueperslides_vueperslidesvue_type_script_lang_js_ = (vueperslidesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vueperslides/vueperslides.vue?vue&type=style&index=0&lang=scss&
var vueperslidesvue_type_style_index_0_lang_scss_ = __nested_webpack_require_128568__("682b");

// CONCATENATED MODULE: ./src/components/vueperslides/vueperslides.vue






/* normalize component */

var vueperslides_component = normalizeComponent(
  vueperslides_vueperslidesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vueperslides = (vueperslides_component.exports);
// CONCATENATED MODULE: ./src/components/vueperslides/index.js



// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __nested_webpack_require_209051__) {

"use strict";

var $ = __nested_webpack_require_209051__("23e7");
var isObject = __nested_webpack_require_209051__("861d");
var isArray = __nested_webpack_require_209051__("e8b5");
var toAbsoluteIndex = __nested_webpack_require_209051__("23cb");
var toLength = __nested_webpack_require_209051__("50c4");
var toIndexedObject = __nested_webpack_require_209051__("fc6a");
var createProperty = __nested_webpack_require_209051__("8418");
var wellKnownSymbol = __nested_webpack_require_209051__("b622");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_209051__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __nested_webpack_require_211020__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_211020__("44ad");
var requireObjectCoercible = __nested_webpack_require_211020__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __nested_webpack_require_212173__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __nested_webpack_require_212173__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fe3f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=vueperslides.common.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;