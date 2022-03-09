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
      setDisplayItemId(items[0].id)
    }
  }, [items, displayItemId])

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)
  const onTimeSelect = useCallback((item) => setDisplayItemId(item.id), [])

  return <Page>
    <section className='mt-8 container border-t border-stone-100 shadow-stone-200 flex flex-wrap shadow-md rounded-lg'>
      <div className='sm:w-12 md:w-4/12'>
        {items.map(i => <Time key={i.id} onClick={onTimeSelect} time={i} active={i.id === displayItemId}/>)}
        <Button color="info" className="mr-2 rounded-none rounded-bl w-full" onClick={onAdd}>Add new</Button>
      </div>
      <div className="sm:w-12 md:w-8/12 px-2 py-1">
        <Entries item={items[displayItemId]}/>
      </div>
    </section>
    {
      showAddModal && <Modal title="Add Last Time" onClose={onClose}>
        <AddTime/>
      </Modal>
    }
  </Page>
}
