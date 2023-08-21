import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SideBarData} from './SideBarData';
import '../CSS/App.css';
import { IconContext} from 'react-icons';

function Navigation(){
    const [sideBar, setSideBar] = useState(false);
    
    const showSideBar = ()=> setSideBar(!sideBar);
    
    return(
        <>
            <IconContext.Provider value={{color: 'undefined'}}>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </Link>
                </div>
                    <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSideBar}>
                            <li className="navbar-toggle">
                                <Link to='#' className="menu-bars">
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {SideBarData.map((item,i)=>{
                                return(
                                    <li key={i} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icons}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
            </IconContext.Provider>
        </>
    )
};

export default Navigation;