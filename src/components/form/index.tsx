import { useForm } from 'react-hook-form'
import type { FormType } from '../../types/forms.types'
import FormField from '../form-field'
import { UserSchema } from '../../types/schema'
import { zodResolver } from '@hookform/resolvers/zod'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm<FormType>({ resolver: zodResolver(UserSchema) })

  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-y-2 place-items-center"
    >
      <FormField
        placeholder="Name"
        name="name"
        register={register}
        error={errors.name}
      />
      <FormField
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <FormField
        placeholder="Country"
        name="country"
        register={register}
        error={errors.country}
      />
      <FormField
        placeholder="City"
        name="city"
        register={register}
        error={errors.city}
      />
      <FormField
        placeholder="Phone number"
        name="phoneNumber"
        register={register}
        error={errors.phoneNumber}
      />
      <FormField
        placeholder="Password"
        name="password"
        register={register}
        error={errors.password}
      />
      <FormField
        placeholder="Confirm password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
      />
      <button className="bg-blue-500 w-fit rounded-md px-8 py-2 mt-2 self-center duration-500 hover:bg-blue-400">
        Submit
      </button>
    </form>
  )
}

export default Form
