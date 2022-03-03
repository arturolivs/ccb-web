import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('CCB', () => {
    render(<App />)
    const linkElement = screen.getByText(/Projeto CCB/i)
    expect(linkElement).toBeInTheDocument()
})
