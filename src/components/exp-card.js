import React, {useState} from 'react';
import {RiFootprintLine} from 'react-icons/ri';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
    function PlaceCard(props){
    const style1={width:40,height:20,color:'white'}
    const style2={width:25,height:15,color:'white'}
      return (
        <div class='child'>
          <img class='img'src={props.img} alt=' ' />
          <div class="top-right"><FavoriteIcon style={style1}/></div>
          <div class='bottom-left'>{props.desc}</div>
          <div class='bottom-left1'> {props.place} </div>
          <p class='bottom-left2'><DateRangeIcon style={style2}/>{props.days} days</p>
         <p class='bottom-right'><RiFootprintLine style={style2}/> {props.distance}</p>

        </div>
      )
    }

export default PlaceCard;
