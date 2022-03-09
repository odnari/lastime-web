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
    <section style={{minHeight: '40vh'}} className='mt-8 container border-t border-stone-100 shadow-stone-200 flex flex-wrap shadow-md rounded-lg'>
      <div className='w-full md:w-4/12 flex flex-col'>
        <div className='flex-grow'>
          {items.map((i, index) => <Time key={i.id} onClick={onTimeSelect} index={index} time={i} active={index === displayItemId}/>)}
        </div>
        <Button color="info" className="mr-2 rounded-none md:rounded-bl w-full" onClick={onAdd}>Add new</Button>
      </div>
      <div className="w-full md:w-8/12 px-2 pt-1 pb-2">
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
