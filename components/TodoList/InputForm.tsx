import React from 'react'
import { SubmitButton } from '../Tailwind/TailwindComponents'

type Props = {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent, newTodo: string) => void
}

function InputForm({ todo, setTodo, handleAdd }: Props) {
  return (
    <form
      onSubmit={(e) => handleAdd(e, todo)}
      className="flex h-10 mb-4 max-w-sm"
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
        className="h-full p-2 mr-4 flex-grow rounded shadow-md"
        maxLength={50}
      />
      <SubmitButton>Add</SubmitButton>
    </form>
  )
}

export { InputForm }
