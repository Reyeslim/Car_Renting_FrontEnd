import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Container, Button, Cards } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { getPosts, removePostById } from '../../services/api/post'
import { Post } from '../../models/Post'
import { useNavigate } from 'react-router-dom'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const [posts, setPosts] = useState<Post[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleGoToCreateForm = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const fetchPosts = useCallback(async () => {
    const postsList = await getPosts()
    setPosts(postsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleRemovePost = useCallback(
    async (postId: string) => {
      await removePostById(postId)
    },
    [removePostById]
  )

  if (isLoading) {
    return <div>Now downloading...</div>
  }

  return (
    <Container>
      <Header onLogout={onLogout} />
      <Button onClick={handleGoToCreateForm}>Create new post</Button>
      <Cards>
        {posts?.map((post, index) => (
          <Card key={index} post={post} onRemove={handleRemovePost} />
        ))}
      </Cards>
      <Footer />
    </Container>
  )
}

export default memo(Dashboard)
