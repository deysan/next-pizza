import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Піци"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 2,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 3,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 4,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 5,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 6,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 7,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 8,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                  {
                    id: 9,
                    name: "Маргарита",
                    price: 390,
                    imageUrl:
                      "https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75",
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
