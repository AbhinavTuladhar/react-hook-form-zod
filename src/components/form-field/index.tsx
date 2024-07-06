import { FC } from 'react'
import { FormFieldProps } from '../../types/forms.types'

const FormField: FC<FormFieldProps> = ({ error, name, register, ...props }) => {
  return (
    <>
      <input
        {...props}
        {...register(name)}
        className="border-b border-blue-400 px-4"
      />
      {error && <span> {error.message} </span>}
    </>
  )
}

export default FormField
