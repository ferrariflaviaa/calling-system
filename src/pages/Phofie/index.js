import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiSettings, FiUpload } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'
import '../../index.css'
import { AuthContext } from '../../context/auth'
import { useContext } from 'react'
import { useState } from 'react'
import { Container } from './styles'
import { toast } from 'react-toastify'
import Firebase from '../../services/firebaseConnetion'
export default function Profile() {
  const { user, storageUser, setUser, signOut } = useContext(AuthContext)
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
  const [imageAvatar, setImageAvatar] = useState(null)
  const [nome, setNome] = useState(user && user.nome)
  const [email, setEmail] = useState(user && user.email)

  function handleFile(event) {
    if (event.target.files[0]) {
      const image = event.target.files[0]
      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image)
        console.log(image)
        setAvatarUrl(URL.createObjectURL(event.target.files[0]))
      } else {
        toast.warning('Envie uma imagem do tipo PNG ou JPEG')
        setImageAvatar(null)
      }
    }
  }

  async function handleUpload() {
    try {
      const uid = user.uid
      await Firebase.storage()
        .ref(`images/${uid}/${imageAvatar.name}`)
        .put(imageAvatar)

      const url = await Firebase.storage()
      .ref(`images/${uid}`)
      .child(imageAvatar.name)
      .getDownloadURL();

      await Firebase.firestore().collection('users').doc(user.uid).update({
        avatarUrl: url,
        nome,
      })
      let data = {
        ...user,
        avatarUrl: url,
        nome,
      }
      setUser(data)
      storageUser(data)
      toast.success('Dados atualizados com sucesso!')
    } catch (error) {
      console.log(error)
      toast.error('Erro no sistema ')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (imageAvatar === null && nome !== '') {
      //Atualizar apenas o nome do user

      await Firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .update({
          nome: nome,
        })
        .then(() => {
          let data = {
            ...user,
            nome: nome,
          }
          setUser(data)
          storageUser(data)
          toast.success('Nome editado com sucesso')
        })
        .catch(() => {
          toast.error('Erro ao editar nome!!')
        })
    } else if (nome !== '' && imageAvatar !== null) {
      //Atualizar tanto nome quanto a foto
      handleUpload()
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>
        <Container>
          <form onSubmit={handleSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />
              <br />
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
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Email:</label>
            <input type="email" value={email} disabled />

            <button className="btn" type="submit">
              Salvar
            </button>
          </form>
        </Container>
        <Container>
          <button className="logout-btn" onClick={() => signOut()}>
            Sair
          </button>
        </Container>
      </div>
    </div>
  )
}
