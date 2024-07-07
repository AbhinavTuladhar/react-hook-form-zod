import { FC } from 'react'
import { FormFieldProps } from '../../types/forms.types'

const FormField: FC<FormFieldProps> = ({ error, name, register, ...props }) => {
  return (
    <>
      <input
        {...props}
        {...register(name)}
        className="border-b border-blue-400 text-white focus:outline-none bg-transparent w-full px-1 py-1"
      />
      {error && <span> {error.message} </span>}
    </>
  )
}

export default FormField
