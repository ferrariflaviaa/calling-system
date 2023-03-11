import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiSettings, FiUpload } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import '../../index.css'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'
import { useState } from 'react'
import { Container } from './styles'

export default function Profile() {
  const { user } = useContext(AuthContext)
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>
        <Container>
          <form>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" /> <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  alt="Foto de perfil"
                  width={240}
                  height={240}
                />
              ) : (
                <img
                  src={avatarUrl}
                  alt="Foto de perfil"
                  width={250}
                  height={250}
                />
              )}
            </label>
            <label>Nome:</label>
            <input type="text" placeholder="Seu nome" />
            <label>Email:</label>
            <input type="email" placeholder="test@teste.com" disabled />

            <button className='btn' type="submit">Salvar</button>
          </form>
        </Container>
        <Container>
          <button className="logout-btn">Sair</button>
        </Container>
      </div>
    </div>
  )
}
