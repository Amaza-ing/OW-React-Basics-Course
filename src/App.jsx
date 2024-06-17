import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi Web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact Us",
  };

  const [user, setUser] = useState({});

  const [showMovies, setShowMovies] = useState(true);

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  // useEffect(() => {
  //   console.log("Ejecución con cada renderización del componente raíz");
  // });

  useEffect(() => {
    console.log("Ejecución con cada cambio de la variable reactiva user");
  }, [user]);

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        {user.username && <h2>Saludos {user.username}!</h2>}
        <Login handleLogin={login}></Login>

        <button onClick={() => setShowMovies(!showMovies)}>
          Toggle Movies
        </button>
        {showMovies && <MovieList></MovieList>}
      </main>
    </>
  );
}

export default App;
