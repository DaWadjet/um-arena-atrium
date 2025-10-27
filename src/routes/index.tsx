import { env } from '@/env'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-center">UM Aréna Átrium</h1>
      <p className="text-lg text-center">Fejlesztés alatt...</p>
      <p>
        Az app, amit nézel{' '}
        <span className="italic text-muted-foreground">{env.VITE_APP_ENV}</span>{' '}
        környezetben fut
      </p>
    </div>
  )
}
