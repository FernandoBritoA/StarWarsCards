import React from 'react';
import luke from './Characters/luke.jpg'
import boba from './Characters/boba.jpg'
import c3po from './Characters/c3po.png'
import chewbacca from './Characters/chewbacca.png'
import darthSidious from './Characters/darthSidious.png'
import darthVader from './Characters/darthVader.png'
import han from './Characters/han.jpg'
import leia from './Characters/leia.jpg'
import obiWan from './Characters/obiWan.jpg'
import r2d2 from './Characters/r2d2.png'
import tarkin from './Characters/tarkin.jpg'
import './card.css';

const Card = (props) => {
    const { name, world, specie, films } = props;
    let pp = '';
    switch (name) {
        case 'Luke Skywalker':
            pp = luke;
            break;
        case 'C-3PO':
            pp = c3po;
            break;
        case 'R2-D2':
            pp = r2d2;
            break;
        case 'Darth Vader':
            pp = darthVader;
            break;
        case 'Leia Organa':
            pp = leia;
            break;
        case 'Obi-Wan Kenobi':
            pp = obiWan;
            break;
        case 'Wilhuff Tarkin':
            pp = tarkin;
            break;
        case 'Chewbacca':
            pp = chewbacca;
            break;
        case 'Han Solo':
            pp = han;
            break;
        case 'Palpatine':
            pp = darthSidious;
            break;
        case 'Boba Fett':
            pp = boba;
            break;
        default:
            break;
    }
    return (
        <div className='container'>
            <div className='cardstyle'>
                <h1>{name}</h1>
                <img src={pp} alt="" height="250" width="200" />
                <div className='info'>
                    <p>Homeworld: {world}</p>
                    <p>Specie: {specie}</p>
                    <p>Episode {films + ','}</p>
                </div>
            </div>
        </div>
    )
}
export default Card; 