import './App.css';
import React from 'react';

export default function App() {
  const [user] = React.useState({ name: 'Brother' });
  const [isLoggedIn] = React.useState(true);

  const users = [user];

  // const node: React.ReactNode = 123;

  // if (user.name) {
  //   return (
  //     <div>
  //       <h1>Hello User. You are logged in!</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Hello, {user.name ? <button>Sign Out</button> : <button>Sign In</button>}</h1>

      <h2>{isLoggedIn ? 'Welcome' : 'Please log in'}</h2>

      {!!users.length && (
        <main>
          {/* dashboard nav */}
          <h3 className="text-5xl">We got some users</h3>
          {/* dashboard content */}
        </main>
      )}
    </div>
  );
}
