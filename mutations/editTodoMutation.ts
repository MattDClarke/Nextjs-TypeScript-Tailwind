import { mutate } from 'swr'

async function editTodoMutation(id: number, newTodo: string) {
  const options = { optimisticData: { id, newTodo }, rollbackOnError: true }
  await mutate(
    '/api/edit-todo',
    fetch('/api/edit-todo', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, newTodo }),
    }),
    options
  )
}

export { editTodoMutation }
