var React = require('react');

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    var {timerStatus} = this.props;

    var renderButtons = () => {
      if (timerStatus === 'started') {
        return (
          <div className="controls">
            <button className="button secondary" onClick={this.onStatusChange('paused')}>Stop</button>
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
          </div>
        );
      } else if (timerStatus === 'paused') {
        return (
          <div className="controls">
            <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
          </div>
        );
      } else if (timerStatus === 'stopped') {
        return (
          <div className="controls">
            <button className="button expanded" onClick={this.onStatusChange('started')}>Start</button>
          </div>
        );
      }
    };

    return (
      <div className="controls">
        {renderButtons()}
      </div>
    );
  }
});

module.exports = TimerControls;
