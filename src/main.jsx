import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import FirebaseProvider from './providers/FirebaseProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
       <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
