import React from 'react'
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar className="chat__headerAvatar"></Avatar>
                <div className="chat__headerDesc">
                    <h2>Dance Room</h2>
                    <p>some dates here</p>
                </div>
                <div className="chat__headerIcons">
                <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{
                        new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{
                        new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__reciver">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{
                        new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
