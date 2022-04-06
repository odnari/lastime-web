import Button from '../../components/Button'
import EntriesList from './EntriesList'
import { useState } from 'react'
import Modal from '../../components/Modal'
import AddTimeEntry from './AddTimeEntry'

export default function Entries({item, className}) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return <div className='relative'>
    <Button color="default" className="absolute z-10 right-2 top-2 px-2.5 py-1 rounded-full" onClick={onAdd}>+</Button>
    <EntriesList className={className} entries={item.times}/>
    {
      item && showAddModal && <Modal title="Add TimeItem Entry" onClose={onClose}>
        <AddTimeEntry id={item.id}/>
      </Modal>
    }
  </div>
}
