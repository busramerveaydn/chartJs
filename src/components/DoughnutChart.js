import React from 'react'
import { Doughnut } from 'react-chartjs-2'
const DoughnutChart = () => {
    return (
        <div>
            <Doughnut
                data={{
                    // outerStart: 0.1,
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow'
                    ],
                    datasets: [{
                        data: [100, 50, 60],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ]
                            // hoverOffset: 4
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}
export default DoughnutChart
