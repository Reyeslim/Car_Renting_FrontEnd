import { object, string, number, array } from 'yup'

export const InitialValues = {
  vehicle: '',
  name: '',
  brand: '',
  model: '',
  plateNumber: '',
  km: '',
  carSeats: '',
  fuel: '',
  gearBox: '',
  doors: '',
  availableTimes: [],
}

export const ValidationSchema = object({
  vehicle: string().required(),
  name: string().required(),
  brand: string().required(),
  model: string().required(),
  plateNumber: string().required(),
  km: number().integer().positive().required(),
  carSeats: number().integer().positive().required(),
  fuel: string(),
  gearBox: string(),
  doors: string(),
  availableTimes: array().required(),
})
