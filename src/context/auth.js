import { useState, useEffect, createContext } from 'react'
import { toast } from 'react-toastify'
import firebase from '../services/firebaseConnetion'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('SistemaUser')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  //Fazendo o login do usuário
  async function signIn(email, password) {
    setLoadingAuth(true)

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        const userProfile = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get()

        let data = {
          uid: uid,
          nome: userProfile.data().nome,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email,
        }

        setUser(data)
        toast.success('Bem vindo de volta!')
        storageUser(data)
        setLoadingAuth(false)
      })
      .catch((error) => {
        toast.error('Ops algo deu errado!')
        console.log(error)
        setLoadingAuth(false)
      })
  }

  //Cadastrando um novo usuário.
  const signUp = async (nome, email, password) => {
    setLoadingAuth(true)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({
            nome: nome,
            avatarUrl: null,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
              avatarUrl: null,
            }
            toast.success('Bem vindo a plataforma!')
            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
          })
      })
      .catch((error) => {
        toast.error('Ops algo deu errado!')
        console.log(error)
        setLoadingAuth(false)
      })
  }

  const storageUser = (data) => {
    localStorage.setItem('SistemaUser', JSON.stringify(data))
  }

  //Fazer logout no usuário
  async function signOut() {
    await firebase.auth().signOut()
    localStorage.removeItem('SistemaUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signOut,
        signIn,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
