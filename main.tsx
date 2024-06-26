import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Reports from './components/Reports.tsx';
import Dashboard from './components/Dashboard.tsx';
import Settings from './components/Settings.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "reports",
        element: <Reports />,
        
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        
      },
      {
        path: "settings",
        element: <Settings />,
        
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
