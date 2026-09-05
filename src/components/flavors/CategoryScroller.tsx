import type { Category, CategoryId } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  categories: Category[];
  active: CategoryId;
  onChange: (id: CategoryId) => void;
}

export function CategoryScroller({ categories, active, onChange }: Props) {
  return (
    <div className="snap-row -mx-5 gap-2 px-5" role="tablist" aria-label="Categorías de sabor">
      {categories.map((category) => {
        const selected = category.id === active;
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category.id)}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm transition-colors",
              selected
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground hover:border-galleta",
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
