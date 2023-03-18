import styled from 'styled-components'

export const New = styled.div`
  a {
    float: right;
    margin-bottom: 1.6em;
    background-color: #83bf02;
    padding: 0.6em;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    font-weight: 600;
    color: #fff;
    transition: ease-in-out 0.3s;
    svg {
      margin-right: 6px;
    }
  }
  a:hover {
    background-color: #5fd204;
    transform: scale(1.1);
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f9f8f8;
  border-radius: 5px;
  padding: 0.8em;
  align-items: center;
  margin-bottom: 1em;
`
