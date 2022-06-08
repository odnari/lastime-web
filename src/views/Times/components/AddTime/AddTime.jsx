import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { createTime } from '@/store/timesSlice'

export default function AddTime({onClose}) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const createStatusLoading = useSelector(state => state.times.loading.create)

  const onSubmit = (data) => {
    dispatch(createTime(data))
      .then(onClose)
  }

  return <form className='w-72' onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Name"
      required
      autoComplete='off'
      register={register('name', { required: 'Field is required' })}
      error={errors.name?.message}
    />
    <div className="mt-1 text-right">
      <Button type="submit" color="success" disabled={createStatusLoading}>
        {createStatusLoading ? 'Loading...' : 'Create'}
      </Button>
    </div>
  </form>
}
