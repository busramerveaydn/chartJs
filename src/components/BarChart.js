import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar
                data={{
                    labels: ['blue', 'green', 'orange', 'purple'],
                    datasets: [{
                        label: 'Bar Chart',
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            'rgb(0, 0, 255, 0.6)',
                            'rgb(0, 128, 0, 0.6)',
                            'rgb(255, 165, 0, 0.6)',
                            'rgb(138,43,226, 0.6)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                        ]
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}

            />
        </div>
    )
}

export default BarChart