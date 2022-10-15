import React, { useState } from 'react';
import "./Banner.css";
import {Button} from "@mui/material";
import Search from './Search';

function Banner() {
    const[showSearch, setShowSearch] = useState(true)
  return (
    <div className='banner'>
        <div className='banner_search'>
            {showSearch && <Search/>}
            <Button onClick={() => setShowSearch(!showSearch)} className='banner_search_button' variant='outlined'>Search Dates</Button>
        </div>
        <div className='banner_info'>
            <h1>Get out and streach your imagination</h1>
            <h5>Plan a different kind of gataway to uncover the hidden gems near you</h5>
            <Button variant="outlined">Explore nearby</Button>
        </div>
    </div>
  )
}

export default Banner