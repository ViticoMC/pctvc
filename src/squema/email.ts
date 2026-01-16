import z from "zod";

export const emailSqema = z.object({
  nombre: z.string().min(1, "Nombre requerido"),
  apellidos: z.string().optional(),
  correo: z
    .string()
    .email("Debe ser un email")
    .min(1, "El correo es requerido"),
  asunto: z.string().optional(),
  mensaje: z.string().min(1, "Mensaje requerido"),
});

export type email = z.infer<typeof emailSqema>;
