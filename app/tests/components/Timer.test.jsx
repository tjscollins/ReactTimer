var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.time).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.time).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({time: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.time).toBe(10);
      done();
    }, 1001);
  });

  it('should clear timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({time: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.time).toBe(0);
      done();
    }, 1001);
  });
});
