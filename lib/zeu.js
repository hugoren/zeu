(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zeu", [], factory);
	else if(typeof exports === 'object')
		exports["zeu"] = factory();
	else
		root["zeu"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation-timer.js":
/*!********************************!*\
  !*** ./src/animation-timer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = __webpack_require__(/*! ./global */ "./src/global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnimationTimer =
/*#__PURE__*/
function () {
  function AnimationTimer() {
    _classCallCheck(this, AnimationTimer);

    // Bind the animate function.
    this.animate = this.animate.bind(this); // Animation parameters.

    this._fps = 60;
    this._fpsInterval = 1000 / this._fps;
    this._lastFrame = Date.now();
  }

  _createClass(AnimationTimer, [{
    key: "animate",
    value: function animate() {
      window.requestAnimationFrame(this.animate); // FPS control

      var now = Date.now();
      var elapsed = now - this._lastFrame;

      if (elapsed > this._fpsInterval) {
        this._lastFrame = now - elapsed % this._fpsInterval; // Draw

        var _loop = function _loop(i) {
          var drawFrameObj = _global.GLOBAL.requestAnimationFrameArray[i]; // Buy me some time.

          setTimeout(function () {
            drawFrameObj.func.call(drawFrameObj.self);
          }, 0);
        };

        for (var i = 0; i < _global.GLOBAL.requestAnimationFrameArray.length; i++) {
          _loop(i);
        }
      }
    }
  }]);

  return AnimationTimer;
}();

exports.default = AnimationTimer;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auto-scroll-panel.js":
/*!**********************************!*\
  !*** ./src/auto-scroll-panel.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AutoScrollPanel =
/*#__PURE__*/
function () {
  function AutoScrollPanel(baseDiv) {
    _classCallCheck(this, AutoScrollPanel);

    this._div = baseDiv;
    this._array = [];
    this._maxQueueCapacity = 50;
    this._isUp = true;
  }

  _createClass(AutoScrollPanel, [{
    key: "push",
    value: function push(boxDiv) {
      if (this.isExceedCapacity()) {
        this.pop();
      } else {
        if (this._isUp) {
          this._div.prepend(boxDiv);

          this._div.scrollBottom = this._div.scrollHeight;
        } else {
          this._div.append(boxDiv);

          this._div.scrollTop = this._div.scrollHeight;
        }
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      var f = this._array.shift();

      this._div.removeChild(f);
    }
  }, {
    key: "isExceedCapacity",
    value: function isExceedCapacity() {
      return this._array.length >= this._maxQueueCapacity;
    }
  }]);

  return AutoScrollPanel;
}();

exports.default = AutoScrollPanel;
module.exports = exports["default"];

/***/ }),

/***/ "./src/bar-meter.js":
/*!**************************!*\
  !*** ./src/bar-meter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = _interopRequireDefault(__webpack_require__(/*! ./color */ "./src/color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticalGauge =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(VerticalGauge, _BaseCanvas);

  function VerticalGauge(canvas) {
    var _this;

    _classCallCheck(this, VerticalGauge);

    _this = _possibleConstructorReturn(this, (VerticalGauge.__proto__ || Object.getPrototypeOf(VerticalGauge)).call(this, canvas));
    _this._a = 0;
    return _this;
  }

  _createClass(VerticalGauge, [{
    key: "drawRect",
    value: function drawRect(i) {
      var x = 10;
      var y = i * 15 + 10;
      this._ctx.fillStyle = new _color.default().fill;

      this._ctx.fillRect(x, y, 100, 10);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this._timer = setInterval(function () {
        _this2.drawRect(_this2._a);

        _this2._a += 1;

        if (_this2._a > 10) {
          _this2._a = 0;

          _this2.clearAll();
        }
      }, 100);
    }
  }]);

  return VerticalGauge;
}(_baseCanvas.default);

exports.default = VerticalGauge;
module.exports = exports["default"];

/***/ }),

/***/ "./src/base-canvas.js":
/*!****************************!*\
  !*** ./src/base-canvas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = __webpack_require__(/*! ./global */ "./src/global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseCanvas =
/*#__PURE__*/
function () {
  function BaseCanvas(baseDiv) {
    _classCallCheck(this, BaseCanvas);

    this._div = baseDiv;
    this._canvas = document.createElement('canvas');

    this._canvas.setAttribute('width', baseDiv.clientWidth);

    this._canvas.setAttribute('height', baseDiv.clientHeight);

    this._div.appendChild(this._canvas);

    this._ctx = this._canvas.getContext('2d');
    this._width = 200;
    this._height = 200; // Base scale on the height.
    // this._heightScale = this._canvas.height / this._height;
    // this._canvas.style.transformOrigin = '0 0'; // scale from top left
    // this._canvas.style.transform = 'scale(' + this._heightScale + ')';
    // Bind the drawFrame function.

    this.drawFrame = this.drawFrame.bind(this); // Default color

    this._fontColor = '#181818';
    this._lineColor = '#F8F8FF';
    this._fillColor = '#00D7AF';
  }

  _createClass(BaseCanvas, [{
    key: "scale",
    value: function scale() {
      this._ctx.scale(this._heightScale, this._heightScale);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var index = this.getAnimationFrameArrayPos();

      if (index === -1) {
        _global.GLOBAL.requestAnimationFrameArray.push(this.drawFrameObj());
      }
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var index = this.getAnimationFrameArrayPos();

      if (index !== -1) {
        _global.GLOBAL.requestAnimationFrameArray.splice(index, 1);
      }
    }
  }, {
    key: "drawFrameObj",
    value: function drawFrameObj() {
      return {
        func: this.drawFrame,
        self: this
      };
    }
  }, {
    key: "getAnimationFrameArrayPos",
    value: function getAnimationFrameArrayPos() {
      var index = -1;

      for (var i = 0; i < _global.GLOBAL.requestAnimationFrameArray.length; i++) {
        var drawFrameObj = _global.GLOBAL.requestAnimationFrameArray[i];

        if (drawFrameObj.self._div.id === this._div.id) {
          index = i;
          break;
        }
      }

      return index;
    }
    /*
    animate2() {
      this._animationTimer = setInterval(() => {
        this.drawFrame();
      }, 1000 / this._fps);
    }
    */

  }, {
    key: "drawFrame",
    value: function drawFrame() {}
  }, {
    key: "isAnimationOn",
    get: function get() {
      return this.getAnimationFrameArrayPos() !== -1;
    }
  }]);

  return BaseCanvas;
}();

exports.default = BaseCanvas;
module.exports = exports["default"];

/***/ }),

/***/ "./src/blink-box.js":
/*!**************************!*\
  !*** ./src/blink-box.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlinkBox =
/*#__PURE__*/
function () {
  function BlinkBox(baseDiv) {
    _classCallCheck(this, BlinkBox);

    this._div = baseDiv;
    this._bgColor = baseDiv.style.backgroundColor;
    this._fontColor = baseDiv.style.color;
    this._interval = 500;
  }

  _createClass(BlinkBox, [{
    key: "blink",
    value: function blink(message, fontColor, bgColor) {
      var _this = this;

      this._div.innerHTML = message;
      var currfontColor = this._div.style.color;
      var currbgColor = this._div.style.backgroundColor;
      this._blinkTimer = setInterval(function () {
        currfontColor = currfontColor === fontColor ? _this._fontColor : fontColor;
        currbgColor = currbgColor === bgColor ? _this._bgColor : bgColor;
        _this._div.style.color = currfontColor;
        _this._div.style.backgroundColor = currbgColor;
      }, this._interval);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._blinkTimer !== null) {
        clearInterval(this._blinkTimer);
      }
    }
  }]);

  return BlinkBox;
}();

exports.default = BlinkBox;
module.exports = exports["default"];

/***/ }),

/***/ "./src/blink-dialog.js":
/*!*****************************!*\
  !*** ./src/blink-dialog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlinkDialog =
/*#__PURE__*/
function () {
  function BlinkDialog() {
    _classCallCheck(this, BlinkDialog);

    var d = document.createElement('div');
    d.style.width = '100%';
    d.style.height = '100%';
    d.style.position = 'absolute';
    d.style.top = 0;
    d.style.left = 0;
    d.style.zIndex = 100;
    d.style.display = 'none';
    d.style.backgroundColor = '#181818';
    d.style.opacity = 0.5;
    d.innerHTML = 'test';
    this._dialog = d;
    document.getElementsByTagName('body')[0].appendChild(this._dialog);
  }

  _createClass(BlinkDialog, [{
    key: "blink",
    value: function blink(message) {
      var _this = this;

      this._dialog.innerHTML = message;
      this._dialog.style.display = 'block';
      this._blinkTimer = setInterval(function () {
        if (_this._dialog.style.display !== 'block') {
          _this._dialog.style.display = 'block';
        } else {
          _this._dialog.style.display = 'none';
        }
      }, 1000);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._dialog.style.display = 'none';

      if (this._blinkTimer !== null) {
        clearInterval(this._blinkTimer);
      }
    }
  }]);

  return BlinkDialog;
}();

exports.default = BlinkDialog;
module.exports = exports["default"];

/***/ }),

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(Circle, _BaseCanvas);

  function Circle(canvas) {
    var _this;

    _classCallCheck(this, Circle);

    _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, canvas));
    _this._dotsPerCircle = 30;
    _this._interval = Math.PI * 2 / _this._dotsPerCircle;
    _this._centerX = 100;
    _this._centerY = 100;
    _this._radius = 50;
    _this._angle = 0;
    _this._speed = 15;
    return _this;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this._timer = setInterval(function () {
        _this2._angle = (_this2._angle + 1) % 360;

        _this2.clearAll();

        _this2._ctx.save();

        _this2._ctx.translate(100, 100);

        _this2._ctx.rotate(_this2._angle * Math.PI / 180);

        for (var i = 0; i < _this2._dotsPerCircle; i++) {
          var desiredRadianAngleOnCircle = _this2._interval * i;
          var x = _this2._centerX + _this2._radius * Math.cos(desiredRadianAngleOnCircle) - 100;
          var y = _this2._centerY + _this2._radius * Math.sin(desiredRadianAngleOnCircle) - 100;

          _this2._ctx.beginPath();

          _this2._ctx.arc(x, y, 3, 0, Math.PI * 2);

          _this2._ctx.closePath();

          _this2._ctx.fill();
        }

        _this2._ctx.restore();
      }, this._speed);
    }
  }, {
    key: "speed",
    set: function set(n) {
      clearInterval(this._timer);
      this._speed = n;
      this.draw();
    },
    get: function get() {
      return this._speed;
    }
  }]);

  return Circle;
}(_baseCanvas.default);

exports.default = Circle;
module.exports = exports["default"];

/***/ }),

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color() {
    _classCallCheck(this, Color);

    this._line = '#00CED1';
    this._fill = '#00d7af';
    this._border = '#DCDCDC';
  }

  _createClass(Color, [{
    key: "line",
    set: function set(color) {
      this._line = color;
    },
    get: function get() {
      return this._line;
    }
  }, {
    key: "fill",
    set: function set(color) {
      this._fill = color;
    },
    get: function get() {
      return this._fill;
    }
  }, {
    key: "border",
    get: function get() {
      return this._border;
    }
  }]);

  return Color;
}();

exports.default = Color;
module.exports = exports["default"];

/***/ }),

/***/ "./src/digital-clock.js":
/*!******************************!*\
  !*** ./src/digital-clock.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

var _color = _interopRequireDefault(__webpack_require__(/*! ./color */ "./src/color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DigitalClock =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(DigitalClock, _BaseCanvas);

  function DigitalClock(baseDiv, options) {
    var _this;

    _classCallCheck(this, DigitalClock);

    _this = _possibleConstructorReturn(this, (DigitalClock.__proto__ || Object.getPrototypeOf(DigitalClock)).call(this, baseDiv)); // Bar width

    _this._bw = _utility.default.has(options, 'barWidth') ? options.barWidth : 4; // Bar height

    _this._bh = _utility.default.has(options, 'barHeight') ? options.barHeight : 20; // Space between numbers

    _this._space = _utility.default.has(options, 'space') ? options.space : 10;
    _this._numberColor = _utility.default.has(options, 'numberColor') ? options.numberColor : new _color.default().fill;
    _this._dashColor = _utility.default.has(options, 'dashColor') ? options.dashColor : new _color.default().border;
    return _this;
  }

  _createClass(DigitalClock, [{
    key: "draw",
    value: function draw() {
      var _this2 = this;

      this._timer = setInterval(function () {
        var now = new Date();

        _this2.clearAll();

        _this2._ctx.save();

        _this2._ctx.translate(_this2._space, _this2._space); // Draw hour.


        _this2.drawTime(now.getHours());

        _this2.drawInterpoint(); // Draw minute.


        _this2.drawTime(now.getMinutes());

        _this2.drawInterpoint(); // Draw second.


        _this2.drawTime(now.getSeconds());

        _this2._ctx.restore();
      }, 1000);
    }
  }, {
    key: "drawInterpoint",
    value: function drawInterpoint() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3, this._bw, this._bw);

      this._ctx.fillRect(0, (this._bh * 2 + this._bw) / 3 * 2 + this._bw, this._bw, this._bw);

      this._ctx.translate(this._bw + this._space, 0);

      this._ctx.closePath();
    }
  }, {
    key: "drawTime",
    value: function drawTime(t) {
      if (t < 10) {
        this.drawNumber(0);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);

        this.drawNumber(t);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      } else {
        var d = Math.floor(t / 10);
        var r = t % 10;
        this.drawNumber(d);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);

        this.drawNumber(r);

        this._ctx.translate(this._bw * 2 + this._bh + this._space, 0);
      }
    }
  }, {
    key: "drawEmpty",
    value: function drawEmpty() {
      this._ctx.beginPath();

      this._ctx.fillStyle = this._dashColor;

      this._ctx.moveTo(0, 0);

      this.vTopLeft();
      this.vBottomLeft();
      this.vTopLeft();
      this.vTopRight();
      this.hTop();
      this.hMiddle();
      this.hBottom();

      this._ctx.closePath();
    } // Vertical: top left

  }, {
    key: "vTopLeft",
    value: function vTopLeft() {
      this._ctx.fillRect(0, this._bw, this._bw, this._bh);
    } // Vertical: bottom left

  }, {
    key: "vBottomLeft",
    value: function vBottomLeft() {
      this._ctx.fillRect(0, this._bw * 2 + this._bh, this._bw, this._bh);
    } // Vertial: top right

  }, {
    key: "vTopRight",
    value: function vTopRight() {
      this._ctx.fillRect(this._bw + this._bh, this._bw, this._bw, this._bh);
    } // Vertial: bottom right

  }, {
    key: "vBottomRight",
    value: function vBottomRight() {
      this._ctx.fillRect(this._bw + this._bh, this._bw * 2 + this._bh, this._bw, this._bh);
    } // Horizontal: top

  }, {
    key: "hTop",
    value: function hTop() {
      this._ctx.fillRect(this._bw, 0, this._bh, this._bw);
    } // Horizontal: middle

  }, {
    key: "hMiddle",
    value: function hMiddle() {
      this._ctx.fillRect(this._bw, this._bw + this._bh, this._bh, this._bw);
    } // Horizontal: bottom

  }, {
    key: "hBottom",
    value: function hBottom() {
      this._ctx.fillRect(this._bw, this._bw * 2 + this._bh * 2, this._bh, this._bw);
    }
  }, {
    key: "drawNumber",
    value: function drawNumber(n) {
      this.drawEmpty();

      this._ctx.beginPath();

      this._ctx.fillStyle = this._numberColor;

      switch (n) {
        case 0:
          this.hTop();
          this.hBottom();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomLeft();
          this.vBottomRight();
          break;

        case 1:
          this.vTopRight();
          this.vBottomRight();
          break;

        case 2:
          this.hTop();
          this.vTopRight();
          this.hMiddle();
          this.vBottomLeft();
          this.hBottom();
          break;

        case 3:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 4:
          this.hMiddle();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 5:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopLeft();
          this.vBottomRight();
          break;

        case 6:
          this.hTop();
          this.hMiddle();
          this.hBottom();
          this.vTopLeft();
          this.vBottomLeft();
          this.vBottomRight();
          break;

        case 7:
          this.hTop();
          this.vTopRight();
          this.vBottomRight();
          break;

        case 8:
          this.vTopLeft();
          this.vBottomLeft();
          this.vTopRight();
          this.vBottomRight();
          this.hTop();
          this.hMiddle();
          this.hBottom();
          break;

        case 9:
          this.hTop();
          this.hMiddle();
          this.vTopLeft();
          this.vTopRight();
          this.vBottomRight();
          break;
      }

      this._ctx.closePath();
    }
  }, {
    key: "numberColor",
    set: function set(color) {
      this._numberColor = color;
    },
    get: function get() {
      this._numberColor;
    }
  }, {
    key: "dashColor",
    set: function set(color) {
      this.dashColor = color;
    },
    get: function get() {
      this.dashColor;
    }
  }]);

  return DigitalClock;
}(_baseCanvas.default);

exports.default = DigitalClock;
module.exports = exports["default"];

/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLOBAL = void 0;
var GLOBAL = {
  requestAnimationFrameArray: []
};
exports.GLOBAL = GLOBAL;

/***/ }),

/***/ "./src/heatbeat.js":
/*!*************************!*\
  !*** ./src/heatbeat.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heartbeat =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(Heartbeat, _BaseCanvas);

  function Heartbeat(canvas) {
    var _this;

    _classCallCheck(this, Heartbeat);

    _this = _possibleConstructorReturn(this, (Heartbeat.__proto__ || Object.getPrototypeOf(Heartbeat)).call(this, canvas));
    _this._a = 0;
    return _this;
  }

  _createClass(Heartbeat, [{
    key: "beat",
    value: function beat() {
      var _this2 = this;

      this._timer = setInterval(function () {
        var y = _utility.default.getRandomInt(1, 100);

        _this2._ctx.lineTo(_this2._a, y);

        _this2._a += 3;

        if (_this2._a > 200) {
          _this2._a = 0;

          _this2._ctx.closePath();

          _this2.clearAll();

          _this2._ctx.beginPath();
        }

        _this2._ctx.stroke();
      }, 100);
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this._ctx.beginPath();

      this._ctx.moveTo(-50, 100);

      this._ctx.lineTo(this._a - 20, 100);

      this._ctx.lineTo(this._a, 50);

      this._ctx.lineTo(this._a + 20, 100);

      this._ctx.lineTo(this._a + 260, 100);

      this._a += 1;

      if (this._a > 260) {
        this._a = -40;
      }

      this._ctx.stroke();

      this._ctx.restore();
    }
  }]);

  return Heartbeat;
}(_baseCanvas.default);

exports.default = Heartbeat;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
Object.defineProperty(exports, "BarMeter", {
  enumerable: true,
  get: function get() {
    return _barMeter.default;
  }
});
Object.defineProperty(exports, "DigitalClcok", {
  enumerable: true,
  get: function get() {
    return _digitalClock.default;
  }
});
Object.defineProperty(exports, "RoundFan", {
  enumerable: true,
  get: function get() {
    return _roundFan.default;
  }
});
Object.defineProperty(exports, "VolumeMeter", {
  enumerable: true,
  get: function get() {
    return _volumeMeter.default;
  }
});
Object.defineProperty(exports, "MessageQueue", {
  enumerable: true,
  get: function get() {
    return _messageQueue.default;
  }
});
Object.defineProperty(exports, "Heatbeat", {
  enumerable: true,
  get: function get() {
    return _heatbeat.default;
  }
});
Object.defineProperty(exports, "BlinkDialog", {
  enumerable: true,
  get: function get() {
    return _blinkDialog.default;
  }
});
Object.defineProperty(exports, "BlinkBox", {
  enumerable: true,
  get: function get() {
    return _blinkBox.default;
  }
});
Object.defineProperty(exports, "AutoScrollPanel", {
  enumerable: true,
  get: function get() {
    return _autoScrollPanel.default;
  }
});

var _circle = _interopRequireDefault(__webpack_require__(/*! ./circle */ "./src/circle.js"));

var _barMeter = _interopRequireDefault(__webpack_require__(/*! ./bar-meter */ "./src/bar-meter.js"));

var _digitalClock = _interopRequireDefault(__webpack_require__(/*! ./digital-clock */ "./src/digital-clock.js"));

var _roundFan = _interopRequireDefault(__webpack_require__(/*! ./round-fan */ "./src/round-fan.js"));

var _volumeMeter = _interopRequireDefault(__webpack_require__(/*! ./volume-meter */ "./src/volume-meter.js"));

var _messageQueue = _interopRequireDefault(__webpack_require__(/*! ./message-queue */ "./src/message-queue.js"));

var _heatbeat = _interopRequireDefault(__webpack_require__(/*! ./heatbeat */ "./src/heatbeat.js"));

var _blinkDialog = _interopRequireDefault(__webpack_require__(/*! ./blink-dialog */ "./src/blink-dialog.js"));

var _blinkBox = _interopRequireDefault(__webpack_require__(/*! ./blink-box */ "./src/blink-box.js"));

var _autoScrollPanel = _interopRequireDefault(__webpack_require__(/*! ./auto-scroll-panel */ "./src/auto-scroll-panel.js"));

var _animationTimer = _interopRequireDefault(__webpack_require__(/*! ./animation-timer */ "./src/animation-timer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Fire up window.requestAnimationFrame()
new _animationTimer.default().animate();

/***/ }),

/***/ "./src/message-queue.js":
/*!******************************!*\
  !*** ./src/message-queue.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MessageQueue =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(MessageQueue, _BaseCanvas);

  function MessageQueue(canvas, options) {
    var _this;

    _classCallCheck(this, MessageQueue);

    _this = _possibleConstructorReturn(this, (MessageQueue.__proto__ || Object.getPrototypeOf(MessageQueue)).call(this, canvas));
    _this._ctx.globalCompositeOperation = 'source-over';
    _this._queue = [];
    _this._maxQueueCapacity = 20;
    return _this;
  }

  _createClass(MessageQueue, [{
    key: "push",
    value: function push(value) {
      if (this._queue.length >= this._maxQueueCapacity) {
        this._queue.shift();
      }

      this._queue.push({
        value: value,
        x: 20,
        y: 200,
        color: 'green',
        move: true
      });
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this._queue.length >= 0) {
        this._queue.shift();
      }
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this.scale();

      for (var i = 0; i < this._queue.length; i++) {
        var q = this._queue[i]; // let currX = 20;

        var currY = 25 * i; // Move up

        if (currY <= q.y) {
          if (i === 0) {
            q.y -= 3;
          } else {
            if (!this._queue[i - 1].move) {
              q.y -= 3;
            }
          }
        } else {
          q.move = false;
        } // this._ctx.fillStyle = 'white';
        // this._ctx.fillText(q.val, q.x, q.y);


        this._ctx.fillStyle = q.color;

        this._ctx.fillRect(q.x, q.y, 100, 20);
      }

      this._ctx.restore();
    }
  }]);

  return MessageQueue;
}(_baseCanvas.default);

exports.default = MessageQueue;
module.exports = exports["default"];

/***/ }),

/***/ "./src/round-fan.js":
/*!**************************!*\
  !*** ./src/round-fan.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

var _color = _interopRequireDefault(__webpack_require__(/*! ./color */ "./src/color.js"));

var _utility = _interopRequireDefault(__webpack_require__(/*! ./utility */ "./src/utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RoundFan =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(RoundFan, _BaseCanvas);

  function RoundFan(baseDiv, options) {
    var _this;

    _classCallCheck(this, RoundFan);

    _this = _possibleConstructorReturn(this, (RoundFan.__proto__ || Object.getPrototypeOf(RoundFan)).call(this, baseDiv));
    _this._width = 200;
    _this._height = 200;
    _this._fanColor = _utility.default.has(options, 'fanColor') ? options.fanColor : new _color.default().fill;
    _this._centerColor = _utility.default.has(options, 'centerColor') ? options.centerColor : '#FFFFFF';
    _this._speed = _utility.default.has(options, 'speed') ? options.speed : 1;
    _this._ctx.globalCompositeOperation = 'destination-over';
    return _this;
  }

  _createClass(RoundFan, [{
    key: "on",
    value: function on() {
      this.startAnimation();
    }
  }, {
    key: "off",
    value: function off() {
      this.stopAnimation();
    }
  }, {
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.save();

      this._ctx.translate(100, 100);

      var now = new Date();

      this._ctx.rotate(this._speed * Math.PI / 6 * now.getSeconds() + this._speed * Math.PI / 6000 * now.getMilliseconds());

      this._ctx.strokeStyle = this._centerColor;

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 10, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 30, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._fanColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.arc(0, 0, 35, 0, 2 * Math.PI);

      this._ctx.fillStyle = this._centerColor;

      this._ctx.fill();

      this._ctx.beginPath();

      this._ctx.moveTo(0, 0); // Up


      this._ctx.quadraticCurveTo(-60, -80, 0, -90);

      this._ctx.quadraticCurveTo(80, -100, 0, 0); // Right


      this._ctx.quadraticCurveTo(80, -60, 90, 0);

      this._ctx.quadraticCurveTo(100, 80, 0, 0); // Down


      this._ctx.quadraticCurveTo(60, 80, 0, 90);

      this._ctx.quadraticCurveTo(-80, 100, 0, 0); // Left


      this._ctx.quadraticCurveTo(-80, 60, -90, 0);

      this._ctx.quadraticCurveTo(-100, -80, 0, 0);

      this._ctx.fillStyle = this._fanColor;

      this._ctx.fill();

      this._ctx.stroke();

      this._ctx.restore();
    }
  }, {
    key: "speed",
    set: function set(speed) {
      this._speed = speed;
    },
    get: function get() {
      return this._speed;
    }
  }, {
    key: "centerColor",
    set: function set(color) {
      this._centerColor = color;
    },
    get: function get() {
      this._centerColor;
    }
  }, {
    key: "fanColor",
    set: function set(color) {
      this._fanColor = color;
    },
    get: function get() {
      this._fanColor;
    }
  }]);

  return RoundFan;
}(_baseCanvas.default);

exports.default = RoundFan;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utility =
/*#__PURE__*/
function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "getRandomInt",
    value: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "getRandomColor",
    value: function getRandomColor() {
      return '#' + ((1 << 24) * Math.random() | 0).toString(16);
    }
  }, {
    key: "has",
    value: function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }
  }]);

  return Utility;
}();

exports.default = Utility;
module.exports = exports["default"];

/***/ }),

/***/ "./src/volume-meter.js":
/*!*****************************!*\
  !*** ./src/volume-meter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseCanvas = _interopRequireDefault(__webpack_require__(/*! ./base-canvas */ "./src/base-canvas.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VolumeMeter =
/*#__PURE__*/
function (_BaseCanvas) {
  _inherits(VolumeMeter, _BaseCanvas);

  function VolumeMeter(baseDiv, options) {
    var _this;

    _classCallCheck(this, VolumeMeter);

    _this = _possibleConstructorReturn(this, (VolumeMeter.__proto__ || Object.getPrototypeOf(VolumeMeter)).call(this, baseDiv));
    _this._width = 200;
    _this._height = 200;
    _this._min = 0;
    _this._max = 100;
    _this._value = 50;
    _this._speed = 3;
    _this._lineWidth = 5;
    _this._margin = 80;
    _this._meterWidth = 50;
    _this._meterHeight = 180; // Ignore line width totaly.

    _this._y = _this._meterHeight - _this._value / (_this._max - _this._min) * _this._meterHeight + 10;
    _this._nextY = _this._y;
    return _this;
  }

  _createClass(VolumeMeter, [{
    key: "drawFrame",
    value: function drawFrame() {
      this.clearAll();

      this._ctx.moveTo(0, 0);

      this._ctx.fillStyle = this._fillColor;

      this._ctx.beginPath(); // Draw the filled part.


      this._ctx.fillRect(80, this._y, this._meterWidth, 190 - this._y);

      if (this._speed > 0 && this._y <= this._nextY || this._speed <= 0 && this._y >= this._nextY) {
        this._y += this._speed;
      } // Draw the border.


      this._ctx.rect(80, 10, this._meterWidth, this._meterHeight);

      this._ctx.lineWidth = this._lineWidth;
      this._ctx.strokeStyle = this._fontColor;
      this._ctx.fillStyle = this._fontColor;
      this._ctx.font = '15px Arial'; // Draw max number.

      this._ctx.fillText(this._max, 50, 15); // Draw min number.


      this._ctx.fillText(this._min, 50, this._meterHeight + 15); // Draw value.


      this._ctx.fillText(this._value, this._meterWidth + 50 + 35, this._y + 15 * 0.5);

      this._ctx.stroke();
    }
  }, {
    key: "value",
    set: function set(n) {
      if (n >= this._min || n <= this._max) {
        if (n < this._value) {
          // Move down
          this._speed = Math.abs(this._speed);
        } else {
          // Move up
          this._speed = -Math.abs(this._speed);
        }

        this._nextY = this._meterHeight - n / (this._max - this._min) * this._meterHeight + 10;
        this._value = n;
      } else {// TODO: out of range!
      }
    },
    get: function get() {
      this._value;
    }
  }]);

  return VolumeMeter;
}(_baseCanvas.default);

exports.default = VolumeMeter;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=zeu.js.map