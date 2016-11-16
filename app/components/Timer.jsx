var React = require('react');
var TimerControls = require('TimerControls');
var Clock = require('Clock');
var Timer = React.createClass({
  getInitialState: function() {
    return {time: 0, timerStatus: 'stopped'};
  },
  handleSetTimer: function() {
    this.setState({timerStatus: 'started'});
  },
  handleStatusChange: function(newStatus) {
    this.setState({timerStatus: newStatus});
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({time: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.time + 1;
      this.setState({
        time: newCount >= 0
          ? newCount
          : 0
      });
    }, 1000);
  },
  render: function() {
    var {time, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={time}/>
        <TimerControls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
