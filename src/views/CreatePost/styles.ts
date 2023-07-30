import { styled } from 'styled-components'
import { Select, TextField } from '@mui/material'

export const GeneralContainer = styled.body`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const Form = styled.form`
  background-color: white;
  width: 700px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);

  @media screen and (max-width: 768px) {
    margin: 50px;
    font-size: 14px;
  }
`
export const Title = styled.h1`
  margin-bottom: 20px;
`
export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const Input = styled(TextField)`
  width: 100%;
`
export const DefaultSelect = styled(Select)``

export const Submit = styled.input`
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;

  &:hover {
    background-color: #9867c5;
    transform: translateY(-2px);
  }
`
export const Info = styled.p`
  color: black;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
`
export const AdditionalController = styled.div``

export const Divider = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-flow: column;
    gap: 15px;
  }
`
