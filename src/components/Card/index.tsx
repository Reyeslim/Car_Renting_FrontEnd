import { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../Image'
import {
  Button,
  Container,
  Content,
  Header,
  Info,
  InfoController,
  Title,
  AdditionalController,
  Bold,
} from './styles'
import type { Props } from './types'
import { getPostById } from '../../services/api/post'

const Card: FC<Props> = ({ post, onRemove }) => {
  const navigate = useNavigate()

  const handleGoToDetails = useCallback(async () => {
    await getPostById(post.id)
    navigate(`/posts/${post.id}`)
  }, [post.id, navigate])

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={handleGoToDetails}>Details</Button>
          <Button onClick={() => onRemove(post.id)}>Remove</Button>
        </Header>
        <InfoController>
          <Image src="/car.png" alt="the car for rent" />
          <AdditionalController>
            <Title>{post.name}</Title>
            <Info>
              <Bold>Days available: </Bold>
              {post.availableTimes.join(`, `)}
            </Info>
            <Info>
              <Bold>Gearbox type: </Bold>
              {post.gearBox}
            </Info>
            <Info></Info>
          </AdditionalController>
        </InfoController>
      </Content>
    </Container>
  )
}

export default memo(Card)
