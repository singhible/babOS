import { render } from '@testing-library/react'
import Index from 'pages/index'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from "themes/default.json"

test('renders index page', () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
    <Index />
    </ThemeProvider>
  )
  const linkElement = getByText("Creating the default app")

  expect(linkElement).toBeInTheDocument()
})