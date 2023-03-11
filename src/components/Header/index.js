import { Container } from './styles.js'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import avatar from '../../assets/avatar.png'
import cover from '../../assets/cover.png'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

export default function Header() {
  const { user } = useContext(AuthContext)
  return (
    <Container>
      <div className='side' style={{ backgroundImage: `url(${cover})` }}>
        <img 
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Seu avatar"
        />
      </div>
      <Link to="/dashboard">
        <FiHome color="#fff" size={24} />
        Chamados
      </Link>
      <Link to="/customers">
        <FiUser color="fff" size={24} />
        Clientes
      </Link>
      <Link to="/profile">
        <FiSettings color="fff" size={24} />
        Perfil
      </Link>
    </Container>
  )
}
