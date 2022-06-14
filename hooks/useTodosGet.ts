import useSWR from 'swr'
import { Todo } from '../interfaces'

type ReturnObj = {
  data: Todo[]
  error: Error
}

function useTodosGet(): ReturnObj {
  const { data, error } = useSWR<Todo[], Error>(
    '/api/todos',
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  )

  return { data, error }
}

export { useTodosGet }
