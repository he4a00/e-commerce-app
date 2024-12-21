import { z } from "zod";

export const CategoryValidation = z.object({
  categoryImage: z.string().nonempty(),
  categoryName: z.string().nonempty().min(2),
});
