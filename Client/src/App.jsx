import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import AddNewBlog from './pages/Addblog/AddNewBlog';
import Header from './Components/Header';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  )
}

export default App
