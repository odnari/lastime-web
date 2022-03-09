import Button from '../../components/Button'
import EntriesList from './EntriesList'
import { useState } from 'react'
import Modal from '../../components/Modal'
import AddTimeEntry from './AddTimeEntry'

export default function Entries({item}) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return <>
    <Button color="default" className="mt-1 rounded-md w-full" onClick={onAdd}>Add new time entry</Button>
    {item && <EntriesList entries={item.times}/>}
    {
      item && showAddModal && <Modal title="Add Time Entry" onClose={onClose}>
        <AddTimeEntry id={item.id}/>
      </Modal>
    }
  </>
}
