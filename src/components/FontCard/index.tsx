import { FC, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ICards } from "../../types/card.type";
import styles from "./style.module.scss";

interface IColors {
  bg: string;
  inner: string;
  border: string;
}

interface IFontCard {
  card: ICards;
  colors: IColors;
}

export const FontCard: FC<IFontCard> = ({ card, colors }) => {
  const { name, image, id, disabled } = card;
  const isDisabled = disabled ? "opacity-0" : "opacity-1 cursor-pointer";

  const transformText = useCallback((text: string) => {
    const newText = text
      .split("")
      .map((item, i) => (i === 0 ? item.toUpperCase() : item))
      .join("");
    return newText.substring(0, 9);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ rotateY: "90deg" }}
        animate={{ rotateY: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className={` ${isDisabled} ${styles.card} ${colors.bg} ${colors.border}`}
      >
        <div className={`${styles.card_name} ${colors.inner}`}>
          {transformText(name)}
        </div>
        <div className={`${styles.card_img} ${colors.inner}`}>
          <img src={image} alt="cards" />
        </div>
        <div className={`${styles.card_id} ${colors.inner}`}>id {id}</div>
      </motion.div>
    </AnimatePresence>
  );
};
