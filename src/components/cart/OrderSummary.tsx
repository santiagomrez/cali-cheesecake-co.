import type { OrderTotals } from "@/types";
import { formatPrice } from "@/lib/formatPrice";

export function OrderSummary({ totals }: { totals: OrderTotals }) {
  return (
    <dl className="space-y-2 text-sm">
      <div className="flex justify-between">
        <dt className="text-muted-foreground">Subtotal</dt>
        <dd className="tabular-nums">{formatPrice(totals.subtotal)}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-muted-foreground">Domicilio</dt>
        <dd className="tabular-nums">{formatPrice(totals.deliveryFee)}</dd>
      </div>
      <div className="flex justify-between border-t pt-3 text-base font-medium">
        <dt>Total</dt>
        <dd className="tabular-nums">{formatPrice(totals.total)}</dd>
      </div>
    </dl>
  );
}
