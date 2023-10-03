import React, { useContext } from 'react';
import Card from '../Card/Card';
import { useOutletContext } from 'react-router-dom';

const Cards = () => {
    const data = useOutletContext();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4  gap-4 mt-10 md:grid-cols-2'>
            {
                data.map((item) => <Card key={item.id} item={item} ></Card>)
            }
        </div>
    );
};

export default Cards;