import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  overflow: auto;
  width: 200px;
  height: 100%;
  background-color: #181c2e;
  margin: 0;
  padding: 0;

  .side div {
    background-image: url('../../assets/cover.png');
    background-color: #181c2e;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    height: 170px;
    background-size: cover;
  }
  .side img {
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

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;

    a {
      float: left;
    }
    div {
      margin-left: 0;
      display: none;
    }

    a svg {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    a {
      text-align: center;
      float: none;
    }

    a svg {
      display: none;
    }
  }
`
