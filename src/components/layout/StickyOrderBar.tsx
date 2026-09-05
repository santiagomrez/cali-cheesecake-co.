import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";

export function StickyOrderBar() {
  const { count, totals } = useCart();
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = pastHero && count > 0;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t bg-background/98 p-3 backdrop-blur transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Link
        to="/pedido"
        tabIndex={visible ? 0 : -1}
        className="flex items-center justify-between rounded-sm bg-primary px-4 py-3 text-primary-foreground"
      >
        <span className="text-sm">
          {count} {count === 1 ? "ítem" : "ítems"} · {formatPrice(totals.total)}
        </span>
        <span className="font-medium">Ir al pedido</span>
      </Link>
    </div>
  );
}
