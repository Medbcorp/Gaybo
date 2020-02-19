import React from 'react';
import { Chart, Tooltip, Axis, Legend, SmoothLine, Point } from 'viser-react';
import { getReadings } from './services/apis';

const DataSet = require('@antv/data-set')

const Graph = (props) => {

    const nodeId = props.match.params.id
    const opts = props.match.params.opts

    // console.log(nodeId, opts)
    // console.log(getReadings(nodeId, opts))
    // console.log(getReadings(1, "start"))
    
    const sourceData = getReadings(nodeId, opts)

    const dv = new DataSet.View().source(sourceData);
    
    dv.transform({
        type: 'fold',
        fields: ['t', 'h'],
        key: 'reading',
        value: 'val',
    });
    
    const data = dv.rows;

    const scale = [
        {
            dataKey: 'date',
            min: 0,
            max: 1,
        },
        {
            dataKey: 'val',
            min: 0
        },
    
    ];

        return (
        <Chart forceFit height={400} data={data} scale={scale}>
            <Tooltip />
            <Axis />
            <Legend />
            <SmoothLine position="date*val" color="reading" />
            <Point position="date*val" color="reading" shape="circle"/>
        </Chart>
        );
}

export default Graph