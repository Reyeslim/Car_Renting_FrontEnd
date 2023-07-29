import { FC, memo } from 'react'
import {
  Container,
  Form,
  GeneralContainer,
  Input,
  InputController,
  Submit,
  Title,
} from './styles'

const Login: FC = () => {
  return (
    <GeneralContainer>
      <Container>
        <Form>
          <Title>Login</Title>

          <InputController>
            <Input id="outlined-basic" label="Email" variant="outlined" />
          </InputController>

          <InputController>
            <Input
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
            />
          </InputController>

          <Submit type="submit" value="Sign up" />
        </Form>
      </Container>
    </GeneralContainer>
  )
}

export default memo(Login)
