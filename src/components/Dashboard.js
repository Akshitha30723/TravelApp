import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
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
            
      
    )
}
export default Dashboard;
