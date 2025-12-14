import { Component } from 'react';
import './App.css';

// class
// function

// components, jsx

export default function App() {
  /**
    1. component (dom, user defined)
    2. number, string, boolean, undefined, null, arrays
  */

  return (
    <main>
      <p>i'm also here</p>
      <MyName></MyName>
    </main>
  );
}

const MyName = () => {
  const age = 90;

  return (
    <div>
      <h1>The Div Guy, {age}</h1>
      <p>Bro</p>
      <TestComponent></TestComponent>
    </div>
  );
};

class TestComponent extends Component {
  render() {
    return (
      <div data-from-class="true">
        <p>I live inside a class</p>
      </div>
    );
  }
}
