import Link from '../Link'
import useIsAuthenticated from '../../hooks/useIsAuthenticated'
import { useSelector } from 'react-redux'
import { defaultAuthHome } from '../../config'
import GeneratedAvatar from '../GeneratedAvatar'

export default function Header() {
  const isAuthenticated = useIsAuthenticated()
  const profile = useSelector(({ user }) => user.profile)

  return <nav className="flex items-center justify-between w-full border-b bg-white px-2 py-2">
    <div>
      <Link href={isAuthenticated ? defaultAuthHome : '/'} className="no-underline !text-gray-900 flex font-bold">
        <span className="leading-none ml-1">lastime</span>
      </Link>
    </div>
    <div className="text-sm">
      {
        isAuthenticated
          ? <Link href="/profile" title={profile.username} activeClasses="border-2 !border-blue-200"
                  className="border-0 cursor-pointer flex items-center no-underline">
            <GeneratedAvatar className='!w-6 !h-6' colorKey={profile.username}>{profile.username[0]}</GeneratedAvatar>
          </Link>
          :
          <Link href="/auth/login" className="no-underline !text-gray-900" activeClasses="!text-pink-800">
            <span className="-mt-1 leading-none ">Login</span>
          </Link>
      }
    </div>
  </nav>
}
