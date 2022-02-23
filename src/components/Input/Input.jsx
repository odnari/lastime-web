import classNames from 'classnames'

const baseClasses = 'mt-1 rounded-md border px-3 py-1 transition-colors focus:outline-none focus:border-stone-400 w-full sm:text-sm'
const labelBaseClasses = 'block text-sm font-medium'
const errorBaseClasses = 'block text-xs text-rose-600 mb-1'

export default function Input({label, disabled, error, register, ...props}) {
  const inputClasses = classNames(baseClasses, {
    'border-stone-300 cursor-not-allowed text-stone-600 bg-stone-100 opacity-70': disabled,
    'border-rose-400': Boolean(error)
  })
  const labelClasses = classNames(labelBaseClasses, {
    'text-stone-400': disabled,
    'text-rose-600': Boolean(error),
    'text-zinc-700': !disabled && !error,
  })

  return <label>
    {label && <span className={labelClasses}>{label}</span>}
    <input disabled={disabled} className={inputClasses} {...register} {...props}/>
    <span className={errorBaseClasses}>{error}&nbsp;</span>
  </label>
}
