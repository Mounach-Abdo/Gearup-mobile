import React, { Component } from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDeawer/DrawerToggleButtton'
import logo from '../../logo.png'

export class Toolbar extends Component {
    render() {
        return (
            <div>
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div className="">
                            <DrawerToggleButton />
                        </div>
                        <div className="toolbar_logo"> 
                        <img src={logo} alt="" className="img"/>
                        <a href="/">Logo</a></div>
                        <div className="spacer"/>
                        <div className="toolbar_items">
                            <ul>
                                <li className="active"><a  href="/">Products</a></li>
                                <li><a href="/">Users</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Toolbar
