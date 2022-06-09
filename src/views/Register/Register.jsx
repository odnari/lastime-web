import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Page from '@/components/Page'
import Link from '@/components/Link'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { createUser } from '@/store/userSlice'
import useAuthenticatedRedirect from '@/hooks/useAuthenticatedRedirect'
import { routes } from '../../config'

export default function Login() {
  useAuthenticatedRedirect()

  const { register, handleSubmit, formState: { errors }, watch } = useForm()
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
        title="Register"
        footer={<span className="leading-none md:text-xs">Already have an account?
          <Link className="ml-1" href={routes.auth.login}>Login</Link>
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
          <Input
            label="Repeat password"
            type="password"
            register={register('repeatPassword', {
              required: 'Field is required',
              validate: {
                sameAsPassword: v => watch('password') === v || 'Passwords are not the same'
              }
            })}
            error={errors.repeatPassword?.message}
          />
          <div className="mt-1 text-right">
            <Button type="submit" color="success">Join</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
