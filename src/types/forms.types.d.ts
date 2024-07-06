import { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export interface FormType {
  name: string
  email: string
  country: string
  city: string
  phoneNumber: string
}

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: ValueFieldNames
  register: UseFormRegister<FormType>
  error: FieldError | undefined
}

export type ValueFieldNames = keyof FormType
