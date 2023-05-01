import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel_item from '../Hotel_item/Hotel_item';
import { Container } from 'react-bootstrap';

const Hotel = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div>
            <Container>
            {
                loaddata.map(index=><Hotel_item indexdata={index} key={index._id
                }></Hotel_item>)
            }
            </Container>
      
        </div>
    );
};

export default Hotel;