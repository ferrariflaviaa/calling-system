import { useState, useContext } from 'react'
import {AuthContext} from '../../context/auth'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Container, Login, FormLogin } from './styles'

export default function SignUp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signUp, loadingAuth} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nome !== '' && email !== '' && password !== ''){
      signUp(nome, email, password)
    }
  }

  return (
    <Container>
      <Login>
        <div className="logo">
          <img src={logo} alt="Sistema logo" />
        </div>
        <FormLogin onSubmit={handleSubmit}>
          <h1>Cadastrar uma conta</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
        </FormLogin>
        <Link to="/">Já tem uma conta? Entre</Link>
      </Login>
    </Container>
  )
}
