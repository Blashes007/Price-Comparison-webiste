
import "./app.css";
import React, { useState } from "react";
import Demo from "./components/demo"; 
import Dashboard from "./components/dashboard"; 
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import EnhancedTable from "./components/user";
import { useParams } from 'react-router-dom'



function App(){
  let { slug } = useParams()

    return( 
    <div>
   <BrowserRouter>
   
  <Routes>
  <Route path="/" element={<LoginPage/>} />
    <Route path="/:slug" element={<Dashboard/>} />
  </Routes>
  </BrowserRouter>
    </div>
   
    
        )
}
function LoginPage()
{
    return(
        <Demo/>
    )
}

export default App;