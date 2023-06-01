import { ICards } from "./card.type";

export interface IGameStore {
  start: boolean;
  cards: ICards[];
  home: boolean;
  finish: boolean;
  loading: boolean;
  getCards: (cards: ICards[]) => void;
  startGame: () => void;
  finishGame: () => void;
  homeGame: () => void;
  fetchGetCards: () => Promise<void>;
  clearCards: () => void;
  filterCards: () => void;
}
