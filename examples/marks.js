require('vertical-rc-slider/assets/index.less');

const React = require('react');
const ReactDOM = require('react-dom');
const Slider = require('vertical-rc-slider');

const style = {width: 400, height: 150, margin: 50};
const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: '100°C',
};

function log(value) {
  console.log(value);
}

ReactDOM.render(
  <div>
    <div style={style}>
      <Slider min={0} marks={marks} step={10} onChange={log} defaultValue={20} />
    </div>
  </div>
  , document.getElementById('__react-content'));
