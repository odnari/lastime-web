import Header from '../Header'

export default function Page({children, className = ''}) {
  return <>
    <Header />
    <div className={`container mx-auto mt-4 px-4 md:px-0 ${className}`}>{children}</div>
  </>
}
