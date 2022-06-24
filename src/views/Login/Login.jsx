import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Page from '@/components/Page'
import Link from '@/components/Link'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { loginUser } from '@/store/userSlice'
import { routes } from '../../config'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then(() => navigate(routes.home))
  }

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card
        title="Login"
        footer={<span className="leading-none md:text-xs">Don't have an account?
          <Link className="ml-1" href={routes.auth.signup}>Join</Link>
        </span>}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            autoComplete='off'
            register={register('username', { required: 'Field is required' })}
            error={errors.username?.message}
          />
          <Input
            label="Password"
            type="password"
            register={register('password', { required: 'Field is required' })}
            error={errors.password?.message}
          />
          <div className="mt-1 text-right">
            <Button type="submit" color="success">Submit</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
