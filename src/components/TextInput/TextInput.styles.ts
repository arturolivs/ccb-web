import styled from 'styled-components'

export const Label = styled.label`
    &:focus-within span {
        font-weight: bold;
        color: var(--primary-color-high-light);
    }
`

export const LabelText = styled.span`
    color: var(--gray-6);
    transition: all 0.3s;
`

export const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    background: var(--primary-color-light-4);
    color: var(--gray-6);

    border: 1px solid #d7e5f4;
    box-sizing: border-box;
    border-radius: 8px;

    font-size: 14px;
    letter-spacing: 0.04rem;
    transition: all 0.3s;

    &:focus {
        outline: none;
        border: 1px solid var(--primary-color-high-light);
    }
`
