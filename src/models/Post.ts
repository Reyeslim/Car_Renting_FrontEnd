export type PostResponse = {
  _id: string
  vehicle: string
  name: string
  brand: string
  model: string
  plateNumber: string
  km: string
  carSeats: string
  fuel: string
  gearBox: string
  doors: string
  availableTimes: Array<string>
}

export type EditPostInput = {
  vehicle: string
  name: string
  brand: string
  model: string
  plateNumber: string
  km: string
  carSeats: string
  fuel: string
  gearBox: string
  doors: string
  availableTimes: Array<string>
}

export type PostInput = {
  vehicle: string
  name: string
  brand: string
  model: string
  plateNumber: string
  km: string
  carSeats: string
  fuel: string
  gearBox: string
  doors: string
  availableTimes: Array<string>
}

export const normalizePost = (input: PostResponse) => ({
  id: input?._id || '',
  vehicle: input?.vehicle || '',
  name: input?.name || '',
  brand: input?.brand || '',
  model: input?.model || '',
  plateNumber: input?.plateNumber || '',
  km: input?.km || '',
  carSeats: input?.carSeats || '',
  fuel: input?.fuel || '',
  gearBox: input?.gearBox || '',
  doors: input?.doors || '',
  availableTimes: input?.availableTimes || '',
})

export type Post = ReturnType<typeof normalizePost>
