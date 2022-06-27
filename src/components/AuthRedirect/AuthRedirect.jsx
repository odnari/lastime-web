import { Navigate } from 'react-router-dom'
import useIsLoggedIn from '../../hooks/useIsLoggedIn'

export default function AuthRedirect({ anonymous, redirect, children }) {
  const isLoggedIn = useIsLoggedIn()
  const shouldRedirect = anonymous ? isLoggedIn : !isLoggedIn

  if (shouldRedirect) return <Navigate to={redirect} replace />

  return children
}
