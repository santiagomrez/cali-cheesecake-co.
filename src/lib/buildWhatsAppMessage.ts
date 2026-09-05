import type { Order } from "@/types";
import { formatPrice } from "./formatPrice";
import { site } from "@/data/site";

/** Arma el texto plano del pedido. No sabe nada de React ni del DOM. */
export function buildWhatsAppMessage(order: Order): string {
  const { items, delivery, totals } = order;

  const lines: string[] = [];
  lines.push(`Hola ${site.name}, quiero hacer este pedido:`);
  lines.push("");

  items.forEach((item) => {
    lines.push(
      `• ${item.quantity} × ${item.flavorName} — ${item.sizeName} · ${formatPrice(
        item.unitPrice * item.quantity,
      )}`,
    );
    if (item.dedication.trim()) {
      lines.push(`   Dedicatoria: "${item.dedication.trim()}"`);
    }
  });

  lines.push("");
  lines.push(`Subtotal: ${formatPrice(totals.subtotal)}`);
  lines.push(`Domicilio: ${formatPrice(totals.deliveryFee)}`);
  lines.push(`Total: ${formatPrice(totals.total)}`);
  lines.push("");
  lines.push("Datos de entrega");
  lines.push(`Nombre: ${delivery.name}`);
  lines.push(`Teléfono: ${delivery.phone}`);
  lines.push(`Dirección: ${delivery.address}`);
  lines.push(`Barrio: ${delivery.neighborhood}`);
  lines.push(`Fecha: ${delivery.date}`);
  lines.push(`Franja: ${delivery.timeSlot}`);
  if (delivery.notes.trim()) {
    lines.push(`Notas: ${delivery.notes.trim()}`);
  }

  return lines.join("\n");
}

export function whatsappUrl(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
