export const mapPizzaSize = {
  20: "Маленька",
  30: "Середня",
  40: "Велика",
} as const;

export const mapPizzaType = {
  1: "традиційна",
  2: "тонка",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value: Number(value) as PizzaSize,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value: Number(value) as PizzaType,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;
