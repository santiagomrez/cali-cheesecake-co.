import type { CartItem } from "@/types";

export type CartAction =
  | { type: "add"; item: Omit<CartItem, "key"> }
  | { type: "setQuantity"; key: string; quantity: number }
  | { type: "changeSize"; key: string; sizeId: string; sizeName: string; unitPrice: number }
  | { type: "remove"; key: string }
  | { type: "clear" }
  | { type: "hydrate"; items: CartItem[] };

export const makeKey = (flavorId: string, sizeId: string, dedication: string): string =>
  `${flavorId}__${sizeId}__${dedication.trim().toLowerCase()}`;

function mergeDuplicates(items: CartItem[]): CartItem[] {
  const map = new Map<string, CartItem>();
  items.forEach((item) => {
    const existing = map.get(item.key);
    if (existing) {
      map.set(item.key, { ...existing, quantity: existing.quantity + item.quantity });
    } else {
      map.set(item.key, item);
    }
  });
  return [...map.values()];
}

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "add": {
      const key = makeKey(action.item.flavorId, action.item.sizeId, action.item.dedication);
      return mergeDuplicates([...state, { ...action.item, key }]);
    }
    case "setQuantity":
      return state
        .map((item) => (item.key === action.key ? { ...item, quantity: action.quantity } : item))
        .filter((item) => item.quantity > 0);
    case "changeSize": {
      const target = state.find((item) => item.key === action.key);
      if (!target) return state;
      const updated: CartItem = {
        ...target,
        sizeId: action.sizeId,
        sizeName: action.sizeName,
        unitPrice: action.unitPrice,
        key: makeKey(target.flavorId, action.sizeId, target.dedication),
      };
      return mergeDuplicates(state.map((item) => (item.key === action.key ? updated : item)));
    }
    case "remove":
      return state.filter((item) => item.key !== action.key);
    case "clear":
      return [];
    default:
      return state;
  }
}
