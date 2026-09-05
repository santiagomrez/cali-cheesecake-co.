import { useState } from "react";
import type { DeliveryDetails } from "@/types";

export type DeliveryErrors = Partial<Record<keyof DeliveryDetails, string>>;

export const emptyDelivery: DeliveryDetails = {
  name: "",
  phone: "",
  address: "",
  neighborhood: "",
  date: "",
  timeSlot: "",
  notes: "",
};

export function validateDelivery(values: DeliveryDetails): DeliveryErrors {
  const errors: DeliveryErrors = {};
  if (values.name.trim().length < 3) {
    errors.name = "Escribe el nombre de quien recibe, así lo confirmamos al llegar.";
  }
  if (!/^[0-9\s+]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Necesitamos un celular de 10 dígitos para avisarte cuando salga el domicilio.";
  }
  if (values.address.trim().length < 6) {
    errors.address = "Falta la dirección completa: calle, número, torre o apartamento.";
  }
  if (values.neighborhood.trim().length < 3) {
    errors.neighborhood = "Dinos el barrio para calcular la ruta del domiciliario.";
  }
  if (!values.date) {
    errors.date = "Elige el día de entrega.";
  }
  if (!values.timeSlot) {
    errors.timeSlot = "Elige una franja horaria dentro de nuestro horario de entregas.";
  }
  return errors;
}

export function useDeliveryForm() {
  const [values, setValues] = useState<DeliveryDetails>(emptyDelivery);
  const [errors, setErrors] = useState<DeliveryErrors>({});

  const setField = (field: keyof DeliveryDetails, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next = validateDelivery(values);
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return { values, errors, setField, validate };
}
