/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

wp.blocks.registerBlockType('plugin/card-block', {
  title: "Test Title",
  icon: "smiley",
  category: "common",
  attributes: {
    skyColor: {
      type: "string"
    },
    grassColor: {
      type: "string"
    }
  },
  edit: function (props) {
    // seen in admin
    // type of html elements you want to create
    // 2nd rule to describe element. such as adding a class or inline style, or null
    // 3rd is text you want in there
    // value needed to save on reload of admin
    // on change needed to see change of values in guttenberg
    function updateBackground(event) {
      props.setAttributes({
        skyColor: event.target.value
      });
    }

    function updateGrassColorr(event) {
      props.setAttributes({
        grassColor: event.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "skky color",
      value: props.attributes.Background,
      onChange: updateSkyColorr
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "graass color",
      value: props.attributes.GrassColorr,
      onChange: updateGrassColorr
    }));
  },
  save: function (props) {
    // seen live
    // 3rd is text you want in there
    return null;
  }
});
wp.blocks.registerBlockType('plugin/background-card-block', {
  title: "Background Card",
  icon: "smiley",
  category: "common",
  attributes: {
    Background: {
      type: "string"
    },
    content: {
      type: "string"
    }
  },
  edit: function (props) {
    // seen in admin
    // type of html elements you want to create
    // 2nd rule to describe element. such as adding a class or inline style, or null
    // 3rd is text you want in there
    // value needed to save on reload of admin
    // on change needed to see change of values in guttenberg
    function background_image(event) {
      props.setAttributes({
        Background: event.target.value
      });
    }

    function content(event) {
      props.setAttributes({
        content: event.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "background url",
      value: props.attributes.Background,
      onChange: background_image
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "content",
      value: props.attributes.content,
      onChange: content
    }));
  },
  save: function (props) {
    // seen live
    // 3rd is text you want in there
    return null;
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map