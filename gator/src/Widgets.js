import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed, }
from "react-twitter-embed";


function Widgets() {
    return(
        <div className="widgets">
            {/*header*/}
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Gator" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening at Later?</h2>
            
                <TwitterTimelineEmbed sourceType="profile" screenName="latermedia" options={{ height: 800 }}/>
            </div>
           


        </div>
    );

}
export default Widgets