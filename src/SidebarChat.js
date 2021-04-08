import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src=""></Avatar>
            <div className="sidebarChat__desc">
                <h2>Dance Room</h2>
                <p>This is realtime</p>
            </div>
        </div>
    )
}

export default SidebarChat
