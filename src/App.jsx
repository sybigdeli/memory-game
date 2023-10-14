import { useEffect, useRef, useState } from "react";
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
import Gameover from "./components/Gameover";
import Countdown from "react-countdown";
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

const generateRandom = () => {
  return Array.from({ length: 16 })
    .map((_, i) => {
      return {
        id: i + 1,
        identifier: Math.floor(i / 2),
        image: images[Math.floor(i / 2)],
      };
    })
    .sort(() => Math.random() - 0.5);
};

function App() {
  const pending = useRef(false);
  const [move, setMove] = useState(25);
  const [gameTime, setGameTime] = useState(5);
  const [handleTimer, setHandleTimer] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState([]);

  const [items, setItems] = useState(generateRandom);

  const handleStartGame = () => {
    setMove(25);
    const newItems = generateRandom();
    setSelectedItemId(newItems.map((i) => i.id));

    setItems(newItems);

    // setTimeout(() => {
    //   selectedItemId(
    //     newItems.map((i) => {
    //       i.id;
    //     })
    //   );
    // }, 0);

    setTimeout(() => {
      setSelectedItemId([]);
    }, 1000);

    //   const timer = setInterval(() => {
    //     setGameTime((t) => t - 1);
    //   }, 1000);
    //   setHandleTimer(timer);
    // };

    // useEffect(() => {
    //   if (gameTime < 0) {
    //     clearInterval(timer);
    //   }
    // }, [gameTime]);
  };

  const handleClick = (item) => {
    if (pending.current) return;
    setMove(move - 1);
    setSelectedItemId([...selectedItemId, item.id]);

    if (selectedItemId.length % 2 !== 0) {
      pending.current = true;
      const lastItemId = selectedItemId[selectedItemId.length - 1];
      const lastItem = items.find((item) => item.id === lastItemId);

      if (item.identifier !== lastItem.identifier) {
        setTimeout(() => {
          setSelectedItemId(
            selectedItemId.filter((item) => item !== lastItemId)
          );
          pending.current = false;
        }, 1000);
      } else {
        pending.current = false;
      }
    } else {
      pending.current = false;
    }
  };

  return (
    <>
      <section className="body-game">
        <header>
          <p>
            تعداد حرکت : <span>{move}</span>
          </p>
          <p>
            زمان :<span>{gameTime}</span>
          </p>
        </header>
        <section className="body-game__items">
          {items.map((item, i) => (
            <Items
              key={item.id}
              index={i + 1}
              image={item.image}
              onClick={() => handleClick(item)}
              isShow={selectedItemId.includes(item.id)}
            />
          ))}
        </section>
        <footer>
          <button onClick={handleStartGame}>شروع دوباره</button>
        </footer>
      </section>
      {move == 0 && <Gameover />}
    </>
  );
}

export default App;
