import { Minus, Plus, X } from "lucide-react";
import type { CartItem } from "@/types";
import { sizes as allSizes, sizeById } from "@/data/flavors";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "./CartProvider";

export function CartItemRow({ item }: { item: CartItem }) {
  const { dispatch } = useCart();

  return (
    <li className="flex gap-4 border-b py-5">
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{item.flavorName}</h3>
          <span className="text-sm tabular-nums">
            {formatPrice(item.unitPrice * item.quantity)}
          </span>
        </div>

        <label className="mt-2 block">
          <span className="sr-only">Tamaño de {item.flavorName}</span>
          <select
            value={item.sizeId}
            onChange={(event) => {
              const next = sizeById(event.target.value);
              if (!next) return;
              dispatch({
                type: "changeSize",
                key: item.key,
                sizeId: next.id,
                sizeName: next.name,
                unitPrice: next.price,
              });
            }}
            className="w-full rounded-sm border bg-background px-3 py-2 text-sm"
          >
            {allSizes.map((size) => (
              <option key={size.id} value={size.id}>
                {size.name} — {formatPrice(size.price)}
              </option>
            ))}
          </select>
        </label>

        {item.dedication.trim() && (
          <p className="mt-2 text-xs text-muted-foreground">
            Dedicatoria: “{item.dedication.trim()}”
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={`Quitar una unidad de ${item.flavorName}`}
              onClick={() =>
                dispatch({ type: "setQuantity", key: item.key, quantity: item.quantity - 1 })
              }
              className="inline-flex size-8 items-center justify-center rounded-sm border hover:border-galleta"
            >
              <Minus className="size-4" />
            </button>
            <span className="w-5 text-center tabular-nums">{item.quantity}</span>
            <button
              type="button"
              aria-label={`Agregar una unidad de ${item.flavorName}`}
              onClick={() =>
                dispatch({ type: "setQuantity", key: item.key, quantity: item.quantity + 1 })
              }
              className="inline-flex size-8 items-center justify-center rounded-sm border hover:border-galleta"
            >
              <Plus className="size-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => dispatch({ type: "remove", key: item.key })}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
          >
            <X className="size-3" aria-hidden="true" />
            Quitar
          </button>
        </div>
      </div>
    </li>
  );
}
