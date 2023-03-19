import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth'
import Header from '../../components/Header'
import Title from '../../components/Title'
import '../../index.css'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi'
import { CustomDashboard, New, TableDashboard } from './styles'
import { Link } from 'react-router-dom'

import Firebase from './../../services/firebaseConnetion'

export default function Dashboard() {
  const [chamados, setChamados] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastDocs, setLastDocs] = useState()
  const [loadingMore, setLoadingMore] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const listREF = Firebase.firestore()
    .collection('Chamados')
    .orderBy('created_at', 'desc')

  useEffect(() => {
    const loadChamados = async () => {
      await listREF
        .limit(5)
        .get()
        .then((res) => {
          updateState(res)
          setLoadingMore(false)
        })
        .catch((error) => {
          console.log(`error ${error}`)
        })
    }
    loadChamados()
  })

  async function updateState(res) {
    const isCollectionEmpty = res.size === 0
    if (!isCollectionEmpty) {
      let list = []
      res.forEach((item) => {
        list.push({
          id: item.id,
          assunto: item.data().subject,
          cliente: item.data().customer,
          clienteId: item.data().customer_id,
          created: item.data().created_at,
          // eslint-disable-next-line no-undef
          createdFormated: format(
            item.data().created_at.toDate(),
            'dd/MM/yyyy',
          ),
          status: item.data().status,
          complemento: item.data().complement,
        })
      })
      const lastDoc = res.docs[res.docs.length - 1]
      setChamados((chamados) => [...chamados, ...list])
      setLastDocs(lastDoc)
    } else {
      setIsEmpty(true)
    }
    setLoadingMore(false)
  }
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare />
        </Title>
        <>
          {chamados.length === 0 ? (
            <CustomDashboard>
              <span>Nenhum chamado encontrado...</span>

              <Link to="/new" className="new">
                <FiPlus color="#FFF" size={25} />
                Novo chamado
              </Link>
            </CustomDashboard>
          ) : (
            <>
              <New>
                <Link to="/new" className="new">
                  <FiPlus color="#FFF" size={25} />
                  Novo chamado
                </Link>
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
                        <span
                          className="badge"
                          style={{ backgroundColor: '#999' }}
                        >
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
              </New>
            </>
          )}
        </>
      </div>
    </div>
  )
}
