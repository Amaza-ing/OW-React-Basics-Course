import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  const [user, setUser] = useState({});

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  const condition = false;

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {user.username && <h2>Saludos {user.username}!</h2>}
        <Login handleLogin={login}></Login>

        {condition && <h2>La condición se cumple</h2>}
        {!condition && <h2>La condición No se cumple</h2>}

        {condition ? (
          <h2>La condición se cumple</h2>
        ) : (
          <h2>La condición No se cumple</h2>
        )}
      </main>
    </>
  );
}

export default App;
