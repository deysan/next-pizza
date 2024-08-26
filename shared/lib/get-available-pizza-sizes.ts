import { ProductItem } from "@prisma/client";

import { PizzaSize, pizzaSizes, PizzaType } from "../constants/pizza";

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): ((typeof pizzaSizes)[number] & { disabled: boolean })[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value as PizzaSize,
    disabled: !filteredPizzasByType.some((pizza) => pizza.size === item.value),
  }));
};
