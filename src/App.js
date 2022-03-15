import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed"

import './App.css';

import useToken from "./Hooks/useToken";

const projectID = "ce6001da-7a72-4bf7-b993-14aabe76a38c"
const App = () => {
    const [token] = useToken()


    if (!token) return <LoginForm />

    return (
        <ChatEngine
            height='100vh'
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App