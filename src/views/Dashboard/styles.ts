import styled from 'styled-components'
import { Button as DefaultButton } from '../../components/Button'

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
`
export const Button = styled(DefaultButton)``
export const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  justify-content: space-around;
`
