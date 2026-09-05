import hero from "@/assets/hero-corte.jpg";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden">
      <img
        src={hero}
        alt="Corte de cheesecake donde se ven la base de galleta, el cuerpo cremoso y la salsa de frutos rojos"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.243_0.016_47_/_0.55)]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pt-28 pb-16">
        <h1
          className="display-xl hero-rise max-w-3xl text-[clamp(2.75rem,9vw,5.5rem)] text-background"
          style={{ animationDelay: "80ms" }}
        >
          {site.name}
        </h1>
        <p
          className="hero-rise mt-5 max-w-xl text-base text-background/90 sm:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          {site.tagline}
        </p>
        <div className="hero-rise mt-8" style={{ animationDelay: "340ms" }}>
          <a
            href="#sabores"
            className="inline-flex items-center rounded-sm bg-primary px-7 py-4 font-medium text-primary-foreground transition-colors hover:bg-[oklch(0.42_0.16_14.5)]"
          >
            Armar mi pedido
          </a>
          <p className="mt-4 text-sm text-background/80">{site.heroUtility}</p>
        </div>
      </div>
    </section>
  );
}
