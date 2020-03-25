import React, { Component } from 'react';
import './tab.css';


const Tab = (props, tabChange) => {

    return (
        <div className='tab'>
            <button className='rbl' >Rebel Alliance</button>
            <button className='emp' >Galactic Empire</button>
            {props.children}
        </div>
    );
}

export default Tab;