import {useMemo, memo} from 'react'
import clsx from 'clsx'
import Button from '@/components/Button'
import GeneratedAvatar from '@/components/GeneratedAvatar'
import Dropdown from '@/components/Dropdown'
import { formatDateDistanceToNow } from '@/utils/formatDate'

export default memo(function TimeItem({ time, onClick, active, index }) {
  const containerClasses = clsx('w-full text-left hover:bg-stone-50', {
    'bg-stone-50': active,
  })
  const lastDate = time.entries.length > 0 && time.entries[0].date
  const dateDistance = useMemo(() => formatDateDistanceToNow(lastDate), [lastDate])

  return <div className={containerClasses}>
    <div className="flex items-center space-x-4">
      <div onClick={() => onClick(index)} className="py-2 px-3 md:py-4 cursor-pointer flex flex-1 min-w-0">
        <div className="flex-shrink-0 flex items-center">
          <GeneratedAvatar colorKey={time.name} size='6' className='md:w-8 md:h-8'>
            {
              time.image
                ? <img className="w-6 h-6 rounded-full" src={time.image} alt={time.image}/>
                : time.name[0]
            }
          </GeneratedAvatar>
        </div>
        <div className="ml-2.5 md:ml-4 flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {time.name}
          </p>
          {
            dateDistance.length > 0 &&
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {dateDistance} ago
            </p>
          }
        </div>
      </div>
      <div className="pr-2.5 md:pr-4">
        <Dropdown
          renderToggle={(onClick) => <Button className="px-2" color="default" onClick={onClick}>⋮</Button>}
        >
          <Dropdown.Item>
            Edit
          </Dropdown.Item>
          <Dropdown.Item>
            Delete
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  </div>
})
