import { useState } from 'react';
import './App.css';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState<'red' | 'orange'>('red');
  const [value, setValue] = useState(`Hello ${backgroundColor}`);

  const handleClick = async () => {
    // orange
    setBackgroundColor((prev) => {
      if (prev === 'red') return 'orange';
      else return 'red';
    });

    setValue((prev) => {
      return prev.includes('Hello') ? `Hi ${backgroundColor}` : `Hello ${backgroundColor}`;
    });
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor }}>
        <h1>{value}</h1>
      </button>
    </div>
  );
}

/* 
let backgroundColor = 'red';

function setBackgroundColor(color: string): void {
  backgroundColor = color;
}

function useState(color: string): [string, (v: string) => void] {
  setBackgroundColor(color);

  return [color, setBackgroundColor];
}

const [bg, setBg] = useState('red')

*/
