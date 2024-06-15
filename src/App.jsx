import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <h2>Saludos!</h2>
        <ButtonComponent text={"Click Me"}></ButtonComponent>
      </main>
    </>
  );
}

export default App;
