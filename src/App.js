import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed"

import './App.css'


const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID="381ca48e-3681-4160-bc4e-a5e41affcb10"
            userName="javaScriptmastery"
            userSecret="fayz1105"
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    )
}

export default App