import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/checkout/CheckoutPage";

const title = "Tu pedido — La Casa del Cheesecake Cali";
const description =
  "Revisa tus cheesecakes, escoge tamaño y franja de entrega en Cali, y envía el pedido por WhatsApp.";

export const Route = createFileRoute("/pedido")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});
