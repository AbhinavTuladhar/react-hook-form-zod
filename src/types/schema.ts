import { z, ZodType } from 'zod'
import { FormType } from './forms.types'

export const UserSchema: ZodType<FormType> = z
  .object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string({ required_error: 'This field is required.' }).email(),
    country: z.string({ required_error: 'This field is required.' }),
    city: z.string({ required_error: 'This field is required.' }),
    phoneNumber: z.string({ required_error: 'This field is required.' }),
    password: z
      .string()
      .min(8, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'The passwords do not match',
    path: ['confirmPassword'],
  })
