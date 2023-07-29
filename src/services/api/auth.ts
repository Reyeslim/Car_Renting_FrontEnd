import { removeToken, setToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/auth'

export const login = async (email: string, password: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/login`, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const token = await response.json()

  if (token) {
    setToken(token)
  }
}

export const signup = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  age: number,
  phone: number,
  dni: string,
  rol: string
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/signup`, {
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      age,
      phone,
      dni,
      rol,
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const token = await response.json()

  if (token) {
    setToken(token)
  }
}

export const logout = async (): Promise<void> => {
  removeToken()
}
