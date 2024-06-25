import React, { useState } from 'react'

const AuthApp = () => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =  async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
        });
        const data = await response.json();
        if(data.success) {
            setUser(data.user)
            setUsername('');
            setPassword('');
        } else {
            alert('Login failed')
        }
    };

    const handleRegister = async () => {
        const response = await fetch('/apii/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,password}),
        });
        const data = await response.json();
        if(data.succcess) {
            alert('Registration success');
        } else {
            alert('Registration failed');
        }
    };

  return (
    <div>
        <h4>AuthApp</h4>
        {user ? (<div>
            <h1>Welcom,{user.username}</h1>
            <button onClick={() => setUsername(null)}>Logout</button>
        </div>) : (
            <div>
            <label>Username</label>
            <input style={{width: '200px'}} type='text' value={username} placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
            <label>Password</label>
            <input style={{width: '200px'}} type='text' value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} />
            <div>
            <button style={{width: '100px'}} onClick={handleLogin}>Login</button>
            <button style={{width: '100px'}} onClick={handleRegister}>Register</button>
            </div>
        </div>
        )}
        
</div>
  )
}

export default AuthApp;