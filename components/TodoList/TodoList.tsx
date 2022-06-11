import React from 'react'
import { Todo } from '../../interfaces'
import { SingleTodo } from './SingleTodo'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({ todos, setTodos }: Props) {
  return (
    <>
      {todos.map((todo, index) => (
        <SingleTodo
          key={todo.id}
          index={index}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </>
  )
}

export { TodoList }
