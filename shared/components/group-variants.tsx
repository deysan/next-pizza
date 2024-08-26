"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { pizzaSizes, pizzaTypes } from "../constants/pizza";

type Item = (typeof pizzaTypes)[number] | (typeof pizzaSizes)[number];

export type Variant<T extends Item> = T & {
  disabled?: boolean;
};

interface Props<T extends Item> {
  items: readonly Variant<T>[];
  onClick?: (value: Variant<T>["value"]) => void;
  value?: Variant<T>["value"];
  className?: string;
}

export const GroupVariants = <T extends Item>({
  items,
  onClick,
  className,
  value,
}: Props<T>) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-white shadow": item.value === value,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
