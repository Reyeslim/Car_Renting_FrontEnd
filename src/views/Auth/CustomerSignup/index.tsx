import { FC, memo } from 'react'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'
import {
  Container,
  Form,
  GeneralContainer,
  Input,
  InputController,
  RolSelect,
  Submit,
  Title,
} from './styles'
import { Props } from './types'
import useLogic from './logic'
import { InputLabel, MenuItem } from '@mui/material'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)
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
              <Title>Welcome!</Title>

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

              <InputController>
                <Input
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
              </InputController>

              <InputController>
                <Input
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </InputController>

              <InputController>
                <Input
                  id="outlined-basic"
                  label="Age"
                  type="number"
                  variant="outlined"
                  name="age"
                  onChange={handleChange}
                  value={values.age}
                  error={touched.age && !!errors.age}
                  helperText={touched.age && errors.age}
                />
              </InputController>
              <InputController>
                <Input
                  id="outlined-basic"
                  label="Phone"
                  type="number"
                  variant="outlined"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  error={touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                />
              </InputController>

              <InputController>
                <Input
                  id="outlined-basic"
                  label="DNI"
                  variant="outlined"
                  name="dni"
                  onChange={handleChange}
                  value={values.dni}
                  error={touched.dni && !!errors.dni}
                  helperText={touched.dni && errors.dni}
                />
              </InputController>

              <InputController>
                <InputLabel id="demo-simple-select-label">
                  Are you a customer or a seller?
                </InputLabel>
                <RolSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.rol}
                  name="rol"
                  label="Are you a customer or a seller?"
                  onChange={handleChange}
                >
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                </RolSelect>
              </InputController>

              <Submit type="submit" value="Sign up" />
            </Form>
          )}
        </Formik>
      </Container>
    </GeneralContainer>
  )
}
export default memo(Signup)
