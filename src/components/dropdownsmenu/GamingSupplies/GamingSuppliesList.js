import React, { Component } from 'react'

export class GamingSuppliesList extends Component {
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
           return (
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub" >
                  <a className=" " onClick={this.showDropdownMenu} href="#FOURNITURE GAMING">FOURNITURE GAMING</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a  href="#SIEGE GAMER/FAUTEUIL GAMER">SIEGE GAMER/FAUTEUIL GAMER</a>
                        </li>
                        <li><a href="#POUF GAMER">POUF GAMER</a></li>
                        <li><a href="#DÉCORATION GAMING">DÉCORATION GAMING</a></li>
                        <li><a href="#BUREAU PC">BUREAU PC</a></li>
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

export default GamingSuppliesList

