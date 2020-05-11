import React, { Component } from 'react'

export class PcGamerList extends Component {
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
                  <a className=" " onClick={this.showDropdownMenu} href="#COMPOSANTS PC GAMER">PC GAMER</a>
                <span className="arrow" onClick={this.showDropdownMenu}></span>
                { this.state.displayMenu ? (
                     <ul  className="sub-menu" style={{display:"block"}}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-sub">
                             <a  href="#PC BUREAU GAMER">PC BUREAU GAMER</a>
                        </li>
                        <li><a href="#PC PORTABLE GAMER">PC PORTABLE GAMER</a></li>
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

export default PcGamerList

