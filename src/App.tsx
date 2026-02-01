import React from 'react';

// const IDZ = [1, 2, 3] as const;

export default function App() {
  const [count, setCount] = React.useState(() => {
    return +(localStorage.getItem('count') ?? '0');
  });

  // const [todos, setTodos] = React.useState(IDZ);

  React.useEffect(() => {
    console.log('Effect ran');
    localStorage.setItem('count', count.toString());

    const handler = () => {
      console.log('clicked');
    };

    document.addEventListener('click', handler);

    return () => {
      console.log('Cleaning...');
      document.removeEventListener('click', handler);
    };
  }, [count]);

  return (
    <div className="grid place-content-center mt-10">
      <div>{count}</div>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
    </div>
  );
}
