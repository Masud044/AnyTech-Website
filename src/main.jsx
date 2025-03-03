// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode >
      <div className='container mx-auto'>
      <RouterProvider router={router} />
      </div>
   
  </React.StrictMode>,
  
)
