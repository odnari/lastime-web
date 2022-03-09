export default function EntriesList({entries}) {
  return entries.map(t =>
    <div className='mb-2 px-2 py-1 rounded-lg shadow-stone-200 overflow-hidden border border-stone-200'>
      {t}
    </div>
  )
}
