import { FC } from "react";
import pokemon from "../../assets/pokemon.png";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

interface IBackCard {
  onClick: () => void;
  disabled: boolean;
}

export const BackCard: FC<IBackCard> = ({ onClick, disabled }) => {
  const opacityStyle = disabled ? "opacity-0" : "opacity-1 cursor-pointer";
  return (
    <motion.div
      initial={
        disabled
          ? {
              rotateY: 0,
              opacity: 1,
            }
          : {
              rotateY: "90deg",
              opacity: 1,
            }
      }
      animate={
        disabled
          ? {
              rotateY: "140deg",
              opacity: 0,
            }
          : {
              rotateY: 0,
              opacity: 1,
            }
      }
      transition={{ type: "spring", duration: 0.7 }}
      onClick={onClick}
      className={` ${opacityStyle} ${styles.back_card}`}
    >
      <img className="w-[80px]" src={pokemon} alt="cards" />
    </motion.div>
  );
};
