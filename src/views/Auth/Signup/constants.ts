import { number, object, string } from 'yup'
export const InitialValues = {
  email: '',
  firstName: '',
  lastName: '',
  age: 0,
  phone: 0,
  dni: '',
  password: '',
  rol: 'customer',
}

export const ValidationSchema = object({
  email: string()
    .email('not a valid email')
    .required('email is a required field'),
  firstName: string(),
  lastName: string(),
  age: number().positive().integer(),
  phone: number().positive().integer(),
  dni: string(),
  password: string()
    .required('password is a required field')
    .min(6, 'password must have at least 6 characters'),
  rol: string().required('rol is a required field'),
})
