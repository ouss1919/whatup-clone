import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
  axios.get('/messages/sync')
  .then(response => {
    setMessages(response.data)
  })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('ddfddae69c611302a9df', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) =>{
      setMessages([...messages, data]);
    }); 
    return () => {
        channel.unbind_all();
        channel.unsubscribe();
    }
  }, [messages])
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat messages={messages}/>
      </div>
    </div> 

  );
}

export default App;
