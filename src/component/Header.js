import React,{useState} from 'react'
import {Link} from 'react-scroll'
import './Header.css'
import Section from './Section'
const Header = (props) => {
    return (
        <div className='Header'>
            <h2 style={{display:"inline-block"}} onClick={() => window.scrollTo(0,0)}>CARS</h2>
            <h3 style={{display:"inline-block"}} onClick={() => window.scrollTo(0,0)}>Model S</h3>
            <h3 style={{display:"inline-block"}} onClick={() => window.scrollTo(0,window.innerHeight)}>Model 3</h3>
            <h3 style={{display:"inline-block"}} onClick={() => window.scrollTo(0,window.innerHeight*2)}>Model X</h3>
            <h3 style={{display:"inline-block"}} onClick={() => window.scrollTo(0,window.innerHeight*3)}>Model Y</h3>
            
            
            
        </div>
    )
}

export default Header
