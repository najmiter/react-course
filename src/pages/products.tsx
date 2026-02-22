import { NavLink } from 'react-router';

export default function ProductsPage() {
  return (
    <div className="">
      <h1>Products List</h1>
      <div className="grid gap-3">
        <NavLink to={'/products/1'}>Product 1</NavLink>
        <NavLink to={'/products/2'}>Product 2</NavLink>
        <NavLink to={'/products/3'}>Product 3</NavLink>
      </div>
    </div>
  );
}
