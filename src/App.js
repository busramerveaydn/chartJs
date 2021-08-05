import React from 'react';
import './App.css';
import PolarAreaChart from './components/PolarAreaChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import Rapor from './components/Rapor';
import UserList from './pages/UserList';
import VeriList from './pages/VeriList';

const App = () => {
  return (
    <div>
      <VeriList/>
      <UserList />
      {/* <BarChart />
      <DoughnutChart/>
      <LineChart/>
      <PieChart/>
      <PolarAreaChart/>
      <Rapor/> */}
    </div>
  );
}

export default App