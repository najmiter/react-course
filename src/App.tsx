import React from 'react';

export default function App() {
  // const [user, setUser] = React.useState('najmiter');
  const [users, setUsers] = React.useState(['Ali', 'Noor', 'Huzaifa']);

  // const newUsers = users.map((user, i) => {
  //   return <span key={user + i}>{user}</span>;
  // });

  // const newUsers = [<span>Ali</span>, <span>Noor</span>, <span>Huzaifa</span>];

  const hanldeSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user } = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    if (user.trim()) {
      console.log('adding a user', user);
      const updatedUsers = structuredClone(users);
      updatedUsers.unshift(user);
      // const newUsers = [user, ...users];
      // setUsers(newUsers);
      // setUsers(updatedUsers);
      setUsers((prevUsers) => {
        return [user, ...prevUsers];
      });

      e.currentTarget.reset();
    }
  };

  return (
    <div className="grid place-content-center mt-10">
      <form onSubmit={hanldeSubmit}>
        <input type="text" name="user" placeholder="Type bro's name" />
        <button type="submit">Add User</button>
      </form>

      {/* <div className="grid gap-5 mt-10">{newUsers}</div> */}
      <div className="grid gap-5 mt-10">
        {users.map((user, i) => (
          <span key={user + i}>{user}</span>
        ))}
      </div>
    </div>
  );
}
