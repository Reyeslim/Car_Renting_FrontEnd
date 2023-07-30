import { object, string, number } from 'yup'

export const ValidationSchema = object({
  vehicle: string(),
  name: string(),
  brand: string(),
  model: string(),
  plateNumber: string(),
  km: number().integer().positive(),
  carSeats: number().integer().positive(),
  fuel: string(),
  gearBox: string(),
  doors: string(),
  availableTimes: string(),
})
