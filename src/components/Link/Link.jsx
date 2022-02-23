import {Link as RouterLink, NavLink} from 'react-router-dom'

const baseClasses = 'flex-inline underline decoration-solid items-center text-pink-800 hover:text-pink-700'

export default function Link({href, children, isExternal, activeClasses, className, ...props}) {
  const classes = className ? `${baseClasses} ${className}` : baseClasses

  if (isExternal) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }

  if (activeClasses) {
    return <NavLink to={href} className={({isActive}) => isActive ? `${classes} ${activeClasses}` : classes}>{children}</NavLink>
  }

  return <RouterLink to={href} className={classes}>{children}</RouterLink>
}
