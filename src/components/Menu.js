import React from 'react';
import MenuCard from './menu-card';
import { menuData } from './menuData';
function Menu(){
    return(
<div className="features">
{menuData.map((e)=>{
            return(
                <MenuCard name={e.name} children={e.icon}/>
            );
        }
        )}
                         
            </div>
    )
}
export default Menu;
