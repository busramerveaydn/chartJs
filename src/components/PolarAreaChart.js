import React from 'react'
import { PolarArea } from 'react-chartjs-2'

const PolarAreaChart = () => {
  return (
    <div>
      <PolarArea

        data={{
          borderWidth: 3,
          borderAlign: 'inner',
          labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
          ],
          datasets: [{
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
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

export default PolarAreaChart