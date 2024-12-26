import Protected from '../components/Protected'
import { Route, Routes } from 'react-router-dom';
import Settings from './DashBoard/Settings';
import Home from './DashBoard/Home';
import Passwords from './DashBoard/Passwords';
import Generator from './DashBoard/Generator';
import Sharing from './DashBoard/Sharing';
import { useState } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';


const DashBoard = () => {

  const [Collapsed, SetCollapsed] = useState(false);

  const ToggleCollapse = () => {
    SetCollapsed(!Collapsed)
  }

  return (
    <Protected>
      <DashboardLayout isCollapsed={Collapsed} ToggleCollapse={ToggleCollapse}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/passwords' element={<Passwords />} />
          <Route path='/generator' element={<Generator />} />
          <Route path='/sharing' element={<Sharing />} />
          <Route path='/history' element={<Settings />} />
        </Routes>
      </DashboardLayout>

    </Protected>
  )
}

export default DashBoard
