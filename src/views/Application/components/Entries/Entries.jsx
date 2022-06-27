import { useState } from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import EntriesList from '../EntriesList'
import AddTimeEntry from '../AddTimeEntry'
import clsx from 'clsx'

const addButtonClasses = clsx('absolute z-10 leading-none right-2 top-2 px-2.5 py-1 rounded-full w-8 h-8 !p-0')

export default function Entries({ item, className }) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return <div className="relative">
    <Button color="info" className={addButtonClasses} onClick={onAdd}>+</Button>
    <EntriesList className={className} entries={item.entries}/>
    {
      item && showAddModal && <Modal title="Add Time Entry" onClose={onClose}>
        <AddTimeEntry id={item.id} onClose={onClose}/>
      </Modal>
    }
  </div>
}
