import { useState } from 'react'
import Page from '../../components/Page'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import AddTime from './AddTime'
import Time from './Time'

export default function TimesList({ items, onClick, selectedIndex }) {
  const [showAddModal, setShowAddModal] = useState(false)

  const onAdd = () => setShowAddModal(true)
  const onClose = () => setShowAddModal(false)

  return (
    <>
      <div className="divide-y divide-stone-200 dark:divide-stone-700">
        {items.map((i, index) => (
          <Time
            key={i.id}
            onClick={onClick}
            index={index}
            time={i}
            active={index === selectedIndex}
          />
        ))}
      </div>
      <Button color="info" className="w-full mt-4" onClick={onAdd}>Add New</Button>
      {
        showAddModal && <Modal title="Add Last Time" onClose={onClose}>
          <AddTime/>
        </Modal>
      }
    </>
  )


}
