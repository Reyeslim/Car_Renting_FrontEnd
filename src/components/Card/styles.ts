import styled from 'styled-components'
import { Button as DefaultButton } from '../Button'

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 120px;
  margin-bottom: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
`

export const Button = styled(DefaultButton)``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`
export const Title = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const Info = styled.p``

export const InfoController = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
`
export const AdditionalController = styled.div``
export const Bold = styled.strong``
