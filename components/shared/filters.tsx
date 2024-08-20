"use client";

import { Input } from "@/components/ui/input";

import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useIngredients } from "@/hooks/use-ingredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text="Фільтрування" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можна збирати" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="5000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Інгредієнти"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
      />
    </div>
  );
};
