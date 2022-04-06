import Header from '../Header'
import clsx from 'clsx'

export default function Page({children, className}) {
  const classes = clsx('container mx-auto mt-4 px-4 md:px-0', className)

  return <>
    <Header />
    <div className={classes}>{children}</div>
  </>
}
