import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  overflow: auto;
  width: 200px;
  height: 100%;
  background-color: #181c2e;
  margin: 0;
  padding: 0;
  
  .side {
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    height: 170px;
    background-size: cover;
  }
  img {
    border-radius: 50%;
    display: block;
    margin: auto;
    width: 90px;
    height: 90px;
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
  }
  a {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    padding: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: ease-in-out 0.4s;
    margin-right: 0.5em;

    :hover {
      background-color: #121212;
      color: #fff;
    }
  }

  svg {
    margin-right: 0.5em;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;

    .side {
      display: none;
    }

    a {
      font-size: 1rem;
      float: left;
    }

    a svg {
      display: none;
    }
  }

  @media screen and (max-width: 290px) {
    width: 100%;
    height: auto;
    position: relative;
    a {
      font-size: 0.7rem;
    }

    a svg {
      display: none;
    }
  }
`
