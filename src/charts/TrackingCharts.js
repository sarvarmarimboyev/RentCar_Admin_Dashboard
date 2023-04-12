import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts"
import trackingData from './../assets/dummy-data/trackingData';

function TrackingCharts() {
    return <ResponsiveContainer width='100%'>
        <LineChart >
            <CartesianGrid strokeDasharray='0' stroke="#b7ffe913" />
            <XAxis dataKey='name' stroke="#ddd" />
            <Line type="monotone" dataKey="km" data={trackingData} stroke="#e1424e" strokeWidth={2} activeDot={{ r: 8 }} />
            <Tooltip wrapperClassName="toopltip__style" />
        </LineChart>
    </ResponsiveContainer>
}

export default TrackingCharts;
