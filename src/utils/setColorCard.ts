import { ICards } from "../types/card.type";

type TypeStyle = "bg" | "inner" | "border";

export const setColorCard = (
  cards: ICards[],
  pokemonId: number,
  type: TypeStyle
) => {
  const colors = [
    { bg: "bg-slate-600", inner: "bg-slate-400", border: "border-slate-400" },
    { bg: "bg-lime-600", inner: "bg-lime-400", border: "border-lime-400" },
    { bg: "bg-green-600", inner: "bg-green-400", border: "border-green-400" },
    { bg: "bg-teal-600", inner: "bg-teal-400", border: "border-teal-400" },
    { bg: "bg-sky-600", inner: "bg-sky-400", border: "border-sky-400" },
    {
      bg: "bg-violet-600",
      inner: "bg-violet-400",
      border: "border-violet-400",
    },
  ];

  const obj: any = {};
  cards.forEach(({ id }) => (obj[id] ? obj[id]++ : (obj[id] = 1)));
  let bg = "";
  let inner = "";
  let border = "";
  if (Object.keys(obj).length !== 0) {
    Object.keys(obj).forEach((id, i) => {
      if (id === String(pokemonId)) {
        bg = colors[i].bg;
        inner = colors[i].inner;
        border = colors[i].border;
      }
    });
  }
  if (type === "bg") {
    return bg;
  } else if (type === "inner") {
    return inner;
  } else {
    return border;
  }
};
