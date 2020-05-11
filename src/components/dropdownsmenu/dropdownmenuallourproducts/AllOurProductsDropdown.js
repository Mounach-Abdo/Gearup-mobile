import React, { Component } from 'react'
import PcGamerComponentsList from '../pcgamercomponentslist/PcGamerComponentsList'
import PCDeviceList from '../dropdowmenupcdevice/PCDeviceList'
import PcGamerList from '../dropdownmenupcgamer/PcGamerList'
import GamesAndConsolesList from '../Gamesandconsoles/GamesAndConsolesList'
import GamingSuppliesList from '../GamingSupplies/GamingSuppliesList'
import './AllOurProductsDropdown.css'

export class AllOurProductsDropdown extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showHideDropdownMenu = this.showHideDropdownMenu.bind(this);
        
       };
       
       showHideDropdownMenu(event) {
           event.preventDefault();
          
           this.setState({ displayMenu: !this.state.displayMenu }, () => {
           });
         }
    
         render() {
           return (
               <li className="all-products-menu-item">
                <a onClick={this.showHideDropdownMenu}>Tous nos produits</a>
                <span className="arrow" onClick={this.showHideDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                         <PcGamerComponentsList></PcGamerComponentsList>
                         <PCDeviceList></PCDeviceList>
                         <PcGamerList></PcGamerList>
                         <GamesAndConsolesList></GamesAndConsolesList>
                         <GamingSuppliesList></GamingSuppliesList>
                     </ul>
               ):
               (
                 null
               )
               }
            </li>
           
       
           );
         }
}

export default AllOurProductsDropdown
