import React from 'react'
import { Todo } from '../../interfaces'
import { SingleTodo } from './SingleTodo'

type Props = {
  todos: Todo[]
  editTodo: (id: number, text: string) => void
  removeTodo: (id: number) => void
  completeTodo: (id: number) => void
}

function TodoList({ todos, editTodo, removeTodo, completeTodo }: Props) {
  return (
    <>
      {todos.map((todo, index) => (
        <SingleTodo
          key={todo.id}
          index={index}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </>
  )
}

export { TodoList }
