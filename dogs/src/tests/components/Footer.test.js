import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer from '../../components/Footer'

describe('Component: Footer', () => {
  it('Should render', () => {
    render(<Footer />)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
