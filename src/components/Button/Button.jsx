import classNames from 'classnames'

export const colors = {
  default: 'default',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  success: 'success',
}

const baseClasses = 'rounded-md border text-sm px-3 py-1 transition-colors'

const colorsClasses = {
  [colors.default]: 'border-stone-300 cursor-pointer hover:bg-stone-100',
  [colors.warning]: 'border-amber-400 bg-amber-50 cursor-pointer hover:bg-amber-100',
  [colors.danger]: 'border-rose-400 bg-rose-50 cursor-pointer hover:bg-rose-100',
  [colors.success]: 'border-emerald-400 bg-emerald-50 cursor-pointer hover:bg-emerald-100',
  [colors.info]: 'border-sky-400 bg-sky-50 cursor-pointer hover:bg-sky-100',
}

export default function Button({children, disabled, color, onClick, className = '', type = 'button'}) {
  const buttonClasses = classNames(
    baseClasses,
    className,
    {
      'border-zinc-300 cursor-not-allowed text-zinc-600 bg-zinc-100 opacity-70': disabled,
      [colorsClasses[color] || colorsClasses[colors.default]]: !disabled
    },
  )

  return <button onClick={onClick} className={buttonClasses} type={type} disabled={disabled}>
    {children}
  </button>
}
