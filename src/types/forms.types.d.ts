import { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

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
