import React, { Component } from 'react'

export class PcGamerComponentsList extends Component {
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
                  <a className="active " onClick={this.showDropdownMenu} href="#COMPOSANTS PC GAMER">COMPOSANTS PC GAMER</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a className="active " href="#ÉCRAN PC">ÉCRAN PC</a>
                        </li>
                        <li><a href="#CLAVIER GAMER">CLAVIER GAMER</a></li>
                        <li><a href="#SOURIS GAMER">SOURIS GAMER</a></li>
                        <li><a href="#TAPIS DE SOURIS GAMER">TAPIS DE SOURIS GAMER</a></li>
                        <li><a href="#CASQUE GAMER">CASQUE GAMER</a></li>
                        <li><a href="#JOYPAD/MANETTE">JOYPAD/MANETTE</a></li>
                        <li><a href="#AUTRES ACCESSOIRES GAMING">AUTRES ACCESSOIRES GAMING</a></li>
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

export default PcGamerComponentsList


