import { FC, useCallback } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "../../store/game.store";
import styles from "./styles.module.scss";

export const Finish: FC = () => {
  const { startGame, homeGame, clearCards, fetchGetCards } = useGameStore();
  const handleRestart = () => {
    clearCards();
    startGame();
    fetchGetCards();
  };
  const handleHome = () => {
    homeGame();
    clearCards();
  };

  const colorButton = useCallback((color: "red" | "blue") => {
    if (color === "blue") {
      return "bg-blue-500 hover:bg-blue-600";
    } else if (color === "red") {
      return "bg-red-500 hover:bg-red-600";
    }
  }, []);
  return (
    <div className={styles.modal}>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modal_box}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
          className={styles.modal_text}
        >
          finished!
        </motion.p>
        <div className="flex flex-col gap-2">
          <motion.button
            onClick={() => handleRestart()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.7 }}
            className={`${styles.modal_btn} ${colorButton("red")}`}
          >
            restart
          </motion.button>
          <motion.button
            onClick={() => handleHome()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
            className={`${styles.modal_btn} ${colorButton("blue")}`}
          >
            home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
