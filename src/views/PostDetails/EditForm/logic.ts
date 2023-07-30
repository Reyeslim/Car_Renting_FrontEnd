import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditPostInput } from '../../../models/Post'
import { updatePostById } from '../../../services/api/post'

const useLogic = (
  id: string,
  onEditComplete: (values: EditPostInput) => void
) => {
  const navigate = useNavigate()
  const handleEdit = useCallback(
    (values: EditPostInput) => {
      updatePostById(id, values)
      onEditComplete(values)
      navigate(`/posts/${id}`)
    },
    [navigate, onEditComplete, id]
  )

  return { handleEdit }
}

export default useLogic
