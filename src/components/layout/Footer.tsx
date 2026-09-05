import { Instagram, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { deliveryHours } from "@/data/delivery";

export function Footer() {
  return (
    <footer className="border-t bg-background py-14">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Cheesecakes horneados por encargo en Cali. Solo domicilio, sin local.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-medium">Escríbenos</p>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            className="mt-2 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {site.whatsappDisplay}
          </a>
          <a
            href={site.instagramUrl}
            className="mt-2 flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <Instagram className="size-4" aria-hidden="true" />@{site.instagram}
          </a>
        </div>
        <div className="text-sm">
          <p className="font-medium">Entregas</p>
          <p className="mt-2 text-muted-foreground">{deliveryHours}</p>
          <p className="mt-1 text-muted-foreground">Cali, Valle del Cauca</p>
        </div>
      </div>
    </footer>
  );
}
