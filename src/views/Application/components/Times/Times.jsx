import { memo, useState } from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import TimeForm from '../TimeForm'
import TimesList from '../TimesList'

export default memo(function Times({ items, onClick, selectedIndex }) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return (
    <>
      <div className="divide-y divide-stone-200 border-b border-stone-200">
        <TimesList items={items} onClick={onClick} selectedIndex={selectedIndex}/>
      </div>
      <div className="p-2 md:p-4 text-center">
        <Button color="info" onClick={onAdd}>Add New</Button>
      </div>
      {
        showAddModal && <Modal title="Add Last TimeItem" onClose={onClose}>
          <TimeForm onClose={onClose}/>
        </Modal>
      }
    </>
  )
})
