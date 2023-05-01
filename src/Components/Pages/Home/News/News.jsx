import React, { useRef,useEffect, useState } from 'react';
import Left from '../../Shared/Left/Left';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './index.css'
import './News.css'
// import required modules
import { Pagination } from "swiper";
const News = () => {
    const[data,setData]=useState([]);
    const[pikdata,setPikdata]=useState([]);
    useEffect(()=>{
        fetch("https://server-tasniasamia.vercel.app/pick_name")
        .then(res=>res.json())
        .then(data=>setPikdata(data))
    },[])
    useEffect(()=>{
        fetch("https://server-tasniasamia.vercel.app/pick_name/1")
        .then(res=>res.json())
        .then(data=>setData(data))

    },[pikdata]);
   function getid(id){
fetch(`https://server-tasniasamia.vercel.app/pick_name/${id}`)
.then(res=>res.json())
.then(data=>setData(data))
   }
console.log( data);

    return (
        <div className='d-flex'>
        <div style={{width:"50%"}}className='d-flex align-items-center justify-content-center p-5'>
            <div>
           {
            <Left propdata={data}></Left>
           }</div></div>
           <div  style={{width:"50%"}}>
           <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
            {
               pikdata.map(index=>  
              
            
 
        
                <SwiperSlide style={{backgroundImage:`url(${index.img})`,backgroundPosition:"center center",backgroundAttachment:"fixed",backgroundSize:"cover"}}className='rounded ' key={index.unik_id} onClick={()=>getid(index.id)}>
              

                 
                    <h2 className='text-white'>{index.name}</h2>
             </SwiperSlide>
        
           
       
) 
            }
            
            </Swiper>
           </div>
        </div>
    );
};

export default News;