import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Se modifico el counter");
  }, [counter]);
  return (
    <>
      <h1>Hola UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
    </>
  );
};
export default App;
