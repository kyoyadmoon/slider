require('vertical-rc-slider/assets/index.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('vertical-rc-slider');

const style = {width: 400, height: 300, margin: 50};
const marks = {
  0: '0',
  30: '30',
  50: '50',
  75: '75',
  120: '120',
};

function log(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <div style={style}>
      <Slider max={120} marks={marks} step={10} onChange={log} defaultValue={20} />
    </div>
  </div>
  , document.getElementById('__react-content'));
