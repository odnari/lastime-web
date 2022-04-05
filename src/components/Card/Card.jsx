import clsx from 'clsx'

export default function Card({ title, children, footer, topRight = null, className = '', }) {
  const titleContainerClasses = clsx(
    'select-none w-full font-medium bg-stone-50 text-gray-700',
    {
      'py-3 px-5 bg-stone-50 text-center': !topRight,
      'py-3 pl-5 pr-2 flex justify-between items-center': Boolean(topRight),
    }
  )

  const containerClasses = clsx(
    'shadow-md rounded-md shadow-stone-200 overflow-hidden border border-stone-200 w-full md:w-64',
    className
  )

  return <div className={containerClasses}>
    {
      (topRight || title) && <div className={titleContainerClasses}>
        <span>{title}</span>
        {topRight && <div className="ml-2">{topRight}</div>}
      </div>
    }

    <div className="p-5 bg-white">
      {children}
    </div>

    {footer && <div className="text-center py-2 px-4 bg-stone-50">{footer}</div>}
  </div>
}
