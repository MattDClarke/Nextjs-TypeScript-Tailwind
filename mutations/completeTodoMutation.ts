import { mutate } from 'swr'

async function completeTodoMutation(id: number) {
  const options = { optimisticData: id, rollbackOnError: true }
  await mutate(
    '/api/complete-todo',
    fetch('/api/complete-todo', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }),
    options
  )
}

export { completeTodoMutation }
