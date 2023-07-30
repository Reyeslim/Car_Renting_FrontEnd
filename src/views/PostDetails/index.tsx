import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
  ButtonContainer,
  Buttonfavorito,
  Buttoneditar,
  Buttoneliminar,
} from './styles'
import Footer from '../../components/Footer'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Post, EditPostInput } from '../../models/Post'
import BackArrow from '../../components/Back'
import FormDetails from './EditForm'
import { getPostById, removePostById } from '../../services/api/post'

const PostDetails: FC = () => {
  const { postId } = useParams()
  const navigate = useNavigate()
  const [queryData] = useSearchParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isFav, setIsFav] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(!!queryData.get('edit'))
  }, [queryData])

  const handleRemovePost = useCallback(
    async (id: string) => {
      if (postId) {
        await removePostById(id)
        navigate('/dashboard')
      }
    },
    [postId, navigate]
  )

  const handleGoToEditForm = () => {
    navigate(`/posts/${postId}?edit=true`)
  }

  const handleOnCompleteEdition = useCallback(
    (values: EditPostInput) => {
      const editedPost = { ...post, ...values } as Post
      setPost(editedPost)
    },
    [post]
  )
  if (!post) {
    return <div>ERROR 404 NOT FOUND</div>
  }

  if (isEdit) {
    return (
      <FormDetails
        onEditComplete={handleOnCompleteEdition}
        id={post.id}
        initialValues={{
          vehicle: post.vehicle,
          name: post.name,
          brand: post.brand,
          model: post.model,
          plateNumber: post.plateNumber,
          km: post.km,
          carSeats: post.carSeats,
          fuel: post.fuel,
          gearBox: post.gearBox,
          doors: post.doors,
          availableTimes: post.availableTimes,
        }}
      />
    )
  }
  return (
    <DetailsContainer>
      <DetailsContent>
        <ButtonContainer>
          <BackArrow />
          <Buttoneditar onClick={handleGoToEditForm}>Edit</Buttoneditar>
          {/* <Buttonfavorito onClick={handleToggleFavorites}> */}
          {isFav ? 'Remove Fav' : 'Add Fav'}
          {/* </Buttonfavorito> */}
          <Buttoneliminar onClick={() => handleRemovePost(post.id)}>
            Delete
          </Buttoneliminar>
        </ButtonContainer>
        <DetailsTitle>{post.name}</DetailsTitle>
        <DetailsExplanation>{post.brand}</DetailsExplanation>
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(PostDetails)
