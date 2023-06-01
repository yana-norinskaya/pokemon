import "./index.css";
import { AnimatePresence } from "framer-motion";
import { Start } from "./components/Start";
import { Finish } from "./components/Finish";
import { useGameStore } from "./store/game.store";
import { Home } from "./components/Home";
import { useEffect } from "react";

function App() {
  const { start, home, finish, cards, finishGame } = useGameStore();

  useEffect(() => {
    if (cards.length !== 0) {
      if (cards.every(({ disabled }) => disabled)) {
        finishGame();
      }
    }
  }, [cards, finishGame]);

  return (
    <div className="text-amber-300">
      <AnimatePresence>{finish && <Finish />}</AnimatePresence>
      <AnimatePresence>{start && <Start />}</AnimatePresence>
      {home && <Home />}
    </div>
  );
}

export default App;
