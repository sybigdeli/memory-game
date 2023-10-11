import { useState } from "react";
import image1url from "./assets/images/1.png";
import image2url from "./assets/images/2.png";
import image3url from "./assets/images/3.png";
import image4url from "./assets/images/4.png";
import image5url from "./assets/images/5.png";
import image6url from "./assets/images/6.png";
import image7url from "./assets/images/7.png";
import image8url from "./assets/images/8.png";
import "./App.css";
import Items from "./components/Items";
const images = [
  image1url,
  image2url,
  image3url,
  image4url,
  image5url,
  image6url,
  image7url,
  image8url,
];

function App() {
  const [selectedItemId, setSelectedItemId] = useState([]);
  const [items, setItems] = useState(() =>
    Array.from({ length: 16 })
      .map((_, i) => {
        return { id: i + 1, image: images[Math.floor(i / 2)] };
      })
      .sort(() => Math.random() - 0.5)
  );

  const handleClick = (item) => {
    setSelectedItemId([...selectedItemId, item.id]);
  };
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
          {items.map((item, i) => (
            <Items
              key={item.id}
              image={item.image}
              index={i + 1}
              onClick={() => handleClick(item)}
              isShow={selectedItemId.includes(item.id)}
            />
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
