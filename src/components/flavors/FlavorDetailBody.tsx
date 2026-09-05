import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import type { Flavor } from "@/types";
import { sizeById, sizes as allSizes } from "@/data/flavors";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/components/cart/CartProvider";
import { SizeSelector } from "./SizeSelector";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function FlavorDetailBody({ flavor }: { flavor: Flavor }) {
  const { dispatch } = useCart();
  const sizes = allSizes.filter((size) => flavor.sizeIds.includes(size.id));
  const [sizeId, setSizeId] = useState<string>(flavor.sizeIds[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [dedication, setDedication] = useState("");

  useEffect(() => {
    setSizeId(flavor.sizeIds[0] ?? "");
    setQuantity(1);
    setDedication("");
  }, [flavor.id, flavor.sizeIds]);

  const size = sizeById(sizeId) ?? sizes[0];
  if (!size) return null;
  const total = size.price * quantity;

  const add = () => {
    dispatch({
      type: "add",
      item: {
        flavorId: flavor.id,
        flavorName: flavor.name,
        sizeId: size.id,
        sizeName: size.name,
        unitPrice: size.price,
        quantity,
        dedication,
      },
    });
    toast.success(`${quantity} × ${flavor.name} ${size.name.toLowerCase()} va en tu pedido`);
  };

  return (
    <div className="space-y-6 px-5 pt-2 pb-8">
      <img
        src={flavor.image}
        alt={flavor.alt}
        width={768}
        height={1024}
        loading="lazy"
        className="aspect-[4/3] w-full rounded-xl object-cover"
      />
      <p className="text-sm leading-relaxed text-muted-foreground">{flavor.description}</p>

      <SizeSelector sizes={sizes} activeId={sizeId} onChange={setSizeId} />

      {size.needsLeadTime && (
        <p className="rounded-sm bg-muted p-3 text-xs">
          Este se hornea a pedido: escógelo con un día de anticipación.
        </p>
      )}

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Cantidad</span>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Quitar una unidad"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus className="size-4" />
          </Button>
          <span className="w-6 text-center tabular-nums">{quantity}</span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Agregar una unidad"
            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="dedicatoria" className="text-sm font-medium">
          Dedicatoria (opcional)
        </label>
        <Textarea
          id="dedicatoria"
          value={dedication}
          maxLength={60}
          rows={2}
          placeholder="Feliz cumple, Ana"
          onChange={(event) => setDedication(event.target.value)}
        />
      </div>

      <div className="sticky bottom-0 -mx-5 border-t bg-background px-5 pt-4 pb-1">
        <Button type="button" onClick={add} className="w-full py-6 text-base">
          Agregar al pedido · {formatPrice(total)}
        </Button>
      </div>
    </div>
  );
}
