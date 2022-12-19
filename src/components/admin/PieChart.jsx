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
                    'rgb(106, 198, 57)',
                    'rgb(165, 165, 165)',
                    'rgb(165, 50, 32)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} />;
}