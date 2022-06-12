type Props = {
  children: React.ReactNode
}

function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="bg-primary hover:opacity-90 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}

function H1({ children }: Props) {
  return (
    <button type="submit" className="text-3xl font-bold underline pb-6">
      {children}
    </button>
  )
}

export { SubmitButton, H1 }
