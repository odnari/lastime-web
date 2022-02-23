import { useSelector } from 'react-redux'

export default () => {
  return useSelector(state => Boolean(state.user.token))
}
