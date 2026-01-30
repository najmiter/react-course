import './App.css';

// props -> children -> events

export default function App() {
  const handleClick = () => {
    console.log('Here was clicked');
  };

  const handleInput = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <main>
      <input type="text" onInput={handleInput} />
      <button onClick={handleClick}>Click Here</button>
      <User username="" age={0} />
      <div aria-hidden style={{ width: 200, height: 200, background: 'hotpink', filter: 'blur(100px)' }} />
      {/* <Content></Content> */}
    </main>
  );
}

interface Props {
  username: string;
  age: number;
  children?: React.ReactNode;
}

function User(params: Props) {
  console.log(params);

  const { username, age, children } = params;

  // const {username, age} = {
  //   username: 'some username',
  //   age: 90,
  // }

  return (
    <div>
      <h1>{username}</h1>
      <p>I am {age} years old</p>
      {children}
    </div>
  );
}

// function Content() {
//   return (
//     <div>
//       <User age={91} username={'TheDivGuy'}>
//         <div>
//           <p>
//             This <strong>is</strong> some extra content
//           </p>
//           <span>
//             <span></span>
//           </span>
//         </div>
//       </User>

//       <User username="Name" age={98}></User>
//     </div>
//   );
// }
