import React from 'react';
import { Home } from './component/Index';
import { Contact } from './component/Index'
import { Register } from './component/Index'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'
import Layout from './component/layout/Layout';


const app = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path='/' element={<Home />} />
    <Route path='contact' element={<Contact />} />
    <Route path='register' element={<Register />} />
  </Route>
))
const App = () => {
  return (
    <div className='app'>
       <RouterProvider router={app} />
    </div>
  )
}

export default App