import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import Header from '../../components/Header'
import Title from '../../components/Title'
import '../../index.css'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi'
import { New, TableDashboard } from './styles'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare />
        </Title>
        <>
          <New>
            <Link to='/new' className="new">
              <FiPlus color="#FFF" size={25} />
              Novo chamado
            </Link>
          </New>
          <TableDashboard>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado em</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">Marcado Esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ backgroundColor: '#999' }}>
                    Em Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">18/03/23</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: '#3583f6' }}
                  >
                    <FiSearch color="#FFF" size={20} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: '#f6a935' }}
                  >
                    <FiEdit2 color="#FFF" size={20} />
                  </button>
                </td>
              </tr>
              <tr>
                <td data-label="Cliente">Esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ backgroundColor: '#999' }}>
                    Em Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">18/03/23</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: '#3583f6' }}
                  >
                    <FiSearch color="#FFF" size={20} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: '#f6a935' }}
                  >
                    <FiEdit2 color="#FFF" size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </TableDashboard>
        </>
      </div>
    </div>
  )
}
