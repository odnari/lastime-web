import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { createTimeEntry } from '../../store/timesSlice'

export default function AddTimeEntry({ id }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    dispatch(createTimeEntry({id, ...data }))
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Date"
      register={register('date', { required: 'Field is required' })}
      error={errors.date?.message}
      type='datetime-local'
      required
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
