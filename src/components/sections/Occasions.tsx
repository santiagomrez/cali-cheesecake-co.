import { occasions } from "@/data/occasions";
import { whatsappUrl } from "@/lib/buildWhatsAppMessage";

export function Occasions() {
  return (
    <section id="ocasiones" className="bg-crema py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="display-xl max-w-2xl text-[clamp(2.25rem,6vw,4rem)]">
          Para mesas de más de dos
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Si es para un grupo, escríbenos y armamos el tamaño y las salsas contigo antes de que
          pagues nada.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {occasions.map((occasion) => (
            <article key={occasion.id}>
              <img
                src={occasion.image}
                alt={occasion.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 font-display text-2xl font-semibold">{occasion.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {occasion.description}
              </p>
              <a
                href={whatsappUrl(occasion.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-sm border border-galleta px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
              >
                {occasion.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
