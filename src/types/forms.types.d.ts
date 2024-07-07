import { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { z, ZodType } from 'zod'

// Contains all the form fields required in the form
export interface FormType {
  name: string
  email: string
  country: string
  city: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

// The interface of the custom input component
export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: ValueFieldNames
  register: UseFormRegister<FormType>
  error: FieldError | undefined
}

// Has the names of the fields in the form
export type ValueFieldNames = keyof FormType

export const UserSchema: ZodType<FormType> = z
  .object({
    name: z.string({ required_error: 'This field is required.' }),
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
