import '../../index.css'
import Header from './../../components/Header'
import Title from './../../components/Title'
import { FiPlusCircle } from 'react-icons/fi'
import { Container } from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'
import Firebase from '../../services/firebaseConnetion'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function New() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const history = useHistory()
  const [customers, setCustomers] = useState([])
  const [loadCustomer, setLoadCustomer] = useState(true)
  const [complemento, setComplemento] = useState('')
  const [assunto, setAssunto] = useState('Suporte')
  const [status, setStatus] = useState('')
  const [customerSelected, setCustomerSelected] = useState(0)
  const [selectCustom, setSelectCustom] = useState(false)

  function handleOptionChange(e) {
    setStatus(e.target.value)
  }
  function handleChangeSelect(e) {
    setAssunto(e.target.value)
  }

  function handleCustomerSelected(e) {
    setCustomerSelected(e.target.value)
  }

  async function handleRegister(e) {
    e.preventDefault()

    //ATUALIZANDO  CHAMADO
    if (selectCustom) {
      await Firebase.firestore()
        .collection('Chamados')
        .doc(id)
        .update({
          customer: customers[customerSelected].nomeFantasia,
          customer_id: customers[customerSelected].id,
          subject: assunto,
          status: status,
          complement: complemento,
          user_id: user.uid,
        })
        .then(() => {
          toast.success('Chamado editado com sucesso!')
          setComplemento('')
          setCustomerSelected(0)
          history.push('/dashboard')
        })
        .catch(() => {
          toast.error('Houve um erro ao editar!')
        })
      return
    }

    //NOVO CHAMADO
    Firebase.firestore()
      .collection('Chamados')
      .add({
        created_at: new Date(),
        customer: customers[customerSelected].nomeFantasia,
        customer_id: customers[customerSelected].id,
        subject: assunto,
        status: status,
        complement: complemento,
        user_id: user.uid,
      })
      .then(() => {
        setComplemento('')
        setCustomerSelected(0)
        setAssunto('Suporte')
        setStatus('')
        toast.success('Chamado cadastrado com sucesso!')
      })
      .catch(() => {
        toast.error('Houve um erro ao cadastrar!')
      })
  }

  const loadId = async(lista) => {
    await Firebase.firestore().collection("Chamados").doc(id)
    .get()
    .then((res)=> {
      setAssunto(res.data().subject)
      setStatus(res.data().status)
      setComplemento(res.data().complement)

      let index = lista.findIndex(item => item.id === res.data().customer_id)
      setCustomerSelected(index)
      setSelectCustom(true)
    })
  }

  useEffect(() => {
    const loadCustomer = async () => {
      await Firebase.firestore()
        .collection('Customers')
        .get()
        .then((res) => {
          console.log(res.docs)
          let lista = []

          res.forEach((customers) => {
            lista.push({
              id: customers.id,
              nomeFantasia: customers.data().nomeFantasia,
            })
          })
          if (lista.length === 0) {
            setLoadCustomer(false)
            setCustomers([{ id: '1', nomeFantasia: 'Freela' }])
            return
          }
          setCustomers(lista)
          setLoadCustomer(false)
          if (id) {
            loadId(lista)
          }
        })
        .catch(() => {
          setLoadCustomer(false)
          setCustomers([{ id: '1', nomeFantasia: '' }])
          toast.error('Erro ao carregar os dados')
        })
    }
    loadCustomer()
  }, [])

  return (
    <div>
      <Header />
      <div className="content">
        <Title name={id ? "Editando chamdo" : "Novo chamado"}>
          <FiPlusCircle size={25} />
        </Title>
        <Container>
          <form onSubmit={handleRegister}>
            <label>Clientes</label>
            {customers.length === 0 ? (
              <input type="text" disabled={true} value="Carregando clientes" />
            ) : (
              <select
                value={customerSelected}
                onChange={handleCustomerSelected}
              >
                {customers.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {item.nomeFantasia}
                    </option>
                  )
                })}
              </select>
            )}

            <label>Assunto</label>
            <select value={assunto} onChange={handleChangeSelect}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                nome="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === 'Aberto'}
              />
              <span>Em aberto</span>
              <input
                type="radio"
                nome="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === 'Progresso'}
              />
              <span>Progresso</span>
              <input
                type="radio"
                nome="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={status === 'Atendido'}
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            ></textarea>
            <button type="submit">Registrar</button>
          </form>
        </Container>
      </div>
    </div>
  )
}
