export type CategoryId = "todos" | "frutales" | "chocolate";

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Size {
  id: string;
  name: string;
  price: number;
  detail: string;
  /** Requiere anticipación de un día para producción. */
  needsLeadTime: boolean;
}

export interface Flavor {
  id: string;
  name: string;
  category: Exclude<CategoryId, "todos">;
  /** Descriptor corto de textura o ingrediente. */
  descriptor: string;
  description: string;
  image: string;
  alt: string;
  /** Ids de tamaños disponibles para este sabor. */
  sizeIds: string[];
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  ctaLabel: string;
  whatsappMessage: string;
}

export interface CartItem {
  /** flavorId + sizeId + dedicatoria normalizada. */
  key: string;
  flavorId: string;
  flavorName: string;
  sizeId: string;
  sizeName: string;
  unitPrice: number;
  quantity: number;
  dedication: string;
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface OrderTotals {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export interface Order {
  items: CartItem[];
  delivery: DeliveryDetails;
  totals: OrderTotals;
}
