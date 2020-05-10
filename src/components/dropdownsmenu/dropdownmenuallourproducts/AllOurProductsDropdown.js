import React, { Component } from 'react'
import PcGamerComponentsList from '../pcgamercomponentslist/PcGamerComponentsList'

export class AllOurProductsDropdown extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
        
       };
       
       showDropdownMenu(event) {
           event.preventDefault();
          
           this.setState({ displayMenu: !this.state.displayMenu }, () => {
           });
         }
    
         render() {
            console.log(this.state.displayMenu);
           return (
               <li className="all-products-menu-item">
                <a onClick={this.showDropdownMenu}>Tous nos produits</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                         <PcGamerComponentsList></PcGamerComponentsList>
                       
                        <li><a href="#PÉRIPHÉRIQUES PC">PÉRIPHÉRIQUES PC</a></li>
                        <li><a href="#PC GAMER">PC GAMER</a></li>
                        <li><a href="#PC GAMER">Jeux consoles</a></li>
                        <li><a href="#PC GAMER">FOURNITURE GAMING</a></li>
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
