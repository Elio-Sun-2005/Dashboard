import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';


const App: React.FC = () => {
  return (
    
      <div className="app">
        <Sidebar />
       <Outlet/>
      </div>
  
  );
};

export default App;