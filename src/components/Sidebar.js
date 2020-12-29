import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  MailOutline as MailOutlineIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  PermIdentity as PermIdentityIcon,
  MoreHoriz as MoreHorizIcon,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Search" Icon={SearchIcon} />
      <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
