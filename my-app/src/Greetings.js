import { useState } from "react";

export default function Greetings(prop) {
  const [count, setCount] = useState(0)
  function Counter(){
    setCount(count+1)
  }
  return (
    <>
      <h1>Hello, {prop.name}</h1>
      <button onClick={Counter}>
        Click me {count} times
      </button>

    </>
  );
}