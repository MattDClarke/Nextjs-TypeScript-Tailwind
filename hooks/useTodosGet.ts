import useSWR, { KeyedMutator } from 'swr'
import { Todo } from '../interfaces'

type ReturnObj = {
  data: Todo[]
  error: Error
  mutate: KeyedMutator<Todo[]>
}

function useTodosGet(): ReturnObj {
  const { data, error, mutate } = useSWR<Todo[], Error>(
    '/api/get-todos',
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  )
  return { data, error, mutate }
}

export { useTodosGet }
