import React, { useState } from 'react'
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useToggleState } from '../../hooks/useToggleState'
import { Todo } from '../../interfaces'

type Props = {
  index: number
  todos: Todo[]
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo({ index, todos, todo, setTodos }: Props) {
  const [isEditing, toggleIsEditing] = useToggleState(false)
  const [editTodo, setEditTodo] = useState(todo.todo)
  console.log(index)
  const handleEdit = (id: number) => {
    setTodos(
      todos.map((tdo) => (tdo.id === id ? { ...tdo, todo: editTodo } : tdo))
    )
  }
  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    handleEdit(id)
    toggleIsEditing()
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((tdo) => tdo.id !== id))
  }

  const handleDone = (id: number) => {
    setTodos(
      todos.map((tdo) =>
        tdo.id === id ? { ...tdo, isDone: !tdo.isDone } : tdo
      )
    )
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, todo.id)}
      className="max-w-md flex rounded shadow-sm px-2 py-2"
    >
      {isEditing ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="flex-grow"
        />
      ) : (
        <span
          style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
          className="flex-grow"
        >
          {todo.todo}
        </span>
      )}
      <button
        type="button"
        aria-label="Edit todo"
        onClick={() => {
          if (todo.isDone) return
          // save change if edit clicked
          if (isEditing) handleEdit(todo.id)
          toggleIsEditing()
        }}
        disabled={todo.isDone}
        className="hover:text-primary focus:text-primary disabled:opacity-10 text-2xl"
      >
        {!isEditing ? <AiFillEdit /> : <AiOutlineCheckCircle />}
      </button>
      <button
        type="button"
        aria-label="Delete todo"
        onClick={() => handleDelete(todo.id)}
        className="hover:text-red-700 focus:text-red-700 text-2xl"
      >
        <AiFillDelete />
      </button>
      {!isEditing && (
        <button
          type="button"
          aria-label="Mark todo as complete"
          onClick={() => handleDone(todo.id)}
          className="hover:text-green-600 focus:text-green-600 text-2xl"
        >
          <MdDone />
        </button>
      )}
    </form>
  )
}

export { SingleTodo }
