import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from '../../components/Page'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import AddTime from './AddTime'
import { fetchTimes } from '../../store/timesSlice'
import Time from './Time'
import Entries from './Entries'

export default function Times() {
  const dispatch = useDispatch()
  const [showAddModal, setShowAddModal] = useState(false)
  const [displayItemId, setDisplayItemId] = useState(null)
  const items = useSelector(state => state.times.items)

  useEffect(() => {
    dispatch(fetchTimes())
  }, [])

  useEffect(() => {
    if (!displayItemId && items.length) {
      setDisplayItemId(0)
    }
  }, [items, displayItemId])

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)
  const onTimeSelect = useCallback((index) => setDisplayItemId(index), [])

  return <Page>
    <section className='mt-8 container flex justify-center'>
      <div className='p-4 w-full sm:w-3/4 lg:w-1/2 xl:w-2/4 bg-white rounded-lg border shadow-md sm:px-6 dark:bg-stone-800 dark:border-stone-700'>
        <div className='divide-y divide-stone-200 dark:divide-stone-700'>
          {items.map((i, index) => <Time key={i.id} onClick={onTimeSelect} index={index} time={i} active={index === displayItemId}/>)}
        </div>
        <Button color="info" className='w-full mt-4' onClick={onAdd}>Add New</Button>
      </div>
    </section>
    {
      showAddModal && <Modal title="Add Last Time" onClose={onClose}>
        <AddTime/>
      </Modal>
    }
  </Page>
}
