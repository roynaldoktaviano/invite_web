import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export default function Provider({children} : {children: React.ReactNode}) {
  return (
    <NextUIProvider>
        <NextThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </NextThemeProvider>
    </NextUIProvider>
  )
}
