import React from 'react'
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div classname="sidebar-container">
        <image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.ca%2Fitm%2F324828945961&psig=AOvVaw0MhIswyTEvJMWQweGaQ0oU&ust=1752124832574000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjT4eODr44DFQAAAAAdAAAAABAE" className='profile-img' alt="profile" />
        <div>
            <sidebarbutton/>
            <sidebarbutton/>
            <sidebarbutton/>
            <sidebarbutton/>
            <sidebarbutton/>
        </div>
    </div>
  )
}
