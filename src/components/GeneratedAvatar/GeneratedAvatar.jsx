import getColorFromString from './getColorFromString'
import { useMemo } from 'react'

export default function GeneratedAvatar({ className = '', colorKey, children }) {
  const backgroundColor = useMemo(() => getColorFromString(colorKey), [colorKey])

  return <div
    style={{ backgroundColor }}
    className={[
      'w-8 h-8 rounded-full leading-none flex justify-center items-center uppercase text-white font-bold',
      className
    ].join(' ')}>
    {children}
  </div>
}
