import { Link, useRouterState } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#sabores", label: "Sabores" },
  { href: "/#ocasiones", label: "Ocasiones" },
  { href: "/#domicilios", label: "Domicilios" },
];

export function Header() {
  const { count } = useCart();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || !overHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid ? "border-b bg-background/95 backdrop-blur" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <Link
          to="/"
          className={cn(
            "font-display text-lg leading-tight font-semibold transition-colors",
            solid ? "text-foreground" : "text-background",
          )}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Secciones">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                solid ? "text-foreground hover:text-primary" : "text-background/90 hover:text-background",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          to="/pedido"
          className={cn(
            "relative inline-flex size-10 items-center justify-center rounded-sm transition-colors",
            solid ? "text-foreground hover:bg-muted" : "text-background hover:bg-background/15",
          )}
          aria-label={`Ver pedido, ${count} ítems`}
        >
          <ShoppingBag className="size-5" aria-hidden="true" />
          {count > 0 && (
            <span className="absolute top-1 right-1 min-w-4 rounded-full bg-primary px-1 text-[11px] leading-4 font-medium text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
