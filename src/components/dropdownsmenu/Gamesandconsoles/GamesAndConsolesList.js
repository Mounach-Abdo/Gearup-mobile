import React, { Component } from 'react'

export class GamesAndConsolesList extends Component {
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
                  <a className=" " onClick={this.showDropdownMenu} href="#COMPOSANTS PC GAMER">Jeux { "&" } consoles</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a  href="#CONSOLE PLAYSTATION 4">CONSOLE PLAYSTATION 4</a>
                        </li>
                        <li><a href="#CONSOLE XBOX ONE">CONSOLE XBOX ONE</a></li>
                        <li><a href="#JEUX PLAYSTATION 4">JEUX PLAYSTATION 4</a></li>
                        <li><a href="#JEUX XBOX ONE">JEUX XBOX ONE</a></li>
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

export default GamesAndConsolesList

