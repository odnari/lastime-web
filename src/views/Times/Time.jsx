import Button from '../../components/Button'
import GeneratedAvatar from '../../components/GeneratedAvatar'
import clsx from 'clsx'
import Dropdown from '../../components/Dropdown'

export default function Time({ time, onClick, active, index }) {
  const containerClasses = clsx('py-4 px-3 w-full text-left hover:bg-stone-50', {
    'bg-stone-50': active,
  })

  return <div
    className={containerClasses}
  >
    <div className="flex items-center space-x-4 ">
      <div onClick={() => onClick(index)} className="cursor-pointer flex flex-1 min-w-0">
        <div className="flex-shrink-0 flex items-center">
          {
            time.image
              ? <img className="w-8 h-8 rounded-full" src={time.image} alt={time.image}/>
              : <GeneratedAvatar colorKey={time.name}>{time.name[0]}</GeneratedAvatar>
          }
        </div>
        <div className="ml-4 flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {time.name}
          </p>
          {
            time.times.length > 0 &&
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {time.times[0].date}
            </p>
          }
        </div>
      </div>
      <Dropdown renderToggle={(onClick) => <Button className='px-2' color='default' onClick={onClick}>⋮</Button>}>
        <Dropdown.Item>
          Edit
        </Dropdown.Item>
        <Dropdown.Item>
          Delete
        </Dropdown.Item>
      </Dropdown>
    </div>
  </div>
}
