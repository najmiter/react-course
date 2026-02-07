import React from 'react';

// const TIMEOUT = 3 * 1000;

export default function App() {
  // const [ids, setIds] = React.useState<string[]>([]);

  // const inputRef = React.useRef<HTMLInputElement | null>(null);
  // const timeoutRef = React.useRef<number | null>(null);

  // React.useEffect(() => {
  //   if (!inputRef.current) return;

  //   inputRef.current.focus();
  // }, []);

  // React.useEffect(() => {
  //   if (typeof timeoutRef.current === 'number') return;

  //   timeoutRef.current = setInterval(() => {
  //     setIds((prev) => [...prev, crypto.randomUUID()]);
  //   }, TIMEOUT);
  // }, []);

  // 0...TIMEOUT => 560ms => 0ms

  // const handleReset = () => {
  //   if (timeoutRef.current) {
  //     clearInterval(timeoutRef.current); // 120
  //     timeoutRef.current = null;
  //   }

  //   timeoutRef.current = setInterval(() => {
  //     setIds((prev) => [...prev, crypto.randomUUID()]);
  //   }, TIMEOUT);
  // };

  return (
    <div className="grid ">
      {/* <input ref={inputRef} type="text" placeholder="Enter some text" /> */}

      {/* <button onClick={handleReset}>Reset interval</button> */}

      {/* <ul className="mt-5">
        {ids.map((id) => (
          <li className="font-mono" key={id}>
            {id}
          </li>
        ))}
      </ul> */}

      <ObserverDemo />
    </div>
  );
}

function ObserverDemo() {
  const [jha, setJha] = React.useState(false);
  // const sectionRef = React.useRef<HTMLDivElement | null>(null);

  // React.useEffect(() => {
  //   if (!sectionRef.current) return;

  //   const observer = new IntersectionObserver(
  //     ([section]) => {
  //       setJha(section.isIntersecting);
  //     },
  //     { threshold: 1 },
  //   );
  //   observer.observe(sectionRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <div className="h-svh bg-blue-950 w-full"></div>
      <section
        // ref={sectionRef}
        className="h-[50vh] mb-50 bg-red-500 grid place-content-center"
        ref={(div) => {
          const observer = new IntersectionObserver(
            ([section]) => {
              setJha(section.isIntersecting);
            },
            { threshold: 1 },
          );

          console.log('observing...');
          observer.observe(div);

          return () => {
            console.log('cleaning...');
            observer.disconnect();
          };
        }}>
        <h1 className="text-7xl">{jha ? '🙉' : '🙈'}</h1>
      </section>
    </>
  );
}
