import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed"

import './App.css';

import useToken from "./Hooks/useToken";


const App = () => {
    const [token] = useToken()


    if (!token) return <LoginForm />

    return (
        <ChatEngine
            height='100vh'
            projectID="381ca48e-3681-4160-bc4e-a5e41affcb10"
            userName={localStorage.getItem('username') }
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    )
}

export default App