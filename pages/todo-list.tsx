import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TodoList } from '../components/TodoList/TodoList'
import { InputForm } from '../components/TodoList/InputForm'
import { Todo } from '../interfaces'
import { H1 } from '../components/Tailwind/TailwindComponents'

export default function TodoListPage() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }
  return (
    <Layout title="TODO List | TODO list app">
      <H1>TODO List</H1>
      <InputForm todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Layout>
  )
}
