import React, { Component } from 'react'
import "./PartnerShopList.css" 

export class PartnerShop extends Component {
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
                  <a className=" " onClick={this.showDropdownMenu} href="#COMPOSANTS PC GAMER">Boutique partenaire</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a  href="#MSI">MSI</a>
                        </li>
                        <li><a href="#Asus">Asus</a></li>
                        <li><a href="#Republic of gamers (ROG)">Republic of gamers (ROG)</a></li>
                        <li><a href="#TAPIS DE SOURIS GAMER">TAPIS DE SOURIS GAMER</a></li>
                        <li><a href="#GAMDIAS">GAMDIAS</a></li>
                        <li><a href="#AeroCool">AeroCool</a></li>
                        <li><a href="#COUGAR">COUGAR</a></li>
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

export default PartnerShop


