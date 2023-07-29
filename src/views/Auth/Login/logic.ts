import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/api/auth'
import { Props } from './types'

const useLogic = (onLogin: Props['onLogin']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login(values.email, values.password)
        onLogin()
        navigate('/dashboard')
      } catch (error) {
        console.log(error)
      }
    },
    [navigate, onLogin]
  )
  return { handleOnSubmit }
}

export default useLogic
