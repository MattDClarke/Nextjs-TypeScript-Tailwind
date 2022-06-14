import React from 'react'
import { Todo } from '../../interfaces'
import { H2 } from '../Tailwind/TailwindComponents'
import { SingleTodo } from './SingleTodo'

type Props = {
  todos: Todo[]
  editTodo: (id: number, text: string) => void
  handleComplete: (id: number) => void
  handleDelete: (id: number) => void
}

function TodoList({ todos, editTodo, handleComplete, handleDelete }: Props) {
  return (
    <div className="flex flex-wrap flex-col md:flex-row">
      <div className="flex-1 bg-yellow-100 px-3 py-3 rounded">
        <H2>Active tasks</H2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))}
      </div>
      <div className="flex-1 bg-red-100 px-3 py-3 rounded">
        <H2>Completed tasks</H2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  )
}

export { TodoList }
