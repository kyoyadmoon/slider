webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(159);
	var Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var style = { width: 400, height: 150, margin: 50 };
	var marks = {
	  0: '0°C',
	  26: '26°C',
	  37: '37°C',
	  50: '50°C',
	  100: '100°C'
	};
	
	function log(value) {
	  console.log(value);
	}
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'div',
	    { style: style },
	    React.createElement(Slider, { min: 0, marks: marks, step: 10, onChange: log, defaultValue: 20 })
	  )
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=marks.js.map