import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="body-game">
        <header>
          <p>
            تعداد حرکت : <span>40</span>
          </p>
          <p>
            زمان : <span>2:00</span>
          </p>
        </header>
        <section className="body-game__items">
          <div className="body-game__cards">1</div>
          <div className="body-game__cards">2</div>
          <div className="body-game__cards">3</div>
          <div className="body-game__cards">4</div>
          <div className="body-game__cards">5</div>
          <div className="body-game__cards">6</div>
          <div className="body-game__cards">7</div>
          <div className="body-game__cards">8</div>
          <div className="body-game__cards">9</div>
          <div className="body-game__cards">10</div>
          <div className="body-game__cards">11</div>
          <div className="body-game__cards">12</div>
          <div className="body-game__cards">13</div>
          <div className="body-game__cards">14</div>
          <div className="body-game__cards">15</div>
          <div className="body-game__cards">16</div>
        </section>
        <footer>
          <button>شروع دوباره</button>
        </footer>
      </section>
    </>
  );
}

export default App;
