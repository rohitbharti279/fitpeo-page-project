import React from 'react';
import "./PieChart.css";

class PieChart extends React.Component {
  render() {
    const percentage = 50;
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const offsetX = circumference - (15 / 100) * circumference;

    return (
      <div className="pie-chart m-5">
        <svg width="200" height="200">
          <circle
            className="background-circle"
            cx="100"
            cy="100"
            r={radius}
          />
          <circle
            className="progress-circle-fifty"
            cx="100"
            cy="100"
            r={radius}
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: offset,
            }}
          />
          <circle
            className="progress-circle-fifteen"
            cx="100"
            cy="100"
            r={radius}
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: offsetX,
            }}
          />
          
        </svg>
        <p className="percentage-label">{percentage}% </p>
      </div>
    );
  }
}

export default PieChart;
