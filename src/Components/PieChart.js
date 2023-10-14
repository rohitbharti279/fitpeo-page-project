import React from 'react';
import "./PieChart.css";

const PieChart = () => {

    const percentage = 50;
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const offsetFifteen = circumference - (18 / 100) * circumference;

    return (
        <div className="pie-chart m-5">
            <svg width="200" height="200">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#9c27b0' }} />
                        <stop offset="100%" style={{ stopColor: '#5b37b8' }} />
                    </linearGradient>

                    <linearGradient id="gradient-fifteen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#e8d5e3' }} />
                        <stop offset="100%" style={{ stopColor: '#eb087e' }} />
                    </linearGradient>
                </defs>
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
                        strokeDashoffset: offsetFifteen,
                    }}
                />

            </svg>
            <div className="percentage-label text-lg text-center font-extrabold leading-tight mt-0.5">65% <p className='tracking-[-0.1em] text-xs font-medium text-center 
            -my-1 leading-tight'>Total New <p className='-mt-1'>Customers</p></p> </div>
        </div>
    );
};

export default PieChart;
