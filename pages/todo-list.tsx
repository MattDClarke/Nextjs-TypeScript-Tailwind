import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TodoList } from '../components/TodoList/TodoList'
import { InputForm } from '../components/TodoList/InputForm'
import { H1 } from '../components/Tailwind/TailwindComponents'
import { useTodos } from '../hooks/useTodos'
import { Todo } from '../interfaces'
import { useTodosGet } from '../hooks/useTodosGet'

export default function TodoListPage() {
  const [todo, setTodo] = useState('')
  const { data, error } = useTodosGet()
  const { todos, addTodo, editTodo, removeTodo, completeTodo } = useTodos([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  console.log({ data }, todos)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      addTodo(todo)
      setTodo('')
    }
  }

  return (
    <Layout title="TODO List | TODO list app">
      <H1>TODO List</H1>
      {error && <div>Failed to load</div>}
      {!error && !data && <div>Loading...</div>}
      {!error && data && (
        <>
          <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={data}
            editTodo={editTodo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </>
      )}
    </Layout>
  )
}
