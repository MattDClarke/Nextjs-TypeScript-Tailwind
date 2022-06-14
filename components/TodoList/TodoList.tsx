import React from 'react'
import { Todo } from '../../interfaces'
import { H2 } from '../Tailwind/TailwindComponents'
import { SingleTodo } from './SingleTodo'

type Props = {
  todos: Todo[]
  editTodo: (id: number, text: string) => void
  removeTodo: (id: number) => void
  completeTodo: (id: number) => void
  // completedTodos: Todo[]
  // setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({
  todos,
  editTodo,
  removeTodo,
  completeTodo,
}: // completedTodos,
// setCompletedTodos,
Props) {
  return (
    <div className="flex flex-wrap flex-col md:flex-row ">
      <div className="flex-1 bg-yellow-100 px-1 rounded">
        <H2>Active tasks</H2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo, index) => (
            <SingleTodo
              key={todo.id}
              index={index}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <div className="flex-1 bg-red-100 px-1 rounded">
        <H2>Completed tasks</H2>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo, index) => (
            <SingleTodo
              key={todo.id}
              index={index}
              todo={todo}
              editTodo={editTodo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
    </div>
  )
}

export { TodoList }
