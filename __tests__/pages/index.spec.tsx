import { render } from '@testing-library/react'
import Index from 'pages/index'

test('renders index page', () => {
  const { getByText } = render(<Index />)
  const linkElement = getByText("Creating the default app")

  expect(linkElement).toBeInTheDocument()
})