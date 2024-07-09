import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
  </Route>
)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
