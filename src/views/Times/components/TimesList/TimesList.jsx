import { useState, memo } from 'react'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import AddTime from '../AddTime'
import TimeItem from '../TimeItem'

export default memo(function TimesList({ items, onClick, selectedIndex }) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return (
    <>
      <div className="overflow-auto divide-y divide-stone-200 border-b border-stone-200">
        {items.map((i, index) => (
          <TimeItem
            key={i.id}
            onClick={onClick}
            index={index}
            time={i}
            active={index === selectedIndex}
          />
        ))}
      </div>
      <div className="p-2 md:p-4 text-center">
        <Button color="info" onClick={onAdd}>Add New</Button>
      </div>
      {
        showAddModal && <Modal title="Add Last TimeItem" onClose={onClose}>
          <AddTime onClose={onClose}/>
        </Modal>
      }
    </>
  )
})