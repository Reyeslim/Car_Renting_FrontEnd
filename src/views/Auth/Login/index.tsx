import { FC, memo } from 'react'
import {
  Container,
  Form,
  GeneralContainer,
  Info,
  Input,
  InputController,
  Link,
  Submit,
  Title,
  ButtonController,
} from './styles'
import { Props } from './types'
import useLogic from './logic'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)
  return (
    <GeneralContainer>
      <Container>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, handleSubmit, handleChange, values, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Login</Title>

              <InputController>
                <Input
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </InputController>

              <InputController>
                <Input
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </InputController>
              <ButtonController>
                <Info>
                  Don't have an account yet?{' '}
                  <Link to="/signup">Sign up here </Link>
                </Info>
                <Submit type="submit" value="Login" />
              </ButtonController>
            </Form>
          )}
        </Formik>
      </Container>
    </GeneralContainer>
  )
}

export default memo(Login)
