const EntryItem = ({ item, index }) => {
  const formattedDate = new Date(item.date).toLocaleString()

  return <div className='mt-2 text-sm px-2 py-1 rounded-lg shadow-stone-200 overflow-hidden border border-stone-200'>
    <span className='font-bold'>{index}. </span>
    {formattedDate}
    {Boolean(item.note) && <span className='text-gray-700'> - {item.note}</span>}
  </div>
}

export default function EntriesList({entries}) {

  return entries.map((t, index) => <EntryItem key={t.date + index} index={entries.length - index} item={t} />)
}
