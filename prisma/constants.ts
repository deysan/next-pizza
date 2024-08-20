export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Закуски",
  },
  {
    name: "Салати",
  },
  {
    name: "Десерти",
  },
];

export const ingredients = [
  {
    name: "Сир пармезан",
    price: 70,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-1.webp",
  },
  {
    name: "Сир моцарела",
    price: 60,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-2.webp",
  },
  {
    name: "Шинка",
    price: 50,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-4.webp",
  },
  {
    name: "Прошуто",
    price: 70,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-3.webp",
  },
  {
    name: "Гриби",
    price: 27,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-5.webp",
  },
  {
    name: "Помідори",
    price: 25,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-6.webp",
  },
  {
    name: "Перець болгарський",
    price: 35,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-7.webp",
  },
  {
    name: "Перець чилі",
    price: 25,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-8.webp",
  },
  {
    name: "Цибуля",
    price: 15,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-9.webp",
  },
  {
    name: "Оливки",
    price: 50,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/olive-black.webp",
  },
  {
    name: "Кукурудза",
    price: 22,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-11.webp",
  },
  {
    name: "Зелень",
    price: 15,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-12.webp",
  },
  {
    name: "Ананас",
    price: 35,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-13.webp",
  },
  {
    name: "Ковбаски баварські",
    price: 40,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-23.webp",
  },
  {
    name: "Пепероні",
    price: 50,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-26.webp",
  },
  {
    name: "Ковбаса салямі",
    price: 50,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-24.webp",
  },
  {
    name: "Куряче м’ясо",
    price: 45,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-25.webp",
  },
  {
    name: "Лосось",
    price: 80,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-28.webp",
  },
  {
    name: "Рукола",
    price: 20,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-18.webp",
  },
  {
    name: "Сир дорблю",
    price: 60,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-29.webp",
  },
  {
    name: "Сир фета",
    price: 60,
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2021/07/ing-31.webp",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Нагетси",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/nagetsy.jpg",
    categoryId: 2,
  },
  {
    name: "Картопля фрі",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2022/08/kartoplya-fri.jpg",
    categoryId: 2,
  },
  {
    name: "Картопля фрі Велика",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/04/velyka-fri.jpg",
    categoryId: 2,
  },
  {
    name: "Картопля фрі з допами",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2022/08/kartoplya-fri-z-dopamy.jpg",
    categoryId: 2,
  },
  {
    name: "Картопляні крокети",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2022/08/kartoplyani-krokety.jpg",
    categoryId: 2,
  },
  {
    name: "Сирні кульки з малиновим соусом",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2022/08/syrni-kulky-z-malynovym-sousom.jpg",
    categoryId: 2,
  },
  {
    name: "Креветки темпура з соусом тартар",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/10/krevetky-tartar.jpg",
    categoryId: 2,
  },
  {
    name: "Батат з соусом тартар",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/10/batat-tartar.jpg",
    categoryId: 2,
  },
  {
    name: "Сир Брі фрі з малиновим соусом",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/camambert-fri.jpg",
    categoryId: 2,
  },
  {
    name: "Сирний чедер",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2022/08/syrnyj.png",
    categoryId: 2,
  },
  {
    name: "Цезаріо",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/03/czezarnovyj.jpg",
    categoryId: 3,
  },
  {
    name: "Сальмоне",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/03/salmonebez-rukoly.jpg",
    categoryId: 3,
  },
  {
    name: "Ді Фета",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/03/feta.jpg",
    categoryId: 3,
  },
  {
    name: "Ді Прошуто",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/03/proshutobez-rukoly.jpg",
    categoryId: 3,
  },
  {
    name: "Рів'єра",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2023/10/rivyera1.jpg",
    categoryId: 3,
  },
  {
    name: "Сіннабон з вишнею",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/sinn-cher.jpg",
    categoryId: 4,
  },
  {
    name: "Сіннабон шоколадний",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/sinn-choc.jpg",
    categoryId: 4,
  },
  {
    name: "Сіннабон з карамеллю",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/sinn-caram.jpg",
    categoryId: 4,
  },
  {
    name: "Нормальні горішки",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/gorishky.jpg",
    categoryId: 4,
  },
  {
    name: "Андрут",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/03/andrut-1.jpg",
    categoryId: 4,
  },
  {
    name: "Баскський чізкейк",
    imageUrl:
      "https://la.ua/vinnytsya/wp-content/uploads/sites/2/2024/05/photo_2024-02-28_16-23-37-1.jpg",
    categoryId: 4,
  },
];
