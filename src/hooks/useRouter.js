// Custom `useRouter` hook taken from https://usehooks.com/useRouter/

import { useMemo } from 'react'
import { 
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import * as queryString from 'query-string'

const useRouter = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      history,
      location,
      match,
      pathname: location.pathname,
      push: history.push,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      replace: history.replace,
    }
  }, [params, match, location, history])
}

export default useRouter