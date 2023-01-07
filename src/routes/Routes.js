import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const loading = false
  const signed = false

  if (loading) {
    return <div></div>
  }
  //Usuário tentou acessa uma rota que esta privada mas ele não esta logado.
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  //Usuário tentou acessa uma rota que não é privada retorna ele ao painel!
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />
}
