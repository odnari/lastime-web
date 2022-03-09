import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'

export default function AddTime() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // dispatch(data)
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Name"
      register={register('name', { required: 'Field is required' })}
      error={errors.name?.message}
    />
    <Input
      label="Note"
      register={register('note', { maxLength: 1024 })}
      error={errors.note?.message}
    />
    <div className="mt-1 text-right">
      <Button type="submit" color="success">Create</Button>
    </div>
  </form>
}
