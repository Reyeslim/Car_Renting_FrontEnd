import { styled } from 'styled-components'
import Button from '@mui/material/Button'

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
  font-size: 50px;
  margin-bottom: 50px;
`
export const InputController = styled.div`
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
`
export const Input = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;

  &::placeholder {
    color: transparent;
  }
`
export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
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
