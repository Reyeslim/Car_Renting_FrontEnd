import { FC, memo } from 'react'
import { Container, Title } from './styles'

const Header: FC = () => {
  return (
    <Container>
      <Title>RentCar</Title>
    </Container>
  )
}
export default memo(Header)
