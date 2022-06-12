import { useCallback, useReducer } from 'react'
import { Todo } from '../interfaces'

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'EDIT'; id: number; text: string }
  | { type: 'REMOVE'; id: number }
  | { type: 'COMPLETE'; id: number }

function useTodos(initialTodos: Todo[]): {
  todos: Todo[]
  addTodo: (text: string) => void
  editTodo: (id: number, text: string) => void
  removeTodo: (id: number) => void
  completeTodo: (id: number) => void
} {
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { id: Date.now(), todo: action.text, isDone: false }]
      case 'EDIT':
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, todo: action.text } : todo
        )
      case 'REMOVE':
        return state.filter(({ id }) => id !== action.id)
      case 'COMPLETE':
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        )
      default:
        throw new Error()
    }
  }, initialTodos)

  const addTodo = useCallback((text: string) => {
    dispatch({
      type: 'ADD',
      text,
    })
  }, [])

  const editTodo = useCallback((id: number, text: string) => {
    dispatch({
      type: 'EDIT',
      id,
      text,
    })
  }, [])

  const removeTodo = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE',
      id,
    })
  }, [])

  const completeTodo = useCallback((id: number) => {
    dispatch({
      type: 'COMPLETE',
      id,
    })
  }, [])

  return { todos, addTodo, editTodo, removeTodo, completeTodo }
}

export { useTodos }
