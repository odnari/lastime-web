import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/Button'
import Page from '@/components/Page'
import Card from '@/components/Card'
import Input from '@/components/Input'
import { logoutUser } from '@/store/userSlice'

export default function Profile() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const profile = useSelector(({ user }) => user.profile)

  const onSubmit = (data) => {
    console.log('update Profile')
  }

  const onLogOut = () => {
    dispatch(logoutUser())
  }

  if (!profile) return null

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card title={profile.username}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Current password" type="password" register={register('currentPassword')}/>
          <Input label="New Password" type="password" register={register('password')}/>
          <Input label="Repeat new password" type="password" register={register('passwordConfirm')}/>
          <div className="mt-1 flex justify-between">
            <Button type="button" color="danger" onClick={onLogOut}>Log Out</Button>
            <Button type="submit" color="success" onClick={onSubmit}>Save</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
