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
  return <h1 className="text-3xl font-bold underline py-6">{children}</h1>
}

function H2({ children }: Props) {
  return <h2 className="text-2xl font-bold py-4">{children}</h2>
}

export { SubmitButton, H1, H2 }
