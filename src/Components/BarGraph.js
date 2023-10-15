import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import './BarGraph.css';

const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 60 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 50 },
    { name: 'Jun', value: 20 },
    { name: 'Jul', value: 50 },
    { name: 'Aug', value: 60 },
    { name: 'Sep', value: 55 },
    { name: 'Oct', value: 48 },
    { name: 'Nov', value: 45 },
    { name: 'Dec', value: 48 }
];

const BarGraph = () => {
    const [hoveredBar, setHoveredBar] = useState(null);

    return (
        <div className="container ">
            <BarChart 
            width={750}  
            height={210} 
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: -7 }}
           
            >
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar
                    dataKey="value"
                    fill="#5b37b8"
                    radius={10}
                    onMouseEnter={() => setHoveredBar(true)}
                    onMouseLeave={() => setHoveredBar(false)}
                    className={hoveredBar ? 'bar-chart' : 'bar-chart hovered-bar'}
                    barSize={43}
                />
            </BarChart>
        </div>
    );
}

export default BarGraph;
