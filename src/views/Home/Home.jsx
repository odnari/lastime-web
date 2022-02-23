import Page from '../../components/Page'
import { useSelector } from 'react-redux'

export default function Home() {
  const profile = useSelector(state => state.user.profile)

  return <Page>{profile ? `Hello, ${profile.username}` : 'Index'}</Page>
}
