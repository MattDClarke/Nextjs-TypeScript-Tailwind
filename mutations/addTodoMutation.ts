import { mutate } from 'swr'
import { Todo } from '../interfaces'

async function addTodoMutation(todo: Todo) {
  const options = { optimisticData: todo, rollbackOnError: true }
  await mutate(
    '/api/add-todo',
    fetch('/api/add-todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }),
    options
  )
}

export { addTodoMutation }
