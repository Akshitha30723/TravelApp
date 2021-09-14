import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {ImHome2} from 'react-icons/im';
import {RiFootprintLine} from 'react-icons/ri';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ExploreIcon from '@material-ui/icons/Explore';
import FlightIcon from '@material-ui/icons/Flight';
import image3 from '../assets/image3.jpg';
import image7 from '../assets/image7.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import img from '../assets/img.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
function Dashboard(){
    const style={width:45,height:25,color:'lightcoral'}
    const style1={width:45,height:25,color:'white'}
    const style2={width:25,height:15,color:'white'}
    return(
        
        <div className="dashboard">
            <div className="topSec">
                <div className="searchcon">
                    <button className="search-btn">
                    <SearchIcon/>
                    </button>
                    <input className="searchcontrol" type="text" placeholder="Search"/>
                    </div>
                <div className="prof">
                    Hello, User <img className="imge" src={img}/>
                </div>
            </div>
            <div className="box-menu">
            <div className="menu1">
            <button className="button"><ImHome2 style={style}/></button>
            <div className="txt">Accomodation</div>
            </div>
            <div className="menu1">
            <button className="button"><BeachAccessIcon style={style}/></button><br/>
            <text className="txt">Experiences</text>
            </div>
            <div className="menu1">
            <button className="button"><ExploreIcon style={style}/></button><br/>
            <text className="txt">Adventures</text>
            </div>
            <div className="menu1">
            <button className="button"><FlightIcon style={style}/></button><br/>
            <text className="txt">Flights</text>
            </div>
            </div>
            
            <div className="Exp">
                <h2>Best Experiences</h2>
                <div className="pics">
                    <div className="child">
                    <img className="img" src={image3}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">The Golden Circle,</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>5-7 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image7}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">Snorkelling</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>11 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image5}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">Snorkelling</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>11 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image6}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">The Golden Circle,</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>5-7 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>              
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
