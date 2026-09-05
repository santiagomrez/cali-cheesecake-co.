import { Link } from "@tanstack/react-router";
import { useCart } from "@/components/cart/CartProvider";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { DeliveryForm } from "./DeliveryForm";
import { useDeliveryForm } from "./useDeliveryForm";
import { buildWhatsAppMessage, whatsappUrl } from "@/lib/buildWhatsAppMessage";
import { leadTimeNote, paymentMethods } from "@/data/delivery";

export function CheckoutPage() {
  const { items, totals } = useCart();
  const { values, errors, setField, validate } = useDeliveryForm();

  const send = () => {
    if (!validate()) {
      document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }
    const text = buildWhatsAppMessage({ items, delivery: values, totals });
    window.open(whatsappUrl(text), "_blank", "noopener");
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1200px] px-5 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold">Tu pedido está vacío</h1>
        <p className="mt-3 text-muted-foreground">
          Escoge un sabor y un tamaño y vuelve acá para completar la entrega.
        </p>
        <Link
          to="/"
          hash="sabores"
          className="mt-6 inline-flex rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground"
        >
          Ver los sabores
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-5 pt-28 pb-24">
      <h1 className="display-xl text-[clamp(2rem,5vw,3.25rem)]">Tu pedido</h1>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <ul className="border-t">
            {items.map((item) => (
              <CartItemRow key={item.key} item={item} />
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl font-semibold">Datos de entrega</h2>
          <div className="mt-6">
            <DeliveryForm values={values} errors={errors} onChange={setField} />
          </div>
        </div>

        <aside className="h-fit rounded-xl bg-crema p-6 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Resumen</h2>
          <div className="mt-4">
            <OrderSummary totals={totals} />
          </div>
          <button
            type="button"
            onClick={send}
            className="mt-6 w-full rounded-sm bg-primary px-6 py-4 font-medium text-primary-foreground transition-colors hover:bg-[oklch(0.42_0.16_14.5)]"
          >
            Enviar pedido por WhatsApp
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Confirmamos disponibilidad por WhatsApp y ahí acordamos el pago:{" "}
            {paymentMethods.join(" o ").toLowerCase()}.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">{leadTimeNote}</p>
        </aside>
      </div>
    </div>
  );
}
