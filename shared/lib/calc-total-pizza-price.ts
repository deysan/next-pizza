import { Ingredient, ProductItem } from "@prisma/client";

import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Calculates the total price of a pizza based on its type, size, and selected ingredients.
 *
 * @param type - The type of pizza (e.g., традиційна, тонка).
 * @param size - The size of the pizza (e.g., Маленька, Середня, Велика).
 * @param items - The list of product items available which include different pizza types and sizes with their prices.
 * @param ingredients - The list of all possible ingredients with their prices.
 * @param selectedIngredients - A set of selected ingredient ids.
 *
 * @returns The total price of the pizza.
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
