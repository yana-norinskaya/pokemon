import { create } from "zustand";
import axios from "axios";
import { getRandomId } from "../utils/getRandomId";
import { mixArray } from "../utils/mixArray";
import { ICards } from "../types/card.type";
import { IGameStore } from "../types/game.type";

export const useGameStore = create<IGameStore>((set, get) => ({
  start: false,
  cards: [],
  home: true,
  finish: false,
  loading: false,
  getCards: (cards: ICards[]) => set({ cards: [...cards] }),
  startGame: () => set({ start: true, home: false, finish: false }),
  finishGame: () => set({ finish: true, start: false, home: false }),
  homeGame: () => set({ home: true, finish: false, start: false }),
  fetchGetCards: async () => {
    try {
      set({ loading: true });
      let cards: ICards[] = [];
      for (let i = 0; i < 6; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${getRandomId(1, 800)}`
        );
        const { id, name, sprites } = response.data;
        cards = [
          ...cards,
          {
            id: id,
            name: name,
            image: sprites.other.home.front_default,
            selected: false,
            disabled: false,
          },
        ];
      }
      set({ cards: mixArray([...cards, ...cards]) });
      setTimeout(() => {
        set({ loading: false });
      }, 1500);
    } catch (e) {
      console.log(e);
    }
  },
  clearCards: () => set({ cards: [] }),
  filterCards: () => {
    const filterArr = get().cards.filter((item) => item.selected);
    if (filterArr.length === 2) {
      if (filterArr[0].id === filterArr[1].id) {
        const pokemonId = filterArr[0].id;
        const newArr = get().cards.map((item) =>
          item.id === pokemonId
            ? { ...item, selected: false, disabled: true }
            : item
        );
        setTimeout(() => {
          set({ cards: [...newArr] });
        }, 1000);
      } else {
        const newArr = get().cards.map((item) => {
          if (item.selected) {
            return {
              ...item,
              selected: false,
            };
          } else {
            return { ...item };
          }
        });
        setTimeout(() => {
          set({ cards: [...newArr] });
        }, 1000);
      }
    }
  },
}));
