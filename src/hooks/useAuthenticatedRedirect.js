import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useIsAuthenticated from './useIsAuthenticated'

export default (to = '/') => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(to)
    }
  }, [isAuthenticated])
}
