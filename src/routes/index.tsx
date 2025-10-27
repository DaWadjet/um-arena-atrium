import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-center">UM Aréna Átrium</h1>
      <p className="text-lg text-gray-500 text-center">Fejlesztés alatt...</p>
    </div>
  )
}
