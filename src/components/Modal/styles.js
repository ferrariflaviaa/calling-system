import styled from 'styled-components'

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
`

export const Content = styled.div`
  width: 100%;
  position: fixed;
  max-width: 600px;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 4em 2rem;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  .close {
    background-color: #f65835;
    border: 0;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 4px 10px;
    border-radius: 10px;
  }

  h2 {
    margin-bottom: 1.2em;
    font-size: 2em;
  }

  span {
    font-weight: bold;
    font-size: 1.2em;
    color: #121212;
  }

  span a {
    font-weight: 400;
    margin-right: 1em;
    padding: 2px 8px;
    border-radius: 3px;
  }

  .row {
    margin-bottom: 1em;
  }

  p {
    padding-top: 0.5em;
    white-space: pre-wrap;
  }
`
