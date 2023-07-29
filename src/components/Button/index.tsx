import { FC, memo } from 'react'
import type { Props } from './types'
import { CustomButton } from './styles'

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <CustomButton variant="outlined" onClick={onClick}>
      {children}
    </CustomButton>
  )
}

export default memo(Button)
