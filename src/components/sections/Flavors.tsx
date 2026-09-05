import { useMemo, useState } from "react";
import type { CategoryId, Flavor } from "@/types";
import { categories, flavors } from "@/data/flavors";
import { CategoryScroller } from "@/components/flavors/CategoryScroller";
import { FlavorCard } from "@/components/flavors/FlavorCard";
import { FlavorDetailPanel } from "@/components/flavors/FlavorDetailPanel";

export function Flavors() {
  const [category, setCategory] = useState<CategoryId>("todos");
  const [selected, setSelected] = useState<Flavor | null>(null);

  const visible = useMemo(
    () => (category === "todos" ? flavors : flavors.filter((f) => f.category === category)),
    [category],
  );

  return (
    <section id="sabores" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="display-xl max-w-2xl text-[clamp(2.25rem,6vw,4rem)]">
          Escoge la salsa. El queso siempre es el mismo.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Horneamos una sola receta de cheesecake y sobre ella va la fruta. En los tamaños grandes
          puedes repartir varias salsas en la misma torta.
        </p>

        <div className="mt-10">
          <CategoryScroller categories={categories} active={category} onChange={setCategory} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {visible.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <FlavorDetailPanel flavor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
