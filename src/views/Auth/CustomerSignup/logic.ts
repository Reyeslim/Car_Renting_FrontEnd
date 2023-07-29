import { useCallback } from 'react'
import { signup } from '../../../services/api/auth'
import { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      firstName: string
      lastName: string
      age: number
      phone: number
      dni: string
      rol: string
    }) => {
      try {
        await signup(
          values.email,
          values.password,
          values.firstName,
          values.lastName,
          values.age,
          values.phone,
          values.dni,
          values.rol
        )
        onSignup()
      } catch (error) {
        console.log(error)
      }
    },
    [onSignup]
  )

  return { handleOnSubmit }
}

export default useLogic
