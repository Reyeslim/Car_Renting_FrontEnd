import { FC, memo } from 'react'
import {
  Container,
  Form,
  GeneralContainer,
  Input,
  InputController,
  Label,
  Submit,
  Title,
} from './styles'

const Signup: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <Form>
          <Title>Sign up</Title>

          <InputController>
            <Input type="text" placeholder="a" />
            <Label>Email</Label>
          </InputController>

          <InputController>
            <Input type="text" placeholder="a" />
            <Label>Username</Label>
          </InputController>

          <InputController>
            <Input type="text" placeholder="a" />
            <Label>Password</Label>
          </InputController>

          <InputController>
            <Input type="text" placeholder="a" />
            <Label>Confirm Password</Label>
          </InputController>

          <Submit type="submit" value="Sign up" />
        </Form>
      </Container>
    </GeneralContainer>
  )
}
export default memo(Signup)
