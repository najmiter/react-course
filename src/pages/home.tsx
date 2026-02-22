import { NavLink } from 'react-router';

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-5">
      <h1>Home Page</h1>

      <NavLink to="/about">About page</NavLink>
    </div>
  );
}
