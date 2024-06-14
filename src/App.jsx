import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="main-content">
        <h1>Hola a todos!</h1>
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
