import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useToggleState } from '../../hooks/useToggleState'
import { Todo } from '../../interfaces'

type Props = {
  editTodo: (id: number, text: string) => void
  handleComplete: (id: number) => void
  handleDelete: (id: number) => void
  todo: Todo
}

function SingleTodo({ todo, editTodo, handleComplete, handleDelete }: Props) {
  const [isEditing, toggleIsEditing] = useToggleState(false)
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    editTodo(id, editedTodo)
    toggleIsEditing()
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e, todo.id)}
      className="max-w-md flex rounded shadow-sm px-2 py-2 ease-in-out duration-300 hover:scale-105"
    >
      {isEditing ? (
        <input
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          className="flex-grow px-2 py-1"
          ref={inputRef}
        />
      ) : (
        <span
          style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}
          className="flex-grow px-2 py-1"
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
          if (isEditing) editTodo(todo.id, editedTodo)
          toggleIsEditing()
        }}
        disabled={todo.isDone}
        className="hover:text-primary hover: focus:text-primary disabled:opacity-10 text-2xl"
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
          onClick={() => handleComplete(todo.id)}
          className="hover:text-green-600 focus:text-green-600 text-2xl"
        >
          <MdDone />
        </button>
      )}
    </form>
  )
}

export { SingleTodo }
