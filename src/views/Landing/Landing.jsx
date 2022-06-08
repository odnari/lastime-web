import Page from '@/components/Page'
import Link from '@/components/Link'
import useAuthenticatedRedirect from '@/hooks/useAuthenticatedRedirect'

export default function Landing() {
  useAuthenticatedRedirect()

  return <Page className='text-center w-full md:w-1/2'>
    <h2 className='text-3xl mt-20 mb-6'>When was the last time you did something or attended an event?</h2>
    <h3 className='text-xl mb-4'>If you ever wonder the same question, but don’t know the answer. Lastime is for you.</h3>
    <Link href={'/auth/join'}>
      <h3 className='text-xl'>Create an account</h3>
    </Link>
  </Page>
}
