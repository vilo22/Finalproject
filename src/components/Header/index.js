import { BoxIconElement } from 'boxicons'
import React from 'react'
import transparent from '../../IMAGES/transparent.png'

export const Header = () => {
    return(
        <header>
            <a href="#">
                <div className='logo'>
                    <img src= {transparent} alt='logo' width='150px'/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
                <li>
                    <a href="#">SIGN in</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name='cart'></box-icon>
                <span className='Item__total'>0</span>
            </div>
        </header>
    )
}