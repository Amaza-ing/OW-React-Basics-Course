import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  // let number = 0;
  const [number, setNumber] = useState(0);
  const myPlaceholder = "Escribe aquí";

  const addOne = () => {
    // number++;
    setNumber(number + 1);
    console.log(number);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        <h2>Saludos!</h2>
        <input placeholder={myPlaceholder} type="text" />

        <h2 onClick={addOne}>Number: {number}</h2>
      </main>
    </>
  );
}

export default App;
