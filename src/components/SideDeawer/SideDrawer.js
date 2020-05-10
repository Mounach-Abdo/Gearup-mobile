import React, { Component } from 'react'
import "./SideDrawer.css"   
import logo from '../../logo.png'
import AllOurProductsDropdown from "../dropdownsmenu/dropdownmenuallourproducts/AllOurProductsDropdown"

export class SideDrawer extends Component {
    render() {
        return (
            <nav className="side-drawer side-nav-panel" id={"side-nav-panel"}>
                <img src={logo} alt="" className="img"/>
                <ul className="mobile-menu accordion-menu">
                    <AllOurProductsDropdown></AllOurProductsDropdown>
                   <li><a>Boutique partenaire</a></li>
                   <li><a >Promotions</a></li>
                   <li><a>Le bon coin</a></li>
                   <li><a>Nos Showrooms</a></li>
                   </ul>
                   <div><a href="/"  style={{color: '#f9bc06'}}>? INFO COVID-19</a></div>
                   <ul>
                   <li><a href="/">À propos</a></li>
                   <li><a href="/">Contactez-nous</a></li>
                   <li><a href="/">Blog</a></li>
                   <li><a href="/">Mon compte</a></li>
                   <li><a href="/">Panier</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer
