import React from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

function InputForm({ todo, setTodo, handleAdd }: Props) {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export { InputForm }
