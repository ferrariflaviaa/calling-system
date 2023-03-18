import Header from '../../components/Header'
import Title from '../../components/Title'
import '../../index.css'
import { FiUser } from 'react-icons/fi'
import { useState } from 'react'
import { Container } from './styles'
import Firebase from '../../services/firebaseConnetion'
import { toast } from 'react-toastify'

export default function Customers() {
  const [nomeFantasia, setnomeFantasia] = useState()
  const [cnpj, setCnpj] = useState()
  const [endereco, setEndereco] = useState()

  async function handleRegister(e) {
    e.preventDefault()

    if (nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
      await Firebase.firestore()
        .collection('Customers')
        .add({
          nomeFantasia: nomeFantasia,
          cnpj: cnpj,
          endereco: endereco,
        })
        .then(() => {
          toast.success('Cliente cadastrado com sucesso')
          setnomeFantasia('')
          setCnpj('')
          setEndereco('')
        })
        .catch(() => {
          toast.error('Erro ao cadastrar cliente!')
        })
    } else {
      toast.warning('Preencha os dados')
    }
  }
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Cliente">
          <FiUser size={25} />
        </Title>
        <Container>
          <form onSubmit={handleRegister}>
            <label>Nome fantasia</label>
            <input
              type="text"
              placeholder="Nome fantasia"
              value={nomeFantasia}
              onChange={(e) => setnomeFantasia(e.target.value)}
            />
            <label>CNPJ</label>
            <input
              type="text"
              placeholder="Digite seu CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <label>Nome fantasia</label>
            <input
              type="text"
              placeholder="Endereço da empresa"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            <button type="submit">Cadastrar</button>
          </form>
        </Container>
      </div>
    </div>
  )
}
