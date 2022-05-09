import React from 'react';

import closeIcon from '../../assets/img/closeIcon.png';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import './InfoBar.css';

const InfoBar = (props) => (
  <div className='infoBar'>
    <div className='leftInnerContainer'>
      <DrawerToggle sidebarToggle={props.sidebarToggle}/>
    </div>
    <div className='rightInnerContainer'>
      <a href='/'>
        <img src={closeIcon} alt='close icon' />
      </a>
    </div>
  </div>
);

export default InfoBar;
