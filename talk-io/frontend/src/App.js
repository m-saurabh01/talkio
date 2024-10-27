import React, { useState } from 'react';
import Chat from './components/Chat.js';
import Login from './components/Login.js';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            
            {isAuthenticated ? (
                <Chat onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
            
        </div>
    );
};

export default App;
