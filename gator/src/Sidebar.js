import React from "react";
import "./Sidebar.css";
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import SidebarOption from "./SidebarOption";
import HouseIcon from '@material-ui/icons/House';
import PageviewIcon from '@material-ui/icons/Pageview';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from "@material-ui/core";
import {GiCrocJaws} from "react-icons/gi";

function Sidebar() {
    return(
        <div className="sidebar">
            {/* Icon */}
            <GiCrocJaws className="sidebar__gatorIcon" />
            <SidebarOption active Icon={HouseIcon} text="Home"/>
            <SidebarOption Icon={PageviewIcon} text="Requests" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>
            {/* post */}
            <Button variant="outlined" className="sidebar__gator" fullWidth>Share some feedback</Button>
            
        </div>
    );

}

export default Sidebar;