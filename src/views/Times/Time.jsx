import classnames from 'classnames'

const defaultClasses = 'block w-full px-2 py-1 overflow-hidden border-r border-b hover:bg-stone-100 border-stone-100'

export default function Time({ time, onClick, active }) {
  const classes = classnames(defaultClasses, {
    'bg-stone-100': active
  })

  return <button
    onClick={() => onClick(time)}
    className={classes}
    type="button"
  >
    {time.name}
  </button>
}
