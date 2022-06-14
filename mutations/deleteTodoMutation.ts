import { mutate } from 'swr'

async function deleteTodoMutation(id: number) {
  const options = { optimisticData: id, rollbackOnError: true }
  await mutate(
    '/api/delete-todo',
    fetch('/api/delete-todo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }),
    options
  )
}

export { deleteTodoMutation }
