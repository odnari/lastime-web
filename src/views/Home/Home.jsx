import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from '@/components/Page'
import { fetchTimes } from '@/store/timesSlice'
import TimesList from './components/Times'
import Entries from './components/Entries'

export default function Home() {
  const dispatch = useDispatch()
  const [displayItemId, setDisplayItemId] = useState(0)
  const items = useSelector(state => state.times.items)
  const currentItem = items[displayItemId]

  useEffect(() => {
    dispatch(fetchTimes())
  }, [])

  const onTimeSelect = useCallback((index) => setDisplayItemId(index), [])

  return <Page>
    <div className="flex flex-wrap items-start justify-center">
      <div className="p-4 w-full md:w-3/4 lg:w-1/2 xl:w-2/4">
        <div className="text-2xl font-medium mb-4">Last Time I</div>
        <div className="max-h-80 md:max-h-max flex flex-col bg-white rounded-lg border shadow-md dark:bg-stone-800 dark:border-stone-700">
          <TimesList items={items} onClick={onTimeSelect} selectedIndex={displayItemId}/>
        </div>
      </div>
      <div className="p-4 w-full md:w-3/4 lg:w-1/2 xl:w-2/4">
        {
          currentItem &&
          <>
            <div className="text-2xl font-medium mb-4">History for "{currentItem.name}"</div>
            <div className="bg-white rounded-lg border shadow-md pl-5 dark:bg-stone-800 dark:border-stone-700">
              <Entries className="py-3 pr-5" item={currentItem}/>
            </div>
          </>
        }
      </div>
    </div>
  </Page>
}
