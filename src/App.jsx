import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => (
    Array.from({ length: 16 }).map((_, i) => ({ id: (i + 1) }))
  ));

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
          {items.map((item) => (
            <div key={item.id} className="body-game__cards">
              {item.id}
            </div>
          ))}
        </section>
        <footer>
          <button>شروع دوباره</button>
        </footer>
      </section>
    </>
  );
}

export default App;
