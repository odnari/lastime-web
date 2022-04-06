export default function DropdownItem({children, onClick}) {
  return (
    <li>
      <button type='button' onClick={onClick} className="block border-0 py-2 px-4 w-full text-left hover:bg-gray-100">{children}</button>
    </li>
  )
}
