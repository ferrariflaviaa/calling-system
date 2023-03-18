import Header from '../../components/Header'
import Title from '../../components/Title'
import '../../index.css'
import { FiUser } from 'react-icons/fi'
import { useState } from 'react'
import { Container } from './styles'

export default function Customers() {
  const [nome, setNome] = useState()
  const [cnpj, setCnpj] = useState()
  const [endereco, setEndereco] = useState()

  function handleRegister(e) {
    e.preventDefault()

    alert('teste')
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
              placeholder="Nome da empresa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
