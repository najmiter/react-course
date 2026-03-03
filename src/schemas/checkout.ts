import z from 'zod';

export const PAYMENT_METHODS = ['cod', 'credit', 'bit-coin'] as const;

export const checkoutSchema = z.object({
  fullName: z.string().min(3, 'Full name must be 3 or more characters'),
  email: z.email({ error: 'Please enter a valid email' }),
  total: z.number().positive({ error: 'Total must be greater than 1' }),
  paymentMethod: z.enum(PAYMENT_METHODS),
});

export type CheckoutSchemaFormData = z.infer<typeof checkoutSchema>;
