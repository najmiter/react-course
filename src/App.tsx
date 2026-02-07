import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  // const todos = [1, 2, 3];

  const value = React.useMemo(() => {
    let total = 0;
    for (const i of Array(10_000_000).keys()) {
      total += i + count2;
    }
    return total;
  }, [count2]);

  // const getValue = () => {
  //   let total = 0;
  //   for (const i of Array(10_000_000).keys()) {
  //     total += i;
  //   }
  //   return total;
  // };

  const handleClick = () => {
    setCount((p) => p + 1);
    if (count % 2 === 0) {
      setCount2((p) => p + 1);
    }
  };

  return (
    <div className="grid h-svh place-content-center pt-5 gap-5">
      <button onClick={handleClick} className="p-3 rounded-xl bg-indigo-500 cursor-pointer">
        {count} +
      </button>
      <h1 className="text-7xl font-mono">{value}</h1>
      {/* <h1 className="text-7xl font-mono">{getValue()}</h1> */}
    </div>
  );
}
