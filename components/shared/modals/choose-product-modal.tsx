"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ProductWithRelations } from "@/types/prisma";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.items[0].price}
        />
      </DialogContent>
    </Dialog>
  );
};
