import React from 'react';
import Card from './card';
import './CardList.css';

const CardList = ({ names, world, specie, films }) => {
    //const rebels = [0, 1, 2, 4, 9, 12, 13];
    //const empire = [3, 11, 19, 20];

    return (
        <div className='wow'>
            {
                names.map((user, i) => {
                    if (true) {
                        return (
                            <Card
                                key={i}
                                side={"rebels"}
                                name={names[i]}
                                world={world[i]}
                                specie={specie[i]}
                                films={films[i]}
                            />
                        );
                    }
                    if (true) {
                        return (
                            <Card
                                key={i}
                                side={"empire"}
                                name={names[i]}
                                world={world[i]}
                                specie={specie[i]}
                                films={films[i]}
                            />
                        );
                    }

                })
            }
        </div>
    );
}

export default CardList;