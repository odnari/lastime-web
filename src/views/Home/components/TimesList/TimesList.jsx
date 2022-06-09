import { memo } from 'react'
import TimeItem from '../TimeItem'

export default memo(function TimesList({ items, onClick, selectedIndex }) {
  return items.map((i, index) => (
    <TimeItem
      key={i.id}
      onClick={onClick}
      index={index}
      time={i}
      active={index === selectedIndex}
    />
  ))
})
