import { env } from '@/env'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const envColors = {
  development: 'bg-green-500',
  production: 'bg-red-500',
  staging: 'bg-yellow-500',
} as const satisfies Record<keyof typeof env.VITE_APP_ENV, string>

const envAbbreviations = {
  development: '[DEV]',
  production: '[PROD]',
  staging: '[STG]',
} as const satisfies Record<keyof typeof env.VITE_APP_ENV, string>

export const getEnv = () => {
  return {
    label: env.VITE_APP_ENV,
    abbreviation:
      envAbbreviations[env.VITE_APP_ENV as keyof typeof envAbbreviations],
    color: envColors[env.VITE_APP_ENV as keyof typeof envColors],
  }
}
