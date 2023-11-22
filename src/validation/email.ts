import * as z from "zod";

export const emailSchema = z.object({
  email: z.string().email({
    message: "Insira um endereço de e-mail válido.",
  }),
});
