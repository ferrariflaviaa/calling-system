import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #f9f8f8;
  border-radius: 5px;
  padding: 0.8em;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;

    label {
      margin-bottom: 0.5em;
      font-size: 1.2em;
    }

    select {
      margin-bottom: 1em;
      padding: 0.7em;
      border: 0;
      border-radius: 5px;
      max-width: 600px;
    }

    textarea {
      resize: none;
      height: 106px;
      border: 0;
      padding: 0.6em;
      width: 36%;
      margin-bottom: 2em;
    }
    input [type='radio'] {
      margin: 15px 0;
    }
    input [type='radio']:not(:first-child) {
      margin-left: 15px;
    }

    .status {
      margin-bottom: 1em;
      font-size: 1.2em;
    }
    .status span {
      padding: 0 0.5em ;
    }

    button {
      background-color: #181c2e;
      color: #f9f8f8;
      padding: 0.4em;
      max-width: 600px;
      border-radius: 6px;
    }
    button:hover {
      background-color: #121212;
      color: #f9f8f8;
      opacity: 0.8;
    }
  }
`
