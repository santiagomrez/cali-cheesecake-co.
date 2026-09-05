import type { DeliveryDetails } from "@/types";
import { timeSlots } from "@/data/delivery";
import type { DeliveryErrors } from "./useDeliveryForm";

interface Props {
  values: DeliveryDetails;
  errors: DeliveryErrors;
  onChange: (field: keyof DeliveryDetails, value: string) => void;
}

const fieldClass =
  "w-full rounded-sm border bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground/70";

export function DeliveryForm({ values, errors, onChange }: Props) {
  const field = (
    id: keyof DeliveryDetails,
    label: string,
    type = "text",
    placeholder?: string,
  ) => (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={values[id]}
        placeholder={placeholder}
        aria-invalid={Boolean(errors[id])}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        onChange={(event) => onChange(id, event.target.value)}
        className={`mt-1.5 ${fieldClass}`}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-primary">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <div className="space-y-5">
      {field("name", "Quién recibe", "text", "Ana Muñoz")}
      {field("phone", "Celular", "tel", "310 000 0000")}
      {field("address", "Dirección", "text", "Cra 34 #5-21, apto 402")}
      {field("neighborhood", "Barrio", "text", "San Fernando")}
      {field("date", "Fecha de entrega", "date")}

      <div>
        <label htmlFor="timeSlot" className="text-sm font-medium">
          Franja horaria
        </label>
        <select
          id="timeSlot"
          value={values.timeSlot}
          aria-invalid={Boolean(errors.timeSlot)}
          aria-describedby={errors.timeSlot ? "timeSlot-error" : undefined}
          onChange={(event) => onChange("timeSlot", event.target.value)}
          className={`mt-1.5 ${fieldClass}`}
        >
          <option value="">Elige una franja</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.timeSlot && (
          <p id="timeSlot-error" className="mt-1.5 text-xs text-primary">
            {errors.timeSlot}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="text-sm font-medium">
          Notas para el domiciliario (opcional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={values.notes}
          placeholder="Portería no recibe, llamar al llegar"
          onChange={(event) => onChange("notes", event.target.value)}
          className={`mt-1.5 ${fieldClass}`}
        />
      </div>
    </div>
  );
}
