/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import Header from '../../components/Header'
import Title from '../../components/Title'
import '../../index.css'
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi'
import { BtnMore, CustomDashboard, New, TableDashboard } from './styles'
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
          setChamados([])
          updateState(res)
          setLoadingMore(false)
        })
        .catch((error) => {
          console.log(`error ${error}`)
        })
      setLoading(false)
    }
    loadChamados()
  }, [])

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

  const handleMore = async () => {
    setLoadingMore(true)
    await listREF
      .startAfter(lastDocs)
      .limit(5)
      .get()
      .then((snapshot) => {
        updateState(snapshot)
      })
  }

  if (loading) {
    return (
      <div>
        <Header />
        <div className="content">
          <Title name={'Tickets'}>
            <FiMessageSquare size={25} />
          </Title>
          <CustomDashboard>
            <span>Buscando chamados ...</span>
          </CustomDashboard>
        </div>
      </div>
    )
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
                    {chamados.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td data-label="Cliente">{item.cliente}</td>
                          <td data-label="Assunto">{item.assunto}</td>
                          <td data-label="Status">
                            <span
                              className="badge"
                              style={{
                                backgroundColor:
                                  item.status === 'Aberto' ? '#5cb85c' : '#999',
                              }}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td data-label="Cadastrado">
                            {item.createdFormated}
                          </td>
                          <td data-label="#">
                            <button
                              className="action"
                              style={{ backgroundColor: '#3583f6' }}
                              onClick={() => null}
                            >
                              <FiSearch color="#FFF" size={17} />
                            </button>
                            <Link
                              className="action"
                              style={{ backgroundColor: '#F6a935' }}
                              to={`/new/${item.id}`}
                            >
                              <FiEdit2 color="#FFF" size={17} />
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </TableDashboard>
                {loadingMore && <h3>Buscando mais chamados....</h3>}
                {!loadingMore && !isEmpty && (
                  <BtnMore onClick={handleMore}>Bucasr mais</BtnMore>
                )}
              </New>
            </>
          )}
        </>
      </div>
    </div>
  )
}
