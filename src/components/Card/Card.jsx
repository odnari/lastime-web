export default function Card({ title, children, footer }) {
  return <div
    className="shadow-md rounded-md shadow-stone-200 overflow-hidden border border-stone-200 w-64"
  >
    {title && <div className="text-center py-3 px-5 bg-stone-100">{title}</div>}

    <div className="p-5 bg-white">
      {children}
    </div>

    {footer && <div className="text-center py-2 px-4 bg-stone-100">{footer}</div>}
  </div>
}
