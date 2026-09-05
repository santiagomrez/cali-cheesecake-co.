import type { Flavor } from "@/types";
import { minPrice } from "@/data/flavors";
import { formatPrice } from "@/lib/formatPrice";

interface Props {
  flavor: Flavor;
  onOpen: (flavor: Flavor) => void;
}

export function FlavorCard({ flavor, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(flavor)}
      className="group block w-full text-left"
      aria-label={`Ver ${flavor.name}`}
    >
      <div className="overflow-hidden rounded-xl bg-muted">
        <img
          src={flavor.image}
          alt={flavor.alt}
          width={768}
          height={1024}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl leading-tight font-semibold">{flavor.name}</h3>
        <span className="text-sm text-muted-foreground">
          desde {formatPrice(minPrice(flavor))}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{flavor.descriptor}</p>
    </button>
  );
}
