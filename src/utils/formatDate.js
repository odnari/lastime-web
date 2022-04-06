import { formatDistanceToNow } from 'date-fns'

export const formatDateDistanceToNow = (date) => {
  if (date) {
    const dateObject = date instanceof Date ? Date : new Date(date)

    return formatDistanceToNow(dateObject)
  } else {
    return ''
  }
}
