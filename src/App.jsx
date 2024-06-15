import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  const sayHello = () => {
    console.log("Hello! 😄");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className="main-content">
        <h1 onClick={sayHello}>Saludos!</h1>
        <input type="text" onChange={handleChange} />

        <br />
        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
