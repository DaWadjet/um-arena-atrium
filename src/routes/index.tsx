import { cn, getEnv } from '@/lib/utils'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

const env = getEnv()
//trigger branch deploy
function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-center">UM Aréna Átrium</h1>
      <p className="text-lg text-center">Fejlesztés alatt...</p>
      <p>
        Az app, amit nézel{' '}
        <span className={cn('italic', env.color)}>
          {env.label} <span className="font-bold">{env.abbreviation}</span>
        </span>{' '}
        környezetben fut
      </p>
    </div>
  )
}
