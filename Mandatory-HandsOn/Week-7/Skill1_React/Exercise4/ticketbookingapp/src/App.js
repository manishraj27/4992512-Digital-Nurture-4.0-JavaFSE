import React, { useState } from 'react';
import './App.css';

// Guest Component - simple message
function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can browse flight details here.</p>
      <p>Please login to book tickets.</p>
    </div>
  );
}

// User Component - simple message
function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You are logged in and can book tickets.</p>
      <p>Flight details are displayed here.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Flight Ticket Booking System</h1>
        <div>
          {!isLoggedIn ? (
            <button onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </header>

      <main>
        {!isLoggedIn ? (
          <GuestPage />
        ) : (
          <UserPage />
        )}
      </main>
    </div>
  );
}

export default App;
