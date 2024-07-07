import Form from './components/form'

function App() {
  return (
    <div className="bg-slate-900 min-h-dvh text-white grid place-items-center">
      <div className="container px-4 xl:px-16 flex flex-col gap-y-8">
        <h1 className="text-center text-3xl font-bold self-center text-balance">
          Forms with React-Hook-Form and Zod
        </h1>
        <Form />
      </div>
    </div>
  )
}

export default App
