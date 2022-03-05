import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from '../../components/Page'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import AddTime from './AddTime'
import { fetchTimes } from '../../store/timesSlice'
import Time from './Time'

export default function Times() {
  const dispatch = useDispatch()
  const [showAddModal, setShowAddModal] = useState(false)
  const items = useSelector(state => state.times.items)

  useEffect(() => {
    dispatch(fetchTimes())
  }, [])

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return <Page>
    <section className={'mt-24 flex justify-center'}>
      <Card
        title="Last Times"
        topRight={<Button color="info" className="mr-2" onClick={onAdd}>Add</Button>}
      >
        {items.map(i => <Time key={i.id} time={i}/>)}
      </Card>
    </section>
    {
      showAddModal && <Modal title="Add Last Time" onClose={onClose}>
        <AddTime/>
      </Modal>
    }
  </Page>
}
