import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ADS } from '../Data';
const AddList = () => {
  return (
    <div>
        <Carousel>
            {ADS.map((el)=>  
        
        <Carousel.Item key={Math.random()}>
        <img
          className="d-block w-100"
          src={el}
          alt=""
          height={"600px"}
        />
      </Carousel.Item>)}
        </Carousel>

    </div>
  )
}

export default AddList