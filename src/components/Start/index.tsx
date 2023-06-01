import { FC, useEffect } from "react";
import { BackCard } from "../BackCard";
import { FontCard } from "../FontCard";
import { setColorCard } from "../../utils/setColorCard";
import { useGameStore } from "../../store/game.store";
import { Loading } from "../Loading";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export const Start: FC = () => {
  const { cards, finishGame, getCards, loading, filterCards } = useGameStore();

  const selected = (index: number, id: number) => {
    const filterArr = cards.map((item, i) => {
      if (item.id === id && index === i) {
        return { ...item, selected: true };
      } else {
        return item;
      }
    });
    getCards(filterArr);
  };

  useEffect(() => {
    filterCards();
  }, [cards, finishGame, getCards, filterCards]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
          className={styles.wrapper_cards}
        >
          {cards.map((card, i) => {
            const colors = {
              bg: setColorCard(cards, card.id, "bg"),
              inner: setColorCard(cards, card.id, "inner"),
              border: setColorCard(cards, card.id, "border"),
            };
            if (card.selected && !card.disabled) {
              return <FontCard key={i} card={card} colors={colors} />;
            } else {
              return (
                <BackCard
                  disabled={card.disabled}
                  key={i}
                  onClick={() => selected(i, card.id)}
                />
              );
            }
          })}
        </motion.div>
      )}
    </>
  );
};
