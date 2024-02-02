import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from './errorPage.jsx';



  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      errorElement: <ErrorPage/>

    },


  ]);


  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router = {router}/>
    </React.StrictMode>
  );









   /*  ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
      
      
        <BrowserRouter>
          <Routes>
            <Route path ="/" element = {<App/>}/>
            <Route path ="/:dentist" element={dentista}/>
            <Route path ="/:contacto" element={Form}/>
            <Route path ="/:favs" element={Favoritos}/>
            <Route path ="*" element={"no page"}/>

          </Routes>
    
    
        </BrowserRouter>
    </React.StrictMode>
)

   */
