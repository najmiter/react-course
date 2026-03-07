import React from 'react';

interface Props {
  name: string;
}

const promiseFn = () => new Promise<number>((r) => setTimeout(() => r(Math.random()), 1500));
const promise = promiseFn();

export default function Example({ name }: Props) {
  const randomNumber = React.use(promise);

  return (
    <div>
      {name}: <pre>{randomNumber}</pre>
    </div>
  );
}
