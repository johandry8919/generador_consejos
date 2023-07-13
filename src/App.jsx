import  { useState, useEffect } from "react";
import "./App.css";
import patternDivider from "./assets/images/pattern-divider-mobile.svg";
import iconDice from "./assets/images/icon-dice.svg";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      console.log(error);
    }
  };

  const generateAdvice = () => {
    fetchAdvice();
  };
  return (
    <main className="fondo">
      <div className="container">
        <h1>ADVICE #{id}</h1>
        <p className="cons">{advice}</p>
        <div className="tira">
          <img src={patternDivider} alt="Pattern Divider" />
        </div>
        <button className="boton" onClick={generateAdvice}>
          <img className="botonimg" src={iconDice} alt="Dice Icon" />
        </button>
      </div>
    </main>
  );
};

export default App;
