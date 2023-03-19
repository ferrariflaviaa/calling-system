import Header from './../../components/Header'
import Title from './../../components/Title'
import '../../index.css'
import { FiPlusCircle } from 'react-icons/fi'
import { Container } from './styles'
import { useState } from 'react'
export default function New() {
  const [customers, setCustomers] = useState([])
  const [complemento, setComplemento] = useState('')
  const [assunto, setAssunto] = useState('Suporte')
  const [status, setStatus] = useState('')

  function handleOptionChange(e) {
    setStatus(e.target.value)

  }
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>
        <Container>
          <form>
            <label>Clientes</label>
            <select>
              <option key={1} value={1}>
                Mercado teste
              </option>
              <option key={2} value={2}>
                Mercado teste
              </option>
            </select>

            <label>Assunto</label>
            <select>
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
