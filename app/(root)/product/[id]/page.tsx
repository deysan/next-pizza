import { notFound } from "next/navigation";

import { prisma } from "@/prisma/prisma-client";
import {
  Container,
  GroupVariants,
  PizzaImage,
  Title,
} from "@/shared/components";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={20} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">Lorem ipsum dolor sit amet</p>

          <div className="flex flex-col gap-4 mt-5">
            <GroupVariants
              items={[
                {
                  name: "Маленька",
                  value: "1",
                },
                {
                  name: "Середня",
                  value: "2",
                },
                {
                  name: "Велика",
                  value: "3",
                  disabled: true,
                },
              ]}
              value={"2"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
