import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Page from '../../components/Page'
import Link from '../../components/Link'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginUser } from '../../store/userSlice'
import useAuthenticatedRedirect from '../../hooks/useAuthenticatedRedirect'

export default function Login() {
  useAuthenticatedRedirect()

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(loginUser(data))
  }

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card
        title={'Login'}
        footer={<span className="leading-none md:text-xs">Don't have an account?
          <Link className='ml-1' href={'/auth/join'}>Join</Link>
        </span>}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Username" register={register('username')}/>
          <Input label="Password" type="password" register={register('password')}/>
          <div className="mt-1 text-right">
            <Button type="submit" color="success">Submit</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
