import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #f9f8f8;
  border-radius: 5px;
  padding: 0.8em;
  align-items: center;
  margin-bottom: 1em;

  .label-avatar {
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    input {
      display: none;
    }
    span {
      z-index: 99;
      position: absolute;
      opacity: 0.8;
      transition: all 0.6s;
    }
    span:hover {
      opacity: 1;
      transform: scale(1.4);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 1em;
      border-radius: 50%;
      object-fit: cover;
    }

    label {
      margin-bottom: 0.5em;
      font-size: 1.4em;
    }

    input,
    textarea,
    select {
      margin-bottom: 1em;
      padding: 0.7em;
      border: 0;
      border-radius: 5px;
      max-width: 600px;
    }

    input: disabled {
      cursor: not-allowed;
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
  .logout-btn {
    padding: 8px 20px;
    border: 1px solid #121212;
    border-radius: 5px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`
