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

export const TableDashboard = styled.table`
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  th,
  td {
    padding: 0.6em;
    text-align: center;
  }
  caption {
    font-size: 1.6em;
    margin: 0.6em 0 0.75em;
  }

  tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.36em;
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  td .action {
    border: 0;
    padding: 5px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 3px;
  }
  td .action svg {
    vertical-align: middle;
  }
  td .badge {
    padding: 3px;
    border-radius: 4px;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    border: 0;

    caption {
      font-size: 1.3em;
    }

    thead {
      border: none;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.6em;
    }
    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }
     td::before{
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`
