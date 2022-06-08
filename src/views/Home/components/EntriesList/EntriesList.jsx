import { memo } from 'react'
import clsx from 'clsx'

const historyItemClasses = 'mb-4 ml-4 last-of-type:mb-0'
const historyDotClasses = 'absolute w-2.5 h-2.5 bg-stone-200 rounded-full mt-2 -left-1.5 border border-white'
const historyTimeClasses = 'mb-1 text-xs font-normal leading-none text-stone-800'
const historyNoteClasses = 'text-base font-normal text-stone-700'

const EntryItem = memo(function EntryItem({ item }) {
  const formattedDate = new Date(item.date).toLocaleString()

  return <li className={historyItemClasses}>
    <div className={historyDotClasses}/>
    <time className={historyTimeClasses}>{formattedDate}</time>
    {Boolean(item.note) && <p className={historyNoteClasses}>{item.note}</p>}
  </li>
})


export default memo(function EntriesList({className, entries}) {
  const classes = clsx(className, 'relative border-l border-stone-200 dark:border-stone-700')

  if (!entries.length) return <div className="flex text-2xl text-gray-400 items-center justify-center h-full py-8">no
    history yet...</div>

  return <ol className={classes}>
    {entries.map((t, index) => <EntryItem key={t.date + index} item={t}/>)}
  </ol>
})
