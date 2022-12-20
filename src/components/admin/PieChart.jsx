import React, {useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieChart(props) {

    const data = {
        labels: ['Like', 'Dislike'],
        datasets: [
            {
                data: [props.interact.like, props.interact.dislike],
                backgroundColor: [
                    'rgb(19, 117, 170)',
                    'rgb(181, 30, 30)',
                ],
                borderColor: [
                    'gray',
                    'gray',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}