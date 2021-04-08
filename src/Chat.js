import React, { useState } from 'react'
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';


function Chat({messages}) {
    const [input, setInput] = useState('');
    const chatContainer = React.createRef();

    const scrollToMyRef = () => {
        const scroll =
          chatContainer.current.scrollHeight -
          chatContainer.current.clientHeight ;
          chatContainer.current.scrollTo(0, scroll);
      };

    const sendMessage = async (e) =>{
        e.preventDefault();
        await axios.post('/messages/new', {
            name : 'oussama',
            message : input,
            timestamp : "just now",
            received : true
        })
        scrollToMyRef();
        setInput('');
    }
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
            <div ref={chatContainer} className="chat__body">
                {messages.map(message =>(
                    <p className={`chat__message ${message.received && "chat__reciver"}`}>
                        <span className="chat__name">{message.name}</span>
                            {message.message}
                        <span className="chat__timestamp">{message.timestamp}</span> 
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                        <InsertEmoticonIcon />
                        <form >
                            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                            <button onClick={sendMessage} type="submit">
                                Send a message 
                            </button>
                        </form>
                        <MicIcon />
            </div>
        </div>
    )
}

export default Chat
