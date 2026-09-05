export const deliveryFee = 12000;

export const deliveryHours = "8:00 a. m. a 5:00 p. m., todos los días";

export const timeSlots = [
  "8:00 a. m. – 10:00 a. m.",
  "10:00 a. m. – 12:00 m.",
  "12:00 m. – 2:00 p. m.",
  "2:00 p. m. – 5:00 p. m.",
] as const;

export const leadTimeNote =
  "Solo el cheesecake en forma de corazón necesita anticipación: pídelo con un día de antelación. Lo demás lo coordinamos para el mismo día según disponibilidad.";

export const paymentMethods = ["Efectivo al recibir", "Transferencia bancaria"];

/**
 * TODO: confirmar el listado exacto de barrios/comunas cubiertas.
 * Por ahora se muestra cobertura general dentro del perímetro urbano de Cali.
 */
export const coverage = [
  {
    zone: "Sur",
    detail: "Ciudad Jardín, Pance, Valle del Lili, Caney, Limonar, Ciudad Córdoba",
  },
  {
    zone: "Norte",
    detail: "Granada, Centenario, Versalles, La Flora, Chipichape, Menga",
  },
  {
    zone: "Oeste",
    detail: "San Antonio, Santa Teresita, Normandía, Santa Rita, Arboledas",
  },
  {
    zone: "Oriente y centro",
    detail: "San Fernando, El Templete, Alameda, El Prado, La Base",
  },
];
