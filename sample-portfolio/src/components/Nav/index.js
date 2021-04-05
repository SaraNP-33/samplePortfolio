import React, {useState} from 'react';
import { slide as Menu} from 'react-burger-menu';



function Nav(){
    return(
    <Menu>
        <ul className='nav-items'>
            <li className='ni-1'>
                <a href='/'>Home</a>
            </li>
            <li className='ni-1'>
                <a href='/about'>About</a>
            </li>
            <li className='ni-1'>
                <a href='/gallery'>Gallery</a>
            </li>
            <li className='ni-1'>
                <a href='/contact'>Contact</a>
            </li>
            
        </ul>
    </Menu>
)
}

export default Nav; 