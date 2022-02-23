import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useIsAuthenticated from './useIsAuthenticated'
import { defaultAuthHome } from '../config'

export default (to = defaultAuthHome) => {
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(to)
    }
  }, [isAuthenticated])
}
