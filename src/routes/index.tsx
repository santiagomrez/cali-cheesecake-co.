import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Flavors } from "@/components/sections/Flavors";
import { Occasions } from "@/components/sections/Occasions";
import { SocialProof } from "@/components/sections/SocialProof";
import { Delivery } from "@/components/sections/Delivery";

const title = "La Casa del Cheesecake — cheesecakes a domicilio en Cali";
const description =
  "Cheesecakes horneados por encargo en Cali: agraz, mora, fresa, maracuyá, frutos rojos, lulo y chocolate. Porciones desde $13.000 y tortas para 10 a 12 personas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Flavors />
      <Occasions />
      <SocialProof />
      <Delivery />
    </main>
  );
}
