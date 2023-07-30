import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
  ButtonContainer,
} from './styles'
import { Formik } from 'formik'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import { Props } from './types'
import Footer from '../../../components/Footer'
import BackArrow from '../../../components/Back'

const EditForm: FC<Props> = ({ id, initialValues, onEditComplete }) => {
  const { handleEdit } = useLogic(id, onEditComplete)

  return (
    <Container>
      <ButtonContainer>
        <BackArrow />
      </ButtonContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleEdit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label>Vehicle</Label>
              <Input
                type="text"
                name="vehicle"
                onChange={handleChange}
                value={values.vehicle}
              />
            </InputController>
            <InputController>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </InputController>
            <InputController>
              <Label>Brand</Label>
              <Input
                type="text"
                name="brand"
                onChange={handleChange}
                value={values.brand}
              />
            </InputController>
            <InputController>
              <Label>Brand</Label>
              <Input
                type="text"
                name="brand"
                onChange={handleChange}
                value={values.brand}
              />
            </InputController>
            <InputController>
              <Label>Model</Label>
              <Input
                type="text"
                name="model"
                onChange={handleChange}
                value={values.model}
              />
            </InputController>
            <InputController>
              <Label>Plate Number</Label>
              <Input
                type="text"
                name="plateNumber"
                onChange={handleChange}
                value={values.plateNumber}
              />
            </InputController>
            <InputController>
              <Label>Kilometers</Label>
              <Input
                type="number"
                name="km"
                onChange={handleChange}
                value={values.km}
              />
            </InputController>
            <InputController>
              <Label>Car seats</Label>
              <Input
                type="number"
                name="carSeats"
                onChange={handleChange}
                value={values.carSeats}
              />
            </InputController>
            <InputController>
              <Label>Fuel</Label>
              <Input
                type="text"
                name="fuel"
                onChange={handleChange}
                value={values.fuel}
              />
            </InputController>
            <InputController>
              <Label>Gearbox</Label>
              <Input
                type="text"
                name="gearBox"
                onChange={handleChange}
                value={values.gearBox}
              />
            </InputController>
            <InputController>
              <Label>Doors</Label>
              <Input
                type="text"
                name="doors"
                onChange={handleChange}
                value={values.doors}
              />
            </InputController>
            <InputController>
              <Label>Available Times</Label>
              <Input
                type="text"
                name="availableTimes"
                onChange={handleChange}
                value={values.availableTimes}
              />
            </InputController>
            <Button type="submit">Edit Post</Button>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(EditForm)
