import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Page from '../../components/Page'
import { fetchTimes } from '../../store/timesSlice'
import EntriesList from './EntriesList'
import TimesList from './TimesList'

export default function Times() {
  const dispatch = useDispatch()
  const [displayItemId, setDisplayItemId] = useState(null)
  const items = useSelector(state => state.times.items)

  useEffect(() => {
    dispatch(fetchTimes())
  }, [])

  useEffect(() => {
    if (!displayItemId && items.length) {
      setDisplayItemId(0)
    }
  }, [items, displayItemId])

  const onTimeSelect = useCallback((index) => setDisplayItemId(index), [])

  return <Page>
    <section className='mt-8 container mx-auto'>
      <div className="flex flex-wrap -m-4 items-start">
        <div className='p-4 w-full sm:w-3/4 lg:w-1/2 xl:w-2/4'>
          <div className="bg-white rounded-lg border shadow-md dark:bg-stone-800 dark:border-stone-700">
            <TimesList items={items} onClick={onTimeSelect} selectedIndex={displayItemId}/>
          </div>
        </div>
        <div className='p-4 w-full sm:w-3/4 lg:w-1/2 xl:w-2/4'>
          <div className='bg-white rounded-lg border shadow-md sm:px-5 dark:bg-stone-800 dark:border-stone-700'>
            {
              items[displayItemId] &&
              <EntriesList className='py-3' entries={items[displayItemId].times} />
            }
          </div>
        </div>
      </div>
    </section>
  </Page>
}
