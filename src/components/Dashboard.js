import React from 'react';
import img from '../assets/img.jpg';
import Side from './sidebar'; 
import Search from './Searching';
import Menu from './Menu';
import Experiences from './Experiences';
import Hotels from './Hotels';

function Dashboard(){
    return(
  <div className="dsh">
        <div className="dashboard">
            <div>
            <Side/>
            </div>
            <div className="content">
            
                <div className="topSec">
                    <div >
                    <Search/>
                    </div>
                <div className="prof">
                    Hello,<b> User</b> <img className="imge" src={img}/>
                </div>
                </div>
            <div className="box-menu">
                <Menu/>
            </div>
                <div className="Exp">
                    <div>
                    <Experiences/>
                    </div>
                    <div className="prof1">
                   <a href="/settings">See all</a>
                </div>
                </div>
                <div className="hot">
                    <div>
                    <Hotels/>
                    </div>
                    <div className="prof1">
                   <a href="/hotels">See all</a>
                </div>
                </div>
            </div>
            </div>
            </div> 
            
    )
}
export default Dashboard;
