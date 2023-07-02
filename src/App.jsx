import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const MUSICS = [1, 2, 3];

  return (
    <div className="musics-container">
      {MUSICS.map((music) => (
        <div className="music">
          <img
            src="https://i.scdn.co/image/ab67616d00001e0234e5930e29b7c0f6a315d8fa"
            alt=""
          />
          <p className="title">Your good lies</p>
          <p className="authors">Vividry</p>
        </div>
      ))}
    </div>
  );
}

export default App;
