import { render } from '@testing-library/react'
import Index from 'pages/index'
import React from 'react'

test('renders index page', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText("Creating the default app")

  expect(linkElement).toBeInTheDocument()
})