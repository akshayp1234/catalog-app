import React from 'react'
import './Section.css'
import arrow from '../images/down-arrow.svg'
const Section = (props) => {
    return (
        
        <div style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize:"cover"
        }} className='container'>
            <h1 className='Item'>{props.title}</h1>
            <div className='buttonGroup'>
            <button className='leftbutton'>Custom Order</button>
            <button className='rightbutton'>Existing Inventory</button>
            </div>
            <img className='downarrow' src={arrow}></img>
        </div>
    )
}

export default Section
