import "./App.css";
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import MemeList from "./components/MemeList";

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
        <MemeList></MemeList>
      </main>
    </>
  );
}

export default App;
