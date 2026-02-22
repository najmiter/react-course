import { Outlet } from 'react-router';

export default function ProductLayout() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-60">
        <h3>Filters</h3>
      </div>
      <Outlet />
      <div className="w-60">
        <h3>More Filters</h3>
      </div>
    </div>
  );
}
