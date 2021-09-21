import React from 'react';
import PlaceCard from './exp-card';
import { expData } from './expData';
function Experiences(){
return(
    
    <div>
    <h3>Best Experiences</h3>  
    <div className="pics">
        {expData.map((e)=>{
            return(
                <PlaceCard img={e.img} desc={e.desc} place={e.place} distance={e.distance}/>
            );
        }
        )}
        </div>
        </div>
)
}
export default Experiences;
