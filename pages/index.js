import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (response.ok) {
            // Redirect to the homepage on successful login
            Router.push('/recipes');
        } else {
            alert(data.message); // Show error message
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? 
                <Link href="/register" legacyBehavior><a style={{ marginLeft: '5px' }}>Register here</a></Link>
            </p>
        </div>
    );
}
