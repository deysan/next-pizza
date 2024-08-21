import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Ingredient } from "@prisma/client";

import { Button } from "../ui";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center bg-secondary rounded-lg h-[260px]">
          <img className="w-full object-cover" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            від <b>{price} грн</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Додати
          </Button>
        </div>
      </Link>
    </div>
  );
};
