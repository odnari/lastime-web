import Page from '../../components/Page'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

export default function Profile() {
  const { register, handleSubmit } = useForm()
  const profile = useSelector(({ user }) => user.profile)

  const onSubmit = (data) => {
    console.log('update Profile')
  }

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card title={profile.username}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Current password" type="password" register={register('currentPassword')}/>
          <Input label="New Password" type="password" register={register('password')}/>
          <Input label="Repeat new password" type="password" register={register('passwordConfirm')}/>
          <div className="mt-1 text-right">
            <Button type="submit" color="success">Save</Button>
          </div>
        </form>
      </Card>
    </section>
  </Page>
}
