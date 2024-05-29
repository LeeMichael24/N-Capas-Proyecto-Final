import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
    { name: 'Lunes', uv: 4, color: '#FF5B5B' },
    { name: 'Martes', uv: 3, color: '#F7C604' },
    { name: 'Miercoles', uv: 5, color: '#FF5B5B' },
    { name: 'Jueves', uv: 2, color: '#F7C604' },
    { name: 'Viernes', uv: 1, color: '#FF5B5B' },
    { name: 'Sabado', uv: 6, color: '#F7C604' },
    { name: 'Domingo', uv: 3, color: '#FF5B5B' },
];

export default function BasicBars() {
    return (
        <BarChart  width={900    } height={300} data={data} barSize={35}>
            <CartesianGrid strokeDasharray="1 1" strokeWidth={0.7}  horizontal={true} vertical={false} />      
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" shape={<RenderShape />} />
        </BarChart>
    );
}

function RenderShape(props) {
    const { fill, x, y, width, height } = props;

    return <rect x={x} y={y} width={width} height={height} style={{ fill: data.find(d => d.name === props.payload.name).color }} />;
}