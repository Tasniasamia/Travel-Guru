import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {
    RangeDatePicker,
    SingleDatePicker
  } from "react-google-flight-datepicker";
  import "react-google-flight-datepicker/dist/main.css";
import { Button } from 'react-bootstrap';
const Destination = () => {
    const loaddata=useLoaderData();
    console.log(loaddata);
    return (
        <div className='d-flex justify-content-center align-items-center my-5 mx-5'>
            <div style={{width:"40%"}}className='d-flex align-items-center justify-content-center p-5'>
           <div className='text-white'>
          <h1>{loaddata.name}</h1>
          <p>{loaddata.description}</p>
        </div></div>
            <div className=''style={{width:"40%",background:"white"}}>
            <form className='overflow-scroll p-4 '>
  <div class="mb-3">
    <label for="origin" class="form-label">Origin</label>
    <input type="text" class="form-control" id="originid" aria-describedby="emailHelp"placeholder='Origin'/>
  </div>
  <div class="mb-3">
    <label for="destination" class="form-label">Destination</label>
    <input type="text" class="form-control" id="destinationid"placeholder='Your Destination'/>
  </div>
  <div class="mb-3 form-check mx-auto">
 
      <div className='d-flex justify-content-between px-3'>
        <div className=''>
           <span>From</span>
      <SingleDatePicker startDate={new Date(2020, 0, 15)} /></div>
      <div className=''>
       <span>To</span>
      <SingleDatePicker startDate={new Date(2020, 3, 15)} /></div>
      </div>

  </div>
  <div className='text-center'>
  <Button style={{background:"primary",color:"white"}}><Link to={`/other_layout/${loaddata.id}`}className='text-decoration-none text-white'>Start Booking</Link> </Button>
  </div>
</form>
            </div>
        </div>
    );
};

export default Destination;