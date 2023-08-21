import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io'; 
import * as BsIcons from 'react-icons/bs';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icons: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icons: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icons: <BsIcons.BsPeople/>,
        cName: 'nav-text'
    }
]