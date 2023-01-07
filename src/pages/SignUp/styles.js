import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #121212;
`
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeaec;
  width: 600px;

  a {
    margin: 1.5em 0;
    color: #000;
    cursor: pointer;
  }

  .logo {
    display: flex;
    justify-content: center;
    background-color: #121c2e;
    width: 100%;
  }

  .logo img {
    padding: 20px;
    width: 170px;
    height: 130px;
  }
`
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  width: 90%;
  h1 {
    text-align: center;
    margin-bottom: 0.5em;
    color: #181c2e;
  }

  input {
    height: 35px;
    padding: 10px;
    font-size: 15px;
    background-color: #fff;
    border: 0;
    margin-bottom: 15px;
    border-radius: 7px;
  }

  button {
    height: 35px;
    border: 0;
    border-radius: 7px;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.3em;
  }
`
