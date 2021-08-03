import React from 'react';
import './App.css';
import PolarAreaChart from './components/PolarAreaChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

const App = () =>{
  return (
    <div>
        <PolarAreaChart/>
        <BarChart/>
        <DoughnutChart/>
        <PieChart/>
        <LineChart/>
    </div>
  );
}

export default App