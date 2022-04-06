import { useEffect, useRef } from 'react'

const useCallbackOnFulfill = (callback, loadingStatus) => {
  const savedCallback = useRef(callback)
  const isMounted = useRef(false)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (isMounted.current && loadingStatus === null) {
      callback()
    }

    if (!isMounted.current) {
      isMounted.current = true
    }
  }, [loadingStatus])
}

export default useCallbackOnFulfill
