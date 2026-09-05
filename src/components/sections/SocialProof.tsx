import { site } from "@/data/site";
import { flavors } from "@/data/flavors";

const testimonials = [
  {
    quote:
      "Pedí el grande con cuatro salsas para el cumpleaños de mi mamá y todos repitieron. El de agraz se acabó primero.",
    author: "Laura, Ciudad Jardín",
  },
  {
    quote:
      "Llegó a la hora que dijeron, frío y bien empacado. Es el único postre que pido para reuniones de la oficina.",
    author: "Andrés, Granada",
  },
];

// TODO: reemplazar por fotos reales de clientes tomadas de @cheesecakecali.
const gallery = flavors.slice(0, 6);

export function SocialProof() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="display-xl max-w-2xl text-[clamp(2.25rem,6vw,4rem)]">
          Lo que sale de la cocina
        </h2>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm text-primary underline underline-offset-4"
        >
          Ver más en @{site.instagram}
        </a>

        <div className="mt-10 columns-2 gap-4 md:columns-3">
          {gallery.map((flavor, index) => (
            <img
              key={flavor.id}
              src={flavor.image}
              alt={flavor.alt}
              width={768}
              height={1024}
              loading="lazy"
              className="mb-4 w-full rounded-xl object-cover"
              style={{ aspectRatio: index % 3 === 1 ? "3 / 4" : "1 / 1" }}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 bg-crema py-14">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author}>
              <p className="font-display text-xl leading-snug">{testimonial.quote}</p>
              <footer className="mt-3 text-sm text-muted-foreground">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
