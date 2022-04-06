import { useForm } from 'react-hook-form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { createTimeEntry } from '../../store/timesSlice'
import useCallbackOnFulfill from '../../hooks/useCallbackOnFulfill'

export default function AddTimeEntry({ id, onClose }) {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const createStatusLoading = useSelector(state => state.times.loading.entryCreate)

  useCallbackOnFulfill(onClose, createStatusLoading)

  const onSubmit = (data) => {
    dispatch(createTimeEntry({id, ...data }))
  }

  return <form onSubmit={handleSubmit(onSubmit)}>
    <Input
      label="Date"
      autoComplete='off'
      register={register('date', { required: 'Field is required' })}
      error={errors.date?.message}
      type='datetime-local'
      required
    />
    <Input
      label="Note"
      autoComplete='off'
      register={register('note', { maxLength: 1024 })}
      error={errors.note?.message}
    />
    <div className="mt-1 text-right">
      <Button type="submit" color="success">Create</Button>
    </div>
  </form>
}
