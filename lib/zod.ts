
import { z } from 'zod';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const EmployeeSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(5),
  phone: z.string().min(11),
  shift: z.string().min(5)
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name must be more than 1 character!"),
  email: z.string().email("Invalid email"),
  password: z.string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  ConfirmPassword: z.string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password does not match",
  path: ["ConfirmPassword"],
});

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string()
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
});

export const MenuSchema = z.object({
  nama: z
    .string()
    .min(1, { message: "Nama menu wajib diisi" })
    .max(100, { message: "Nama menu terlalu panjang" }),



  harga: z
    .string()
    .min(1, { message: "Harga wajib diisi" })
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: "Harga harus berupa angka"
    })
    .refine((val) => val >= 0, {
      message: "Harga tidak boleh negatif"
    }),

  keterangan: z
    .string()
    .min(1, { message: "Keterangan wajib diisi" })
    .max(500, { message: "Keterangan terlalu panjang" }),

    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

// This type can be used for TypeScript type safety
export type MenuSchemaType = z.infer<typeof MenuSchema>;