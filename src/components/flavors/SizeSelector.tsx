import type { Size } from "@/types";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";

interface Props {
  sizes: Size[];
  activeId: string;
  onChange: (sizeId: string) => void;
}

export function SizeSelector({ sizes, activeId, onChange }: Props) {
  return (
    <fieldset className="space-y-2">
      <legend className="mb-2 text-sm font-medium">Tamaño</legend>
      {sizes.map((size) => {
        const selected = size.id === activeId;
        return (
          <label
            key={size.id}
            className={cn(
              "flex cursor-pointer items-start justify-between gap-4 rounded-sm border p-3 transition-colors",
              selected ? "border-primary bg-muted" : "border-border hover:border-galleta",
            )}
          >
            <span className="flex items-start gap-3">
              <input
                type="radio"
                name="size"
                value={size.id}
                checked={selected}
                onChange={() => onChange(size.id)}
                className="mt-1 accent-[var(--primary)]"
              />
              <span>
                <span className="block text-sm font-medium">{size.name}</span>
                <span className="block text-xs text-muted-foreground">{size.detail}</span>
              </span>
            </span>
            <span className={cn("text-sm", selected ? "font-medium text-primary" : "")}>
              {formatPrice(size.price)}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
}
