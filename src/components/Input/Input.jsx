import clsx from 'clsx'

const baseClasses = 'mt-1 rounded-md border px-3 py-1 transition-colors focus:outline-none focus:border-stone-400 w-full sm:text-sm'
const labelBaseClasses = 'block text-sm font-medium'
const errorBaseClasses = 'block text-xs text-rose-600 mb-1'

export default function Input({label, disabled, error, register, required, ...props}) {
  const inputClasses = clsx(baseClasses, {
    'border-stone-300 cursor-not-allowed text-stone-600 bg-stone-100 opacity-70': disabled,
    'border-rose-400': Boolean(error)
  })
  const labelClasses = clsx(labelBaseClasses, {
    'text-stone-400': disabled,
    'text-rose-600': Boolean(error),
    'text-zinc-700': !disabled && !error,
  })

  return <label>
    {label && <span className={labelClasses}>
      {label}
      {required && <span className='text-red-600 pl-0.5 font-bold'>*</span>}
    </span>}
    <input disabled={disabled} className={inputClasses} {...register} {...props}/>
    <span className={errorBaseClasses}>{error}&nbsp;</span>
  </label>
}
