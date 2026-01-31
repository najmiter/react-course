import './App.css';

export default function App() {
  return (
    <div className="relative grid gap-10">
      <p className="text-yellow-500 grid grid-cols-[repeat(20,1fr)] sm:flex font-bold after:absolute after:top-0 after:left-0 after:bg-amber-500 after:size-4">
        Lorem, ipsum dolor.
      </p>
      <p
        data-active="true"
        className="text-yellow-500 hover:text-red-500 data-[active='true']:font-bold cursor-pointer transition-transform has-[div:hover]:text-indigo-500 relative">
        Lorem, ipsum dolor.
        <div className="absolute -bottom-100 left-0">div</div>
      </p>

      <div className="[&_p]:text-pink-500">
        <div>
          <p>Child para</p>
        </div>
      </div>
    </div>
  );
}
