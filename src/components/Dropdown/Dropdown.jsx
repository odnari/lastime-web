import clsx from 'clsx'
import { useCallback, useState } from 'react'
import Button from '../Button'
import DropdownItem from './DropdownItem'

export default function Dropdown({ children, renderToggle, disabled, closeOnClick = true, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = useCallback(() => !disabled && setIsOpen(!isOpen), [isOpen])
  const onDropdownClick = () => closeOnClick && setIsOpen(false)
  const dropdownClasses = clsx(
    'absolute right-0 z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700',
    {
      'hidden': !isOpen
    },
    className
  )

  return <div className='relative'>
    {
      renderToggle
        ? renderToggle(onToggle)
        : <Button onClick={onToggle}>Toggle</Button>
    }
    <div className={dropdownClasses} onClick={onDropdownClick}>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        {children}
      </ul>
    </div>
  </div>
}

Dropdown.Item = DropdownItem
