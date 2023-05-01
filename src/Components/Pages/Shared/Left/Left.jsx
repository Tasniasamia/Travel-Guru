import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Left = (props) => {
    const propdata=props.propdata;
    console.log(propdata);
    return (
        <div className='text-white'>
          <h1>{propdata.name}</h1>
          <p>{propdata.description}</p>
          <Button ><Link to={`/Destination/${propdata.id}`}className='text-white text-decoration-none'>  Booking</Link><i className="fa-solid fa-right-long ms-2"></i></Button>
        </div>
    );
};

export default Left;