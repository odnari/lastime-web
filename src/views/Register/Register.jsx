import { useForm } from 'react-hook-form'
import Page from '../../components/Page'
import Link from '../../components/Link'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { createUser } from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import useAuthenticatedRedirect from '../../hooks/useAuthenticatedRedirect'

export default function Login() {
  useAuthenticatedRedirect()

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(createUser({
      username: data.username,
      password: data.password,
    }))
  }

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card
        title={'Register'}
        footer={<span className="leading-none md:text-xs">Already have an account?
          <Link className="ml-1" href={'/auth/login'}>Login</Link>
        </span>}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Username" register={register('username')}/>
          <Input label="Password" type="password" register={register('password')}/>
          <Input label="Repeat password" type="password" register={register('passwordConfirm')}/>
          <div className="mt-1 text-right">
            <Button type="submit" color="success">Join</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
