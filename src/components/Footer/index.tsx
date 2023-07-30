import { FC, memo } from 'react'
import { Container, Content, Text } from './styles'

const Footer: FC = () => {
  return (
    <Container>
      <Content>
        <Text>© 2023 RentCar</Text>
      </Content>
    </Container>
  )
}

export default memo(Footer)
