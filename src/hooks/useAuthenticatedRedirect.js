import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useIsAuthenticated from './useIsAuthenticated'
import { routes } from '../config'

export default (to = routes.home, invert) => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    const shouldRedirect = invert ? !isAuthenticated : isAuthenticated

    if (shouldRedirect) {
      navigate(to)
    }
  }, [isAuthenticated])
}
