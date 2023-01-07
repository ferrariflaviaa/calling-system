import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Container, Login, FormLogin } from './styles'
export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Clicou')
  }
  return (
    <Container>
      <Login>
        <div className="logo">
          <img src={logo} alt="Sistema logo" />
        </div>
        <FormLogin onSubmit={handleSubmit}>
          <h1>Entrar</h1>
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
          <button type="submit">Acessar</button>
        </FormLogin>
        <Link to="/register">Criar uma conta</Link>
      </Login>
    </Container>
  )
}
