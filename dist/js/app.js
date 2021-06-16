/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
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
    }]
  },
  methods: {},
  mounted: function mounted() {
    var allCounters = document.querySelectorAll(".statcounter");
    allCounters.forEach(function (counter) {
      counter.innerText = 0;

      var updateCounter = function updateCounter() {
        var target = +counter.getAttribute("data-target");
        console.log(target);
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

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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