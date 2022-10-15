import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LangaugeIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Avatar} from '@mui/material'


function Header() {
  return (
    <div className='header'>
        {/* icon */}
        <img className='header_icon' src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt='icon'/>

        {/* search section */}
        <div className='header_center'>
            <input type="text"/>
            <SearchIcon/>
        </div>

        {/* header right section */}
        <div className='header_right'>
            <p>Become a host</p>
            <LangaugeIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header