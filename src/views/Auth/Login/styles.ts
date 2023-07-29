import { styled } from 'styled-components'
import { TextField, Button } from '@mui/material'
import { Link as DefaultLink } from 'react-router-dom'

export const SingupButton = styled(Button)``

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
`
export const Form = styled.form`
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
`
export const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 45px;
`
export const InputController = styled.div`
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
`

export const Input = styled(TextField)`
  width: 100%;
`
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
export const Link = styled(DefaultLink)`
  color: purple;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
`
export const ButtonController = styled.div`
  display: flex;
  flex-flow: row;
`
