import Page from '../../components/Page'
import { useSelector } from 'react-redux'
import useAuthenticatedRedirect from '../../hooks/useAuthenticatedRedirect'

export default function Home() {
  useAuthenticatedRedirect()
  const profile = useSelector(state => state.user.profile)

  return <Page>{profile ? `Hello, ${profile.username}` : 'Index'}</Page>
}
