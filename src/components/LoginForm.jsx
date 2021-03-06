import { useState } from "react";
import axios from 'axios'

const projectID = 'ce6001da-7a72-4bf7-b993-14aabe76a38c';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

        try {
            // username | password =>chat engine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // works out -> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');

        } catch (error) {
            //error -> try with new username....
            setError("OOPs, incorrect credentials");

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h2 >{error}</h2>
            </div>
        </div>
    )

}

export default LoginForm;