import { useMemo } from 'react'
import getColorFromString from './getColorFromString'

export default function GeneratedAvatar({ size = 8, className = '', colorKey, children }) {
  const backgroundColor = useMemo(() => getColorFromString(colorKey), [colorKey])

  return <div
    style={{ backgroundColor }}
    className={[
      `w-${size} h-${size}`,
      'rounded-full leading-none flex justify-center items-center uppercase text-white font-bold',
      className,
    ].join(' ')}>
    {children}
  </div>
}
