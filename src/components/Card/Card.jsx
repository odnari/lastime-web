import classnames from 'classnames'

export default function Card({ title, children, footer, topRight = null }) {
  const titleContainerClasses = classnames({
    'select-none w-full font-medium bg-stone-50 text-gray-700': true,
    'py-3 px-5 bg-stone-50 text-center': !topRight,
    'py-3 pl-5 pr-2 flex justify-between items-center': Boolean(topRight),
  })

  return <div
    className="shadow-md rounded-md shadow-stone-200 overflow-hidden border border-stone-200 w-64"
  >
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
