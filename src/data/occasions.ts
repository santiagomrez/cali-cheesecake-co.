import type { Occasion } from "@/types";

import cumple from "@/assets/ocasion-cumple.jpg";
import corporativo from "@/assets/ocasion-corporativo.jpg";
import eventos from "@/assets/ocasion-eventos.jpg";

export const occasions: Occasion[] = [
  {
    id: "cumpleanos",
    title: "Cumpleaños",
    description:
      "Un grande alcanza para 10 a 12 personas y puedes repartirlo en hasta 4 salsas, así nadie se queda con el sabor que no le gusta.",
    image: cumple,
    alt: "Cheesecake de frutos rojos con velas sobre una mesa de cumpleaños",
    ctaLabel: "Cotizar un cumpleaños",
    whatsappMessage:
      "Hola, quiero un cheesecake para un cumpleaños. Somos ___ personas y la fecha es ___.",
  },
  {
    id: "corporativo",
    title: "Corporativo",
    description:
      "Porciones circulares individuales, empacadas una por una, para reuniones y celebraciones de oficina. Desde 10 unidades coordinamos entrega en una sola franja.",
    image: corporativo,
    alt: "Bandeja de porciones individuales de cheesecake en una mesa de oficina",
    ctaLabel: "Pedir para la oficina",
    whatsappMessage:
      "Hola, necesito cheesecake para un evento de oficina. Somos ___ personas y sería el ___.",
  },
  {
    id: "eventos",
    title: "Aniversarios y detalles",
    description:
      "El corazón personal para un detalle de dos y el corazón grande para aniversarios. Ambos se piden con un día de anticipación y van con dedicatoria.",
    image: eventos,
    alt: "Cheesecake en forma de corazón con salsa de fresa sobre una mesa",
    ctaLabel: "Encargar un corazón",
    whatsappMessage:
      "Hola, quiero encargar un cheesecake en forma de corazón para el ___.",
  },
];
