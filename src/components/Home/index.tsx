import { FC } from "react";
import pokemon from "../../assets/pokemon.png";
import { useGameStore } from "../../store/game.store";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export const Home: FC = () => {
  const { startGame, fetchGetCards } = useGameStore();
  const handleStart = () => {
    startGame();
    fetchGetCards();
  };
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className={styles.home}
    >
      <motion.img
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        className="w-[300px]"
        src={pokemon}
        alt="pokemon"
      />
      <motion.p
        initial={{ y: "-150px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.6 }}
        className={styles.home_title}
      >
        memotest
      </motion.p>
      <motion.button
        initial={{ y: "-200px", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", duration: 1, delay: 0.8 },
        }}
        whileHover={{
          scale: 0.97,
          background: "red",
          transition: { type: "spring", stiffness: 100, duration: 1 },
        }}
        onClick={() => handleStart()}
        className={styles.home_btn}
      >
        start
      </motion.button>
    </motion.div>
  );
};
