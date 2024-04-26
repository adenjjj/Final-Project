import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        alert(data.message);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-3">Register</h2>
            <form onSubmit={handleRegister} className="needs-validation" noValidate>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <p className="mt-3">Already a member? <Link href="/" legacyBehavior><a className="link-primary">Login here</a></Link></p>
            </form>
        </div>
    );
}
