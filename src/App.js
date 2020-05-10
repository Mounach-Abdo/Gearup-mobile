import React from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from"./components/SideDeawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import './App.css';


function App() {
  return (
    
    <div className="App" style={{height:'100%'}}>
      <Toolbar></Toolbar>
      <SideDrawer></SideDrawer>
      <Backdrop></Backdrop>
      <main style={{marginTop:'64px'}}>
        <p>This is the page content!</p> 
      </main>
      
    </div>
  );
}

export default App;
