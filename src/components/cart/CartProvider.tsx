import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import type { CartItem, OrderTotals } from "@/types";
import { deliveryFee } from "@/data/delivery";
import { cartReducer, type CartAction } from "./cart-reducer";

const STORAGE_KEY = "lcdc.cart.v1";

interface CartValue {
  items: CartItem[];
  count: number;
  totals: OrderTotals;
  dispatch: (action: CartAction) => void;
}

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", items: JSON.parse(raw) as CartItem[] });
    } catch {
      /* carrito vacío si el storage no se puede leer */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* sin persistencia si el storage está bloqueado */
    }
  }, [items]);

  const value = useMemo<CartValue>(() => {
    const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    const fee = items.length > 0 ? deliveryFee : 0;
    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      totals: { subtotal, deliveryFee: fee, total: subtotal + fee },
      dispatch,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
