import { Post, PostInput, normalizePost } from '../../models/Post'
import { getToken } from '../storage/token'

const BASE_URL = 'http://localhost:8080/posts'
const token = getToken()

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(BASE_URL, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    return data?.posts?.map(normalizePost)
  } catch (error) {
    console.log(error)
  }

  return []
}

export const getPostById = async (id: string): Promise<Post> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    console.log(data)

    return normalizePost(data)
  } catch (error) {
    console.log(error)
    throw new Error('404 not found')
  }
}

export const createPost = async (input: PostInput): Promise<Post> => {
  const response = await fetch(BASE_URL, {
    body: JSON.stringify(input),
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const updatePostById = async (
  id: string,
  input: PostInput
): Promise<Post> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    body: JSON.stringify(input),
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()

  return normalizePost(data)
}

export const removePostById = async (id: string): Promise<boolean> => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  } catch (error) {
    alert('You dont have permission for this')
  }
  return true
}
