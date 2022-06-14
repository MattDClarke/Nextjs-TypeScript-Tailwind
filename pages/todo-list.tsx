import React, { useCallback, useState } from 'react'
import Layout from '../components/Layout'
import { TodoList } from '../components/TodoList/TodoList'
import { InputForm } from '../components/TodoList/InputForm'
import { H1 } from '../components/Tailwind/TailwindComponents'
import { useTodosGet } from '../hooks/useTodosGet'
import { addTodoMutation } from '../mutations/addTodoMutation'
import { deleteTodoMutation } from '../mutations/deleteTodoMutation'
import { completeTodoMutation } from '../mutations/completeTodoMutation'
import { editTodoMutation } from '../mutations/editTodoMutation'

export default function TodoListPage() {
  const [todo, setTodo] = useState('')
  const { data, error, mutate: mutateTodos } = useTodosGet()

  const handleAdd = useCallback(
    async (e: React.FormEvent, newTodo: string) => {
      e.preventDefault()
      if (newTodo === '') return
      const newTodoObj = { id: Date.now(), todo: newTodo, isDone: false }
      await addTodoMutation(newTodoObj)
      mutateTodos([...data, newTodoObj], true)
      setTodo('')
    },
    [data, mutateTodos]
  )
  const handleDelete = useCallback(
    async (delId: number) => {
      await deleteTodoMutation(delId)
      mutateTodos(
        data.filter(({ id }) => id !== delId),
        true
      )
    },
    [data, mutateTodos]
  )

  const handleComplete = useCallback(
    async (completeId: number) => {
      await completeTodoMutation(completeId)
      mutateTodos(
        data.map((item) =>
          item.id === completeId ? { ...item, isDone: !item.isDone } : item
        ),
        true
      )
    },
    [data, mutateTodos]
  )

  const handleEdit = useCallback(
    async (editId: number, newTodo: string) => {
      await editTodoMutation(editId, newTodo)
      mutateTodos(
        data.map((item) =>
          item.id === editId ? { ...item, todo: newTodo } : item
        ),
        true
      )
    },
    [data, mutateTodos]
  )

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
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        </>
      )}
    </Layout>
  )
}
