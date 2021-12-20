
import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter, Route,Routes,useNavigate } from 'react-router-dom'
import "./dash.css";
import Demo from './demo'
import Auth from './loggedIn'
import Sidebar from './sidebar/Sidebar';
import UserList from "../pages/userList/UserList";
import Topbar from './topbar/Topbar';
import FeaturedInfo from './featuredInfo/FeaturedInfo';
import Home from '../pages/home/Home';
import { useLocation } from 'react-router-dom'
import User from '../pages/user/User';
import PurchasesList from '../pages/purchasesList/purchasesList';
import EnhancedTable from './user';
import SalesList from '../pages/salesList/salesList';
import repair from '../pages/repair/repair';
import Repair from '../pages/repair/repair';
import Services from '../pages/services/services';
import Settings from '../pages/settings/settings';
import InfoTry from './createuser';

export default function Dashboard() {
    return <>{Auth()?<Test/>:<Demo/>}</>
        
  
}
function LoadUrl()
{
  const location = useLocation()
  var slug =location.pathname;
  if(slug=="/home"){
    return(
      <Home/>
    )
  }
  if(slug=="/users"){
    return(
      <UserList/>
    )
  }
  if(slug=="/newUser"){
    return(
      <InfoTry/>
    )}

  if(slug=="/Purchaseslist"){
    return(
      <PurchasesList/>
    )
  }
  if(slug=="/Saleslist"){
    return(
      <SalesList/>
    )
  }
  if(slug=="/Repair"){
    return(
      <Repair/>
    )
  }
  if(slug=="/Services"){
    return(
      <Services/>
    )
  }
  if(slug=="/Settings"){
    return(
      <Settings/>
    )
  }
  
}
function Test()
{


      //  function Logout(){
      //   sessionStorage.clear();
      //   navigate("/");
      //  } 
       
       return(
         <div>
      <Topbar />
      <div className="container">
        <Sidebar />
       {LoadUrl()}
        
         
   </div>
   
 {/* 
         <Button onClick={Logout}>Logout</Button> */}
         </div>
        

        
          )
  


}
