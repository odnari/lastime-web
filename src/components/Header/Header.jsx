import { useSelector } from 'react-redux'
import Link from '../Link'
import GeneratedAvatar from '../GeneratedAvatar'
import useIsAuthenticated from '@/hooks/useIsAuthenticated'
import { routes } from '../../config'

export default function Header() {
  const isAuthenticated = useIsAuthenticated()
  const profile = useSelector(({ user }) => user.profile)

  return <nav className="flex items-center justify-between w-full border-b bg-white px-2 py-2">
    <div>
      <Link href={isAuthenticated ? routes.home : routes.index} className="no-underline !text-gray-900 flex font-bold">
        <span className="leading-none ml-1">lastime</span>
      </Link>
    </div>
    <div className="text-sm">
      {
        isAuthenticated
          ? <Link href={routes.profile} title={profile.username} activeClasses="border-2 !border-blue-200"
                  className="border-0 cursor-pointer flex items-center no-underline">
            <GeneratedAvatar size='6' colorKey={profile.username}>{profile.username[0]}</GeneratedAvatar>
          </Link>
          :
          <Link href={routes.auth.login} className="no-underline !text-gray-900" activeClasses="!text-pink-800">
            <span className="-mt-1 leading-none ">Login</span>
          </Link>
      }
    </div>
  </nav>
}
