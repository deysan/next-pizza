import { ProductCard } from "./product-card";
import { Title } from "./title";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            name="Маргарита"
            imageUrl="https://nostrra-pizzza.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdyka4vajb%2Fimage%2Fupload%2Fv1698576734%2Fhatamagnata%2Fpizzas%2Fapjk5kmtc0u9vrenykqz.png&w=640&q=75"
            price={390}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
