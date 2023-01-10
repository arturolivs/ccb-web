import React from 'react'

import FormStyled from './Form.styles'

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    children: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(e)
    }
    return <FormStyled onSubmit={handleSubmit}>{children}</FormStyled>
}

export default Form
