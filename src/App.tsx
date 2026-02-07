import React from 'react';

// function useCallback(cb: () => void, deps: []) {
//   return React.useMemo(() => cb, deps);
// }

export default function App() {
  const [count, setCount] = React.useState(0);

  const getValue = React.useCallback(() => {
    let total = 0;
    for (const i of Array(10_000_000).keys()) {
      total += i;
    }
    return total;
  }, []);

  const handleClick = () => {
    setCount((p) => p + 1);
  };

  return (
    <div className="grid h-svh place-content-center pt-5 gap-5">
      <button onClick={handleClick} className="p-3 rounded-xl bg-indigo-500 cursor-pointer">
        {count} +
      </button>
      <h1 className="text-7xl font-mono">{getValue()}</h1>
    </div>
  );
}
