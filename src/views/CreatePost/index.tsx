import { FC, memo } from 'react'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'
import { InputLabel, MenuItem } from '@mui/material'
import useLogic from './logic'
import {
  Container,
  Form,
  GeneralContainer,
  Divider,
  Input,
  InputController,
  Submit,
  Title,
  AdditionalController,
  DefaultSelect,
} from './styles'

const CreateForm: FC = () => {
  const { handleCreate } = useLogic()
  return (
    <GeneralContainer>
      <Container>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleCreate}
        >
          {({ errors, handleSubmit, handleChange, values, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Title>Ready to rent your car?</Title>
              <Divider>
                <AdditionalController>
                  <InputController>
                    <InputLabel id="vehicle" required>
                      Please select your vehicle type
                    </InputLabel>
                    <DefaultSelect
                      labelId="vehicle"
                      id="demo-simple-select"
                      value={values.vehicle}
                      name="vehicle"
                      required
                      onChange={handleChange}
                    >
                      <MenuItem value="car">Car</MenuItem>
                      <MenuItem value="motorbike">Motorbike</MenuItem>
                      <MenuItem value="van">Van</MenuItem>
                    </DefaultSelect>
                  </InputController>
                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Name"
                      type="name"
                      variant="outlined"
                      required
                      name="name"
                      onChange={handleChange}
                      value={values.name}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </InputController>

                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Brand"
                      variant="outlined"
                      required
                      name="brand"
                      onChange={handleChange}
                      value={values.brand}
                      error={touched.brand && !!errors.brand}
                      helperText={touched.brand && errors.brand}
                    />
                  </InputController>

                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Model"
                      variant="outlined"
                      required
                      name="model"
                      onChange={handleChange}
                      value={values.model}
                      error={touched.model && !!errors.model}
                      helperText={touched.model && errors.model}
                    />
                  </InputController>

                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Plate Number"
                      variant="outlined"
                      required
                      name="plateNumber"
                      onChange={handleChange}
                      value={values.plateNumber}
                      error={touched.plateNumber && !!errors.plateNumber}
                      helperText={touched.plateNumber && errors.plateNumber}
                    />
                  </InputController>
                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Kilometers"
                      type="number"
                      variant="outlined"
                      required
                      name="km"
                      onChange={handleChange}
                      value={values.km}
                      error={touched.km && !!errors.km}
                      helperText={touched.km && errors.km}
                    />
                  </InputController>
                </AdditionalController>

                <AdditionalController>
                  <InputController>
                    <Input
                      id="outlined-basic"
                      label="Car Seats"
                      variant="outlined"
                      required
                      type="number"
                      name="carSeats"
                      onChange={handleChange}
                      value={values.carSeats}
                      error={touched.carSeats && !!errors.carSeats}
                      helperText={touched.carSeats && errors.carSeats}
                    />
                  </InputController>

                  <InputController>
                    <InputLabel id="fuel">
                      Please select your fuel type
                    </InputLabel>
                    <DefaultSelect
                      labelId="fuel"
                      id="demo-simple-select"
                      value={values.fuel}
                      name="fuel"
                      onChange={handleChange}
                    >
                      <MenuItem value="gas">Gas</MenuItem>
                      <MenuItem value="electric">Electric</MenuItem>
                    </DefaultSelect>
                  </InputController>

                  <InputController>
                    <InputLabel id="gearBox">
                      Please select your gearbox type
                    </InputLabel>
                    <DefaultSelect
                      labelId="gearBox"
                      id="demo-simple-select"
                      value={values.gearBox}
                      name="gearBox"
                      onChange={handleChange}
                    >
                      <MenuItem value="manual">Manual</MenuItem>
                      <MenuItem value="automatic">Automatic</MenuItem>
                    </DefaultSelect>
                  </InputController>

                  <InputController>
                    <InputLabel id="doors">
                      Please select the numbers of doors
                    </InputLabel>
                    <DefaultSelect
                      labelId="doors"
                      id="demo-simple-select"
                      value={values.doors}
                      name="doors"
                      onChange={handleChange}
                    >
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </DefaultSelect>
                  </InputController>

                  <InputController>
                    <InputLabel id="availableTimes" required>
                      Please select which days your car is available
                    </InputLabel>
                    <DefaultSelect
                      labelId="availableTimes"
                      id="demo-simple-select"
                      value={values.availableTimes}
                      name="availableTimes"
                      multiple
                      onChange={handleChange}
                    >
                      <MenuItem value="Monday">Monday</MenuItem>
                      <MenuItem value="Tuesday">Tuesday</MenuItem>
                      <MenuItem value="Wednesday">Wednesday</MenuItem>
                      <MenuItem value="Thursday">Thursday</MenuItem>
                      <MenuItem value="Friday">Friday</MenuItem>
                      <MenuItem value="Saturday">Saturday</MenuItem>
                      <MenuItem value="Sunday">Sunday</MenuItem>
                    </DefaultSelect>
                  </InputController>
                </AdditionalController>
              </Divider>
              <AdditionalController>
                <Submit type="submit" value="Create post" />
              </AdditionalController>
            </Form>
          )}
        </Formik>
      </Container>
    </GeneralContainer>
  )
}
export default memo(CreateForm)
