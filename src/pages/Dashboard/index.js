import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import Header from '../../components/Header'

export default function Dashboard() {
  const { signOut } = useContext(AuthContext)

  return (
    <div>
      <Header />
      <h1>Página de dashboard</h1>
      <button onClick={() => signOut()}>Fazer logout</button>
    </div>
  )
}
