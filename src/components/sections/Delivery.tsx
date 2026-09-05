import {
  coverage,
  deliveryFee,
  deliveryHours,
  leadTimeNote,
  paymentMethods,
} from "@/data/delivery";
import { formatPrice } from "@/lib/formatPrice";

export function Delivery() {
  return (
    <section id="domicilios" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="display-xl max-w-2xl text-[clamp(2.25rem,6vw,4rem)]">
          Cómo llega a tu casa
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-sm font-medium tracking-normal">Zonas de Cali que cubrimos</h3>
            <dl className="mt-4 divide-y border-t border-b">
              {coverage.map((zone) => (
                <div key={zone.zone} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-display text-lg font-semibold">{zone.zone}</dt>
                  <dd className="text-sm text-muted-foreground">{zone.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted-foreground">
              ¿No ves tu barrio? Escríbenos y confirmamos antes de que hagas el pedido.
            </p>
          </div>

          <div className="space-y-6 rounded-xl bg-crema p-6">
            <div>
              <h3 className="text-sm font-medium">Horario de entrega</h3>
              <p className="mt-1 text-sm text-muted-foreground">{deliveryHours}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Anticipación</h3>
              <p className="mt-1 text-sm text-muted-foreground">{leadTimeNote}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Domicilio</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatPrice(deliveryFee)} en toda la ciudad.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Pago</h3>
              <ul className="mt-1 text-sm text-muted-foreground">
                {paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
