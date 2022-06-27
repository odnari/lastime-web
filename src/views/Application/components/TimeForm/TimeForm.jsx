import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { createTime, updateTime } from '@/store/timesSlice'

export default function TimeForm({ onClose, item = {} }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      ...item
    }
  })

  const isUpdating = item.hasOwnProperty('id')
  const loading = useSelector(state => isUpdating ? state.times.loading.update : state.times.loading.create)
  const buttonLabel = isUpdating ? 'Update' : 'Create'

  const onSubmit = (data) => {
    const action = isUpdating ? updateTime : createTime

    dispatch(action(data))
      .then(onClose)
  }

  return <form className="w-72" onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Name"
      required
      autoComplete="off"
      register={register('name', { required: 'Field is required' })}
      error={errors.name?.message}
    />
    <div className="mt-1 text-right">
      <Button type="submit" color="success" disabled={loading}>
        {loading ? 'Loading...' : buttonLabel}
      </Button>
    </div>
  </form>
}
