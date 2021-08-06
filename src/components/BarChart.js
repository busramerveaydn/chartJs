import React from 'react'
import { Bar } from 'react-chartjs-2'
import VeriList from '../pages/VeriList'

const BarChart = () => {
    return (
        <div>

            <Bar
                data={{
                    labels: ['Çok Memnun', 'Memnun Değil'],
                    datasets: [{
                        label: 'MEMNUNİYET ANKETİ',
                        data: [1, 2],
                        backgroundColor: [
                            'rgb(0, 0, 255, 0.6)',
                            'rgb(0, 128, 0, 0.6)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',                        ]
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