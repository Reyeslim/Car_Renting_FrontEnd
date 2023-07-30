import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../services/api/post'

const useLogic = () => {
  const navigate = useNavigate()
  const handleCreate = useCallback(
    (values: {
      vehicle: string
      name: string
      brand: string
      model: string
      plateNumber: string
      km: string
      carSeats: string
      fuel: string
      gearBox: string
      doors: string
      availableTimes: Array<string>
    }) => {
      createPost(values)
      navigate('/dashboard')
    },
    [navigate]
  )

  return { handleCreate }
}

export default useLogic
