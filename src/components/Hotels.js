import React from 'react';
import HotelCard from './hotel-card';
import { hotelData } from './hotelData';
function Hotels(){
    return(
        <div>
            <h3>Top Hotels</h3>
            <div className="box-hotel">
            {hotelData.map((e)=>{
            return(
                <HotelCard img={e.img} name={e.name} desc={e.desc} rating={e.rating}/>
            );
        }
        )}
            </div>
        </div>
    )
}
export default Hotels;
