import { NavLink } from 'react-router';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
];

export default function NavBar() {
  const activeClasses = 'text-indigo-500 font-semibold';

  return (
    <nav className="p-2 sticky w-full top-0 left-0 border-b border-neutral-800">
      <div className="max-w-5xl flex items-center justify-between gap-2 mx-auto">
        <h1 className="cursor-default font-semibold font-serif text-lg">Our App</h1>

        <div>
          <ul className="flex items-center gap-4">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => isActive && activeClasses}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="px-3 py-2 text-sm bg-indigo-500 cursor-pointer rounded-xl">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
