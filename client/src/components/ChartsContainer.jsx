import React, { useState } from 'react';
import BarChart from './BarChart';
import AreaChartComponent from './AreaChartComponent';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = (props) => {
    const { data } = props;
    const [barChart, setBarChart] = useState(true);
    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            <button onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Area Chart' : 'Bar Chart'}
            </button>
            {barChart ? <BarChart data={data} /> : <AreaChartComponent data={data} />}
        </Wrapper>
    );
};

export default ChartsContainer;
