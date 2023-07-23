import { FC, memo } from 'react'
import { SingupButton } from './styles'

const Signup: FC = () => {
  return <SingupButton variant="contained">Add</SingupButton>
}

export default memo(Signup)
